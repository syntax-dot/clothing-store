<template>
  <div :class="$style.root">
    <VLogo/>
  </div>
</template>

<script lang="ts" setup>
import { VLogo } from '../VLogo'

</script>

<style module lang="scss">
.root {
  display: grid;
  grid-template-columns: max-content max-content;
  // justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
  // margin-left: 240px;
  // margin-right: 240px;
}
</style>
