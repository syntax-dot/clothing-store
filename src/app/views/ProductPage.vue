<template>
  <div :class="$style.root">
    <ProductView/>
    <ImagePresentation/>
  </div>
</template>

<script lang="ts" setup>
import { ImagePresentation } from '../components/ImagePresentation'
import { ProductView } from '../components/ProductView'
</script>

<style module lang="scss">
.root {
  height: 100%;
  width: 100%;
}

a {
  font-size: 1.4rem;
  margin: 8px 0;
}
</style>
