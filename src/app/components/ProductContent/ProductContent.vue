<template>
  <div :class="$style.root">
    <NameAndRating :title="title"
                   :vendorCode="vendorCode"
                   :reviews="reviews"
                   :rating="rating"/>

    <ProductPrice :price="price"
                  :oldPrice="oldPrice"
                  :discountPercent="discountPercent"
                  :stockPercent="stockPercent"/>

    <ProductActions :title="title"
                    :availableSizes="availableSizes"/>

    <ProductLinks/>
  </div>
</template>

<script lang="ts" setup>
import { NameAndRating } from '../NameAndRating'
import { ProductActions } from '../ProductActions'
import { ProductPrice } from '../ProductPrice'
import { ProductLinks } from '../ProductLinks'
import { ProductContentProps } from './ProductContent.props'

defineProps<ProductContentProps>()
</script>

<style module lang="scss">
.root {
  display: grid;
  grid-template-rows: repeat(4, max-content);
  gap: 28px;
  margin-top: 24px;
  margin-left: 36px;
  box-sizing: border-box;
}

@media screen and (max-width: 768px) {
  .root {
    margin-left: 20px;
  }
}
</style>
