<template>
  <div :class="$style.root">
    <ProductImage :class="$style.image"
                  :imagesPaths="productImages"/>
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

.image {
  height: 878px;
  width: 686px;
}

@media screen and (max-width: 425px) {
  .root {
    grid-template-columns: 1fr;
  }

  .image {
    width: auto;
  }
}
</style>
