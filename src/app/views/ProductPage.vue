<template>
  <div :class="$style.root">
    <div>
      <ProductView :productImages="productPaths"/>
    </div>

    <div>
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
    </div>

    <StylesPresentation :presetnationImages="presentationPaths"/>
  </div>
</template>

<script lang="ts" setup>
import { ProductContent } from '../components/ProductContent'
import { ProductView } from '../components/ProductView'
import { imagesPaths } from '../components/ProductView/ImagesPath'
import { StylesPresentation } from '../components/StylesPresentation'
import { Product, Sizes } from '../types/product'

const productPaths = imagesPaths.PyjamasForGirls
const presentationPaths = imagesPaths.StylesImages

const pyjamasForGirls: Product = {
  id: 1,
  title: 'Пижама для девочек',
  vendorCode: '02765/46',
  reviews: 14,
  rating: 4,
  price: 800,
  availableSizes: [Sizes.L, Sizes.S, Sizes.M, Sizes.XL],
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
