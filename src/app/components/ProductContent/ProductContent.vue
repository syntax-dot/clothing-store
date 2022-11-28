<template>
  <div :class="$style.root">
    <NameAndRating :title="nameAndRating.title"
                   :vendorCode="nameAndRating.vendorCode"
                   :reviews="nameAndRating.reviews"/>

    <ProductPrice :price="price.price"
                  :oldPrice="price.oldPrice"
                  :discountPercent="price.discountPercent"
                  :stockPercent="price.stockPercent"/>

    <ProductActions :title="nameAndRating.title"/>
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
