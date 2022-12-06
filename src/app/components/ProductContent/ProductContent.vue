<template>
  <div :class="$style.root">
    <BaseProductInfo :content="content"/>

    <ProductPrice :content="content"/>

    <ProductActions :title="content.title"
                    :availableSizes="content.availableSizes"/>

    <ProductLinks/>
  </div>
</template>

<script lang="ts" setup>
import { ProductActions } from '../ProductActions'
import { ProductPrice } from '../ProductPrice'
import { ProductLinks } from '../ProductLinks'
import { ProductContentProps } from './ProductContent.props'
import { BaseProductInfo } from '../BaseProductInfo'

defineProps<ProductContentProps>()
</script>

<style module lang="scss">
.root {
  display: grid;
  grid-template-rows: repeat(4, max-content);
  gap: 28px;
  // margin-top: 24px;
  // margin-left: 36px;
  margin: 24px 36px;
  box-sizing: border-box;
}

// @media screen and (max-width: 768px) {
//   .root {
//     margin-left: 20px;
//   }
// }
</style>
