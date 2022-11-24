<template>
  <div :class="$style.root">
    <ProductView/>
    <ProductActions/>
  </div>
</template>

<script lang="ts" setup>
import { ProductActions } from '../ProductActions'
import { ProductView } from '../ProductView'
</script>

<style module lang="scss">
.root {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  height: 100%;
}
</style>
