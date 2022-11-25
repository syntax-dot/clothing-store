<template>
  <div :class="$style.root">
    <HeaderMenu :class="$style.header"/>

    <div :class="$style.content">
      <router-view/>
    </div>

    <div :class="$style.footer">
      <VFooter/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { HeaderMenu } from './components/HeaderMenu'
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
  width: 100%;
  height: 100%;
}

.header {
  height: 40px;
  width: 100%;
}

.content {
  box-sizing: border-box;
  padding-top: 24px;
  max-width: 1390px;
  margin: 0 auto;
  height: 100%;
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
  height: 100%;
  width: 100%;
}

body {
  background-color: $main-bg-color;
}

a {
  text-decoration: none;
  color: $a-color;
}

h1 {
  text-transform: uppercase;
}

#app {
  font-family: 'Open Sans', sans-serif;
}
</style>
