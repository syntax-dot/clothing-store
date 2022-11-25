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
import { ProductLinks } from '../ProductLinks'
import { NameAndRatingProps } from '../NameAndRating/NameAndRating.props'
import { ProductPrice } from '../ProductPrice'
import { ProductPriceProps } from '../ProductPrice/ProductPrice.props'

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
  grid-auto-flow: row;
  width: 100%;
  height: 100%;
}
</style>
