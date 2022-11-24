<template>
  <div :class="$style.root">
    <VLogo/>

    <VIcons/>
  </div>
</template>

<script lang="ts" setup>
import { VLogo } from '../VLogo'
import { VIcons } from '../VIcons'
</script>

<style module lang="scss">
.root {
  display: grid;
  grid-template-columns: max-content max-content;
  justify-content: space-between;
  align-content: center;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding-left: 240px;
  padding-right: 240px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
