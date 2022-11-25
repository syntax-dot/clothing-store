<template>
  <div :class="$style.root">
    <ProductView/>
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
</style>
