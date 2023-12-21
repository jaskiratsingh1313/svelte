const axios = require("axios");
const express = require("express");
// const cors = require("cors")
const app = express();
const Port = process.env.Port || 5000;
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
const baseUrl = "https://schneider:yAHpjr_Bs@uat-community.se.com";
let secondarySessionKey;
let lastSessionKeysTimestamp = 0; // Initialize with a timestamp

const MINUTES_TO_WAIT = 20;
// app.use(cors());
app.use('/apiSvelte', async (req, res) => {
    async function getSessionKeys(name) {
        try {
            const currentTime = Date.now();
            if (currentTime - lastSessionKeysTimestamp >= MINUTES_TO_WAIT) {
                let userName = "shavetas2";
                let password = encodeURIComponent("Ch4ngeM3");
                const loginResponse = await axios.post(`${baseUrl}/restapi/vc/authentication/sessions/login?user.login=${userName}&user.password=${password}&restapi.response_format=json&restapi.response_style=-types,-null`);
                const primarySessionKey = loginResponse.data.response.value;
                const secondarySessionResponse = await axios({
                    url: `${baseUrl}/restapi/vc/authentication/sessions/login?user.login=shivam&restapi.response_format=json&restapi.response_style=-types,-null`,
                    method: "post",
                    headers: {
                        'li-api-session-key': primarySessionKey,
                        'content-type': 'application/json'
                    }
                });
                secondarySessionKey = secondarySessionResponse.data.response.value;
                lastSessionKeysTimestamp = currentTime;
                return { primarySessionKey, secondarySessionKey };
            } else {
                return { secondarySessionKey };
            }
        } catch (error) {
            throw error;
        }
    }
    try {
        const { primarySessionKey, secondarySessionKey } = await getSessionKeys();
        console.log("Primary Session key: " + primarySessionKey);
        console.log("Secondary Session key: " + secondarySessionKey);
        res.send(secondarySessionKey);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error obtaining session keys");
    }
});

app.use('/apiCount', async (req, res) => {
    try {
        if (!secondarySessionKey) {
            return res.status(401).json({ message: "Not authenticated" });
        }
        // const authResponse = await axios.get(`${baseUrl}/api/2.0/search?q=Select target.id,target.title,target.view_href,target.conversation_style,target.thread_style from subscriptions where target.type='board' and subscriber.id='3240'`, {
        const authResponse = await axios.get(`${baseUrl}/api/2.0/search?q=SELECT conversation.solved,id,author.rank,board.title,author.id,author.avatar.profile,author.login,view_href,author.view_href,subject,body,metrics.views,kudos.sum(weight),replies.count(*),status.name, post_time_friendly,board.id,author.rank.icon_left,author.rank.icon_right,board.view_href,user_context.read, conversation.last_post_time from messages where depth=0 and conversation.style = 'forum'`, {
            headers: {
                "li-api-session-key": secondarySessionKey
            }
        });;
        console.log("authResponse.data", authResponse.data)
        res.status(201).json({ message: authResponse.data })
    } catch (error) {
        console.log(error.message);
        res.status(501).json({ message: error.message });
    }
});

app.listen(Port, () => {
    console.log(`Server is running on Port ${Port}`);
});