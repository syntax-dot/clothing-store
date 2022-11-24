<template>
  <div :class="$style.root">
    <div :class="$style.header">
      <HeaderMenu/>
    </div>

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
  max-width: 1390px;
}
</style>

<style lang="scss">
@import "../css/variables.scss";
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
  font-weight: 700;
}

#app {
  font-family: 'Open Sans', sans-serif;
}
</style>
