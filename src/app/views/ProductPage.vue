<template>
  <div :class="$style.root">
    <ProductImage :imagesPaths="product.images"/>

    <ProductContent :content="product"/>
  </div>

  <div :class="$style.presentation">
    <StylesPresentation :presetnationImages="rightImagePaths"
                        :mainImage="defaultMainImage"/>
  </div>
</template>

<script lang="ts" setup>
import { ProductContent } from '../components/ProductContent'
import { ProductImage } from '../components/ProductImage'
import { imagesPaths } from '../components/ProductView/ImagesPath'
import { StylesPresentation } from '../components/StylesPresentation'
import { Size, Product } from '../types/product'

// const productPaths = imagesPaths.PyjamasForGirls
const presentationPaths = imagesPaths.StylesImages
const defaultMainImage = presentationPaths.find(v => v.includes('main')) ?? presentationPaths[0]
const rightImagePaths = presentationPaths.filter(v => !v.includes('main'))

console.log(defaultMainImage)
console.log(rightImagePaths)

const product: Product = {
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
  images: imagesPaths.PyjamasForGirls,
  inTheCart: false,
  inTheFavorite: false,
}
</script>

<style module lang="scss">
.root {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

@media screen and (max-width: 680px) {

  .root {
    grid-template-columns: 1fr;
  }
}
</style>
