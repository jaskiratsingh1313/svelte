
<!-- Tab.svelte -->
<script>
  import {onMount} from "svelte";
  import axios from "axios"
  let activeTab = "home-office-forum";
  function changeTab(tab) {
    activeTab = tab;
  }
 onMount(async() => {
  var headers = new Headers({
    'Authorization': `Basic ${btoa('schneider' + ':' + 'yAHpjr_Bs')}`
});
headers.append("Origin", 'https://uat-community.se.com');
headers.append("authorization", 'basic ep_2ZqCrUehXOJ4fUw9p6NRSE5b3jk');
  const res = await fetch(`https://uat-community.se.com/krefy84679/plugins/custom/schneider/schneider/testendpoint`,{headers:headers, credentials: 'same-origin',
            method: 'POST',
            mode: 'cors'}
            );
  console.log(await res.json(),'res');
 })
   

</script>

<div class="tab" onload="fetchData()">
  <div class="tab-container">
    <button
      class:active={activeTab === "home-office-forum"}
      on:click={() => changeTab("home-office-forum")}
      class="tablinks">Home and Office Forum</button
    >
    <button
      class:active={activeTab === "ecostruxure-it-forum"}
      on:click={() => changeTab("ecostruxure-it-forum")}
      class="tablinks">EcoStruxure IT forum</button
    >
    <button
      class:active={activeTab === "apc-ups-data-center"}
      on:click={() => changeTab("apc-ups-data-center")}
      class="tablinks">APC UPS Data Center & Enterprise Solutions Forum</button
    >
  </div>
  <div class="tabcontent" style="display: block;">
    {#if activeTab === "home-office-forum"}
      <div class="main-data">
        <div
          class="data-post cardView__Shadow cardView__BorderTop category-post"
        >
          <div class="data-avatar category-avatar">
            <div class="user-img">
              <a
                class="UserAvatar lia-link-navigation view-profile"
                href="/t5/user/viewprofilepage/user-id/475"
              >
                <img
                  class="lia-user-avatar-message"
                  title="arshiam"
                  alt="arshiam"
                  src="https://schneider:yAHpjr_Bs@uat-community.se.com/t5/image/serverpage/avatar-name/home/avatar-theme/candy/avatar-collection/Architecture/avatar-display-size/profile/version/2?xdesc=1.0"
                  width="50"
                  height="50"
                  load="lazy"
                />
              </a>
            </div>
          </div>
          <div class="data-main category-data">
            <div class="data-subject data-description">
              <h3>
                <a
                  href="https://schneider:yAHpjr_Bs@uat-community.se.com/t5/Home-and-Office-Forum/test-business-power-forum/td-p/67636"
                  class="lia-message-read">test business-power-forum</a
                >
              </h3>
            </div>
            <div class="data-body data-information">test</div>
            <span class="read-more"
              ><a
                href="https://schneider:yAHpjr_Bs@uat-community.se.com/t5/Home-and-Office-Forum/test-business-power-forum/td-p/67636"
                target="_blank">Read More</a
              ></span
            >
          </div>
        </div>
      </div>
    {/if}
    {#if activeTab === "ecostruxure-it-forum"}
      <div class="main-data">
        <div
          class="data-post cardView__Shadow cardView__BorderTop category-post"
        >
          <div class="data-avatar category-avatar">
            <div class="user-img">
              <a
                class="UserAvatar lia-link-navigation view-profile"
                href="/t5/user/viewprofilepage/user-id/475"
              >
                <img
                  class="lia-user-avatar-message"
                  title="arshiam"
                  alt="arshiam"
                  src="https://schneider:yAHpjr_Bs@uat-community.se.com/t5/image/serverpage/avatar-name/home/avatar-theme/candy/avatar-collection/Architecture/avatar-display-size/profile/version/2?xdesc=1.0"
                  width="50"
                  height="50"
                  load="lazy"
                />
              </a>
            </div>
          </div>
          <div class="data-main category-data">
            <div class="data-subject data-description">
              <h3>
                <a
                  href="/t5/EcoStruxure-IT-forum/hi/td-p/79259"
                  class="lia-message-unread">Welcome to Our World of Inspiration</a
                >
              </h3>
            </div>
            <div class="data-body data-information">Discover a realm where creativity knows no bounds and innovation is the heartbeat of every idea. Welcome to our vibrant and dynamic space, where we weave dreams into reality</div>
            <span class="read-more"
              ><a href="/t5/EcoStruxure-IT-forum/hi/td-p/79259" target="_blank"
                >Read More</a
              ></span
            >
          </div>
        </div>
        <div
          class="data-post cardView__Shadow cardView__BorderTop category-post"
        >
          <div class="data-avatar category-avatar">
            <div class="user-img">
              <a
                class="UserAvatar lia-link-navigation view-profile"
                href="/t5/user/viewprofilepage/user-id/3240"
              >
                <img
                  class="lia-user-avatar-message"
                  title="Shivam"
                  alt="Shivam"
                  src="https://schneider:yAHpjr_Bs@uat-community.se.com/t5/image/serverpage/image-id/9174i4384DC3A5D805B66/image-dimensions/150x150/image-coordinates/0%2C0%2C364%2C364?v=v2"
                  width="50"
                  height="50"
                  load="lazy"
                />
              </a>
            </div>
          </div>
          <div class="data-main category-data">
            <div class="data-subject data-description">
              <h3>
                <a
                  href="/t5/EcoStruxure-IT-forum/2-DCE-SERVER-Mirror-configuration/td-p/79052"
                  class="lia-message-read">2 DCE SERVER Mirror configuration</a
                >
              </h3>
            </div>
            <div class="data-body data-information">
              This question was originally posted on DCIM Support by Hojjat
              Saeidi on 2017-10-15 I have 2 DCE 7.2.0 i want know How can i
              configuration mirror 2 dce server ? can i do that like two server
              ? (CID:12...)
            </div>
            <span class="read-more"
              ><a
                href="/t5/EcoStruxure-IT-forum/2-DCE-SERVER-Mirror-configuration/td-p/79052"
                target="_blank">Read More</a
              ></span
            >
          </div>
        </div>
        <div
          class="data-post cardView__Shadow cardView__BorderTop category-post"
        >
          <div class="data-avatar category-avatar">
            <div class="user-img">
              <a
                class="UserAvatar lia-link-navigation view-profile"
                href="/t5/user/viewprofilepage/user-id/3240"
              >
                <img
                  class="lia-user-avatar-message"
                  title="Shivam"
                  alt="Shivam"
                  src="https://schneider:yAHpjr_Bs@uat-community.se.com/t5/image/serverpage/image-id/9174i4384DC3A5D805B66/image-dimensions/150x150/image-coordinates/0%2C0%2C364%2C364?v=v2"
                  width="50"
                  height="50"
                  load="lazy"
                />
              </a>
            </div>
          </div>
          <div class="data-main category-data">
            <div class="data-subject data-description">
              <h3>
                <a
                  href="/t5/EcoStruxure-IT-forum/2-DCE-SERVER-Mirror-configuration/td-p/79052"
                  class="lia-message-read"> Explore Endless Horizons</a
                >
              </h3>
            </div>
            <div class="data-body data-information">
                Our platform is a hub of inspiration, innovation, and imagination, where ideas come to life. Embark on a journey of endless possibilities as we invite you to explore the boundless horizons of creativity
            </div>
            <span class="read-more"
              ><a
                href="/t5/EcoStruxure-IT-forum/2-DCE-SERVER-Mirror-configuration/td-p/79052"
                target="_blank">Read More</a
              ></span
            >
          </div>
        </div>
        <div class="boardLinks">
            <div class="subscribe-btn">
                    <a href="/t5/Home-and-Office-Forum/bd-p/home-office-forum" target="_blank" class="unsubscribeBoard lia-button lia-button-primary lia-button-Cancel-action" id="home-office-forum"><img src="https://schneider:yAHpjr_Bs@uat-community.se.com/html/@13BE43B8DCFD9507A9FDAEA356FD467F/assets/bell.svg" alt="bell icon">Unsubscribe</a>
            </div>
        <span class="forum"><a href="/t5/Home-and-Office-Forum/bd-p/home-office-forum" target="_blank">Go to Forum</a></span>
        </div>
      </div>
    {/if}
    {#if activeTab === "apc-ups-data-center"}
      <div class="main-data">
        <h5 class="no-data-found">
         No data found.
        </h5>
      </div>
    {/if}
  </div>
</div>

<style>
  /* Style the tab */
  * {
    font-family: "Arial Rounded MT", Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .tab {
    overflow: hidden;
    display: flex;
    flex-flow: row wrap;
    background: #fafafa;
    border: 1px solid #e7e6e6;
    margin: 0 auto;
    max-width: 1200px;
    margin-top: 15px;
  }

  /* Style the buttons inside the tab */
  .tab .tablinks {
    float: left;
    outline: none;
    cursor: pointer;
    padding: 14px 16px;
    font-size: 13px;
    font-weight: 400;
    line-height: normal;
    border: 1px solid #e7e6e6;
    border-top: none;
    background-color: #fafafa;
    color: #333;
    font-weight: 400;
  }

  /* Change background color of buttons on hover */
  .tab .tablinks:hover {
    background-color: #ddd;
  }

  /* Create an active/current tablink class */
  .tab .tablinks.active {
    background-color: #fff;
    border-bottom: none;
    color: #3dcd58;
    font-size: 14px;
    font-weight: 700;
    pointer-events: none;
    border-top: 2px solid #3dcd58;
  }

  /* Style the tab content */
  .tabcontent {
    display: none;
    padding: 9px 12px 6px 15px;
    width: 100%;
    background: #fff;
  }
  .main-data {
    padding-bottom: 9px;
  }
  .main-data .data-post {
    display: flex;
    margin-bottom: 5px;
    padding: 10px 15px;
    position: relative;
    align-items: center;
  }
  .main-data .data-post:nth-last-child(2) {
    padding-bottom: 0;
    margin-bottom: 15px;
  }
  @media (max-width: 767px) {
    .main-data .data-post {
      padding: 10px;
    }
  }
  .main-data .data-avatar {
    margin-right: 16px;
    height: 50px;
    width: 50px;
    position: relative;
    border-radius: 100%;
    overflow: hidden;
    border: 2px solid #3dcc58;
  }
  .main-data .data-avatar .lia-user-avatar-message {
    width: 100%;
    border-radius: 0;
    box-shadow: none;
    height: 50px;
  }
  .main-data .data-main.category-data {
    /*  width: 100%;  */
    width: calc(100% - 66px);
  }
  .main-data .data-main .data-subject {
    font-size: 20px;
    color: #212121;
    line-height: 23px;
    margin-bottom: 3px;
  }
  .main-data .data-main .data-subject a {
    color: inherit;
    text-decoration: none;
    word-wrap: break-word;
    font-size: 15px;
    font-weight: 700;
    line-height: 18px;
  }
  .main-data .data-main .data-information {
    font-size: 14px;
    line-height: 18px;
    color: #333;
    font-weight: 400;
  }
  .read-more a {
    font-size: 14px;
    font-weight: 400;
    line-height: 15px;
    transition: color 0.3s ease;
    text-decoration: none;
    display: inline-block;
    margin-top: 17px;
    color: #42b4e6;
  }
  .read-more a::after {
    content: "\f105";
    margin-left: 14px;
    font-family: "FontAwesome";
    font-size: 12px;
  }
  .read-more a:hover {
    color: #1d9fd8;
  }
  .boardLinks {
    display: flex;
    margin-left: 15px;
    gap: 14px;
  }

  .subscribe-btn .lia-button.lia-button-primary,
  .forum a {
    display: flex;
    align-items: center;
    padding: 3px 18.1px;
    background-color: #42b4e6;
    color: #fff;
    text-decoration: none;
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    transition: 0.3s;
    border: 1px solid #42b4e6;
    border-radius: 2px;
  }
  .subscribe-btn .lia-button.lia-button-primary img {
    margin-right: 5px;
    width: 24px;
    height: 24px;
  }
  .forum a {
    color: #42b4e6;
    background-color: transparent;
  }
  .subscribe-btn .lia-button.lia-button-primary:hover,
  .subscribe-btn .lia-button.lia-button-primary:active,
  .subscribe-btn .lia-button.lia-button-primary:focus,
  .forum a:hover,
  .forum a:active,
  .forum a:focus {
    background-color: #1d9fd8;
  }
  .forum a:hover,
  .forum a:active,
  .forum a:focus {
    color: #fff;
  }
  .forum a:before {
    content: "\f08e";
    font-family: 'FontAwesome';
    /* background: url("/html/assets/externalLink.svg"); */
    margin-right: 3px;
    width: 24px;
    height: 24px;
  }
  .forum a:hover::before {
    filter: brightness(100);
  }
  .tab-container {
    display: flex;
    overflow-x: auto;
    white-space: nowrap;
    scrollbar-width: none;
    scrollbar-color: transparent transparent;
  }
  .tab-container::-webkit-scrollbar {
    height: 0;
  }
</style>