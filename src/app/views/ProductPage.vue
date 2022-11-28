<template>
  <div :class="$style.root">
    <ProductView :productImages="product"
                 :imagesForPresentation="presentation"/>
    <ImagePresentation/>
  </div>
</template>

<script lang="ts" setup>
import { ImagePresentation } from '../components/ImagePresentation'
import { ProductView } from '../components/ProductView'
import { imagesPaths } from '../components/ProductView/ImagesPath'

const product = imagesPaths.PyjamasForGirls
const presentation = imagesPaths.StylesImages
</script>

<style module lang="scss">
.root {
  height: 100%;
  width: 100%;
}

a {
  font-size: 1.4rem;
  margin: 8px 0;
}
</style>
