<template>
  <div :class="$style.root">
    <ProductContent/>
  </div>
</template>

<script lang="ts" setup>
import { ProductContent } from '../ProductContent'

</script>

<style module lang="scss">
.root {
  width: 100%;
  height: 100%;
}
</style>
