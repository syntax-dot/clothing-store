<template>
  <div :class="$style.root">
    <div/>
    <ProductContent/>
  </div>
</template>

<script lang="ts" setup>
import { ProductContent } from '../ProductContent'

</script>

<style module lang="scss">
.root {
  display: grid;
  grid-template-columns: 50% 50%;
  width: 100%;
  height: 100%;
}
</style>
