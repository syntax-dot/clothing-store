<template>
  <div :class="$style.root">
    <NameAndRating :title="nameAndRating.title"
                   :vendorCode="nameAndRating.vendorCode"
                   :reviews="nameAndRating.reviews"/>

    <ProductPrice :price="price.price"
                  :oldPrice="price.oldPrice"
                  :discountPercent="price.discountPercent"
                  :stockPercent="price.stockPercent"/>

    <ProductActions/>
    <ProductLinks/>
  </div>
</template>

<script lang="ts" setup>
import { NameAndRating } from '../NameAndRating'
import { ProductActions } from '../ProductActions'
import { NameAndRatingProps } from '../NameAndRating/NameAndRating.props'
import { ProductPrice } from '../ProductPrice'
import { ProductPriceProps } from '../ProductPrice/ProductPrice.props'
import { ProductLinks } from '../ProductLinks'

const nameAndRating: NameAndRatingProps = {
  title: 'Пижама для девочек', vendorCode: '02765/46', reviews: '14',
}

const price: ProductPriceProps = {
  price: 800, oldPrice: 1500, discountPercent: 36, stockPercent: 20,
}
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
</style>
