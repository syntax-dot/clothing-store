<template>
  <div :class="$style.root">
    <ProductImage/>
    <ProductContent/>
  </div>
</template>

<script lang="ts" setup>
import { ProductContent } from '../ProductContent'
import { ProductImage } from '../ProductImage'
</script>

<style module lang="scss">
.root {
  display: grid;
  grid-template-columns: max-content max-content;
  width: 100%;
  height: 100%;
}
</style>
