<template>
  <div :class="$style.root">
    <ProductView :productImages="productPaths"/>

    <ProductContent :nameAndRating="pyjamasForGirls.title"
                    :rating="pyjamasForGirls.rating"
                    :price="pyjamasForGirls.price"
                    :title="pyjamasForGirls.title"
                    :vendorCode="pyjamasForGirls.vendorCode"
                    :discountPercent="pyjamasForGirls.discountPercent"
                    :stockPercent="pyjamasForGirls.stockPercent"
                    :oldPrice="pyjamasForGirls.oldPrice"
                    :reviews="pyjamasForGirls.reviews"
                    :availableSizes="pyjamasForGirls.availableSizes"/>

    <!-- <StylesPresentation :presetnationImages="presentationPaths"/> -->
  </div>
</template>

<script lang="ts" setup>
import { ProductContent } from '../components/ProductContent'
import { ProductView } from '../components/ProductView'
import { imagesPaths } from '../components/ProductView/ImagesPath'
import { StylesPresentation } from '../components/StylesPresentation'
import { Size, Product } from '../types/product'

const productPaths = imagesPaths.PyjamasForGirls
const presentationPaths = imagesPaths.StylesImages

const pyjamasForGirls: Product = {
  id: 1,
  title: 'Пижама для девочек',
  vendorCode: '02765/46',
  reviews: 14,
  rating: 4,
  price: 800,
  availableSizes: [Size.L, Size.S, Size.M, Size.XL],
  oldPrice: 1500,
  discountPercent: 36,
  stockPercent: 20,
  images: productPaths,
  inTheCart: false,
  inTheFavorite: false,
}
</script>

<style module lang="scss">
.root {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>
