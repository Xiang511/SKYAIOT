<script setup>
</script>
<template>
  <section class="home">
        <img class="img-slide active" src="/img/AnyConv.com__banner1.webp">
        <img class="img-slide" src="/img/banner2.jfif">
        <img class="img-slide" src="/img/AnyConv.com__banner3.webp">
        <img class="img-slide" src="/img/AnyConv.com__banner4.webp">

        <div class="content active">
            <h1>SKY</h1>
            <span>AIOT</span>
            <p></p>

        </div>
        <div class="content">
            <h1>SKY</h1>
            <span>AIOT</span>

            <p></p>

        </div>
        <div class="content">
            <h1>SKY</h1>
            <span>AIOT</span>

            <p></p>

        </div>
        <div class="content">
            <h1>SKY</h1>
            <span>AIOT</span>

            <p></p>

        </div>
        <div class="media-icons">
            <a href="https://www.facebook.com/skyaiot/"><i class="fa fa-facebook-f" style="margin-left: 4px;"></i></a>
            <a href="https://www.youtube.com/@user-rg9jl5rj8g"><i class="fa fa-youtube-play"></i></a>
            <a href="https://linevoom.line.me/user/_dZ3hgZKU8vHl-irHvqTKwbgMZUwfQ4ACHDLnj_8"><i class="fa-brands fa-line"></i></a>
            <a href="https://shopee.tw/sky_village_aiot"><i class="fa-solid fa-cart-shopping"></i></a>
            <address>
                <a href="mailto:aiot@skyvillagecoffee.com"><i class="fa fa-envelope"></i></a>
            </address>


        </div>
        <div class="slider-navigation">
            <div class="nav-btn active"></div>
            <div class="nav-btn" id="nav-button2"></div>
            <div class="nav-btn"></div>
            <div class="nav-btn"></div>
        </div>

    </section>
</template>
<style scoped>

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