<script setup>
import nav from '../public/js/nav.js';

onMounted(() => {
  nav();
});
</script>

<template>
  <header>
    <nuxt-link to="/" class="brand"
      ><img
        src="/img/logo.png"
        style="width: 35px; height: 35px; margin-right: 6px"
        alt=""
      />SKY AIOT</nuxt-link>
    <div class="menu-btn">
      <div class="navigation">
        <div class="navigation-items">

            <nuxt-link to="/">Home</nuxt-link>
            <nuxt-link to="/Intelligent" class="hide">Intelligent Domains</nuxt-link>

            <ul class="dropdown">
            <li>
              <nuxt-link to="/Intelligent" id="ab">Intelligent Domains</nuxt-link>
            </li>
            </ul>

            <nuxt-link to="/patents">Patents</nuxt-link>
            <nuxt-link to="/product">Products</nuxt-link>
            <nuxt-link to="/successfulstory">Successful Stories</nuxt-link>
            <nuxt-link to="/aboutus">About Us</nuxt-link>
            <nuxt-link id="global" to="/chinese"
            ><img
              src="/img/worlwide-global-svgrepo-com.svg"
              style="width: 16px; height: 16px; color: #fff; margin-left: 4px"
            /></nuxt-link>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* <!-- 下拉式表單 -- > */
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-submenu {
  position: absolute;
  display: none;
  background-color: #000;
  right: -1px;
  width: 90%;
}

.dropdown-submenu li {
  display: block;
  box-sizing: border-box;
  padding: 5px;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}
.dropdown-submenu li:first-child {
  margin-top: 20px;
}
.dropdown .dropdown-submenu li > a {
  margin: 8px;
}

.dropdown-submenu a {
  color: #fff;
  text-align: right;
}

.dropdown:hover .dropdown-submenu {
  display: block;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

img{
  vertical-align: middle;
}
.reveal {
  position: relative;
  transform: translateY(150px);
  opacity: 0;
  transition: all 1s ease;
}

.reveal.active {
  transform: translateY(0px);
  opacity: 1;
}
header {
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 200px;
  transition: 0.5s ease;
  background: rgba(0, 0, 0, 1);
}
header .brand {
  color: #fff;
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;
}
header .brand:hover {
  color: #09a6d4;
}
header .navigation {
  position: relative;
}
header .navigation .navigation-items a {
  position: relative;
  color: #fff;
  font-size: 1em;
  font-weight: 500;
  text-decoration: none;
  margin-left: 30px;
  transition: 0.3s ease;
}
#ab {
  position: relative;
  color: #fff;
  font-size: 1em;
  font-weight: 500;
  text-decoration: none;
  margin-left: 30px;
  transition: 0.3s ease;
}
.hide {
  display: none;
}
.hide2 {
  display: none;
}
header .navigation .navigation-items a:before {
  content: "";
  position: absolute;
  color: #fff;
  width: 0;
  height: 3px;
  bottom: 0;
  left: 0;
  transition: 0.3s ease;
}
header .navigation .navigation-items a:hover:before {
  width: 100%;
  background-color: #09a6d4;
}
section.home {
  padding: 100px 200px;
}
.home {
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* background: rgba(0,140,255,0.959); */
  background: rgba(0, 0, 0, 1);
}
.home:before {
  z-index: 777;
  content: "";
  position: absolute;
  background: rgba(251, 3, 3, 0.034);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.home .content {
  z-index: 888;
  color: #fff;
  width: 70%;
  margin-top: 50px;
  display: none;
}
.home .content.active {
  display: block;
}
.home .content h1 {
  font-size: 4em;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 5px;
  line-height: 75px;
  margin-bottom: 40px;
}
.home .content h1 span {
  font-size: 0.8em;
  font-weight: 600;
}
.home .content a {
  background: #fff;
  padding: 15px 35px;
  color: #09a6d4;
  font-size: 1.1em;
  font-weight: 500;
  text-decoration: none;
  border-radius: 2px;
}
#global::after {
  content: "Chinese";
  margin-left: 0.5em;
  margin-top: 2px;
}
.home .content a:hover {
  background: #09a6d4;
  color: #fff;
}
.home .media-icons {
  z-index: 888;
  position: absolute;
  right: 30px;
  display: flex;
  flex-direction: column;
  transition: 0.5s ease;
}

.home .content p {
  margin-bottom: 65px;
}

.home .media-icons a {
  color: #fff;
  font-size: 1.6em;
  transition: 0.3s ease;
}
.home .media-icons a:not(:last-child) {
  margin-bottom: 20px;
}
.home .media-icons a:hover {
  transform: scale(1.3);
  color: #09a6d4;
}
.home img {
  z-index: 000;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(40%);
}
.slider-navigation {
  z-index: 888;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(80px);
  margin-bottom: 12px;
}
.slider-navigation .nav-btn {
  width: 12px;
  height: 12px;
  background: #fff;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 0 2px rgba(255, 255, 255, 0.5);
  transition: 0.3s ease;
}
.slider-navigation .nav-btn.active {
  background: #09a6d4;
}
.slider-navigation .nav-btn:not(:last-child) {
  margin-right: 20px;
}
.slider-navigation .nav-btn:hover {
  transform: scale(1.2);
}

.img-slide {
  position: absolute;
  width: 100%;
  clip-path: circle(0% at 0 50%);
}
.img-slide.active {
  clip-path: circle(150% at 0 50%);
  transition: 2s ease;
  transition-property: clip-path;
}

@media (max-width: 1320px) {
  header {
    padding: 12px 20px;
  }
  section.home {
    padding: 100px 20px;
  }
  .home .media-icons {
    right: 15px;
  }
  header .navigation {
    display: none;
  }
  header .navigation.active {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(1, 1, 1, 0.5);
  }
  header .navigation .navigation-items a {
    color: #222;
    font-size: 1.2em;
    margin: 20px;
  }
  header .navigation .navigation-items a:before {
    background: #222;
    height: 5px;
  }
  header .navigation .navigation-items {
    background: #fff;
    width: 600px;
    max-width: 600px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: start;
    border-radius: 5px;
    box-shadow: 0 5px 25px rgb(1 1 1/ 20%);
  }
  .menu-btn {
    background: url(/img/hicon.svg) no-repeat;
    background-size: 30px;
    background-position: center;
    width: 40px;
    height: 40px;
    cursor: pointer;
    transition: 0.3s ease;
  }
  .menu-btn.active {
    z-index: 999;
    background: url(/img/close.png) no-repeat;
    background-size: 25px;
    background-position: center;
    transition: 0.3s ease;
  }

  .dropdown {
    display: none;
  }
  .dropdown li {
    display: none;
  }

  .dropdown-submenu {
    display: none;
  }

  .dropdown-submenu li {
    display: none;
  }
  /* .dropdown .dropdown-submenu li > a{
      margin: 0px;
  } */

  .dropdown-submenu a {
    display: none;
  }

  .dropdown:hover .dropdown-submenu {
    display: none;
  }
  .hide,
  .hide2 {
    display: block;
  }

  #global::after {
    border-top: 2px solid;
    padding-top: 0.5em;
    content: "Chinese Website";
    margin-left: -1.5em;
  }
}
@media (max-width: 560px) {
  .home .content h1 {
    font-size: 3em;
    line-height: 60px;
  }
}
</style>
