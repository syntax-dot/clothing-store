<template>
  <div :class="$style.root">
    <ProductView :productImages="productPaths"/>
    <StylesPresentation :imagesForPresentation="presentationPaths"/>
  </div>
</template>

<script lang="ts" setup>
import { ProductView } from '../components/ProductView'
import { imagesPaths } from '../components/ProductView/ImagesPath'
import { StylesPresentation } from '../components/StylesPresentation'

const productPaths = imagesPaths.PyjamasForGirls
const presentationPaths = imagesPaths.StylesImages
</script>

<style module lang="scss">
.root {

}

a {
  font-size: 1.4rem;
  margin: 8px 0;
}
</style>
