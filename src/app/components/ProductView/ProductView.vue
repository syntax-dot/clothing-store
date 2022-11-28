<template>
  <div :class="$style.root">
    <ProductImage :imagesPaths="productImages"/>
  </div>
</template>

<script lang="ts" setup>
import { ProductImage } from '../ProductImage'
import { ProductViewProps } from './ProductView.props'

defineProps<ProductViewProps>()
</script>

<style module lang="scss">
.root {

}
</style>
