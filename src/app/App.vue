<template>
  <div :class="$style.root">
    <HeaderMenu :class="$style.header"/>

    <div :class="$style.content">
      <router-view/>
    </div>

    <div>
      <VFooter :class="$style.footer"/>
    </div>
    <NotificationView/>
  </div>
</template>

<script setup lang="ts">
import { HeaderMenu } from './components/HeaderMenu'
import { NotificationView } from './components/NotificationView'
import { VFooter } from './components/VFooter'
</script>

<style module lang="scss">
@import "../css/variables.scss";
.root {
  display: grid;
  grid-template-rows: max-content 1fr max-content;
  grid-template-areas: 'Header' 'Content' 'Footer';
  align-items: center;
  background-color: $main-bg-color;
}

.header {
  height: 40px;
  width: 100%;
  padding-left: 240px;
  padding-right: 240px;
}

.content {
  box-sizing: border-box;
  padding-top: 24px;
  max-width: 1390px;
  width: 100%;
  height: 100%;
}

.footer {
  padding: 70px 240px 130px 240px;
}

@media screen and (min-width: 1390px) {

  .content {
    margin: 0 auto;
  }

}

@media screen and (max-width: 1440px) {

  .header, .footer {
    padding-left: 140px;
    padding-right: 140px;
  }
}

@media screen and (max-width: 1024px) {

  .header, .footer {
    padding-left: 20px;
    padding-right: 20px;
  }
}

@media screen and (max-width: 768px) {
  .header {
    height: 67px;
  }

  .content {
    padding-top: 0;
  }
}

@media screen and (max-width: 425px) {
  .root {
    display: block;
  }
  .footer {
    padding-top: 42px;
  }
}
</style>

<style lang="scss">
@import "../css/variables.scss";

:root {
  font-size: 62.5%;
}

#app,
* {
  margin: 0;
  padding: 0;
}

#app,
body,
html {
  // height: 100%;
  width: 100%;
}

body {
  background-color: $main-bg-color;
}

a {
  text-decoration: none;
  color: $a-color;
  font-size: 1.4rem;
  margin: 8px 0;

  &:hover {
    color: #000;
  }
}

h1 {
  text-transform: uppercase;
}

#app {
  font-family: 'Open Sans', sans-serif;
}
</style>
