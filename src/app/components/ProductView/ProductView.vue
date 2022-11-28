<template>
  <div :class="$style.root">
    <ProductImage :imagesPaths="productImages"/>
    <ProductContent :nameAndRating="nameAndRating"
                    :price="price"/>
  </div>
</template>

<script lang="ts" setup>
import { ProductContent } from '../ProductContent'
import { ProductImage } from '../ProductImage'
import { ProductViewProps } from './ProductView.props'
import { NameAndRatingProps } from '../NameAndRating/NameAndRating.props'
import { ProductPriceProps } from '../ProductPrice/ProductPrice.props'

defineProps<ProductViewProps>()

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
  grid-template-columns: 1fr 1fr;
}
</style>
