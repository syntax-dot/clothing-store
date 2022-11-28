<template>
  <div :class="$style.root">
    <ProductView :productImages="product"/>
    <ImagePresentation :imagesForPresentation="presentation"/>
  </div>
</template>

<script lang="ts" setup>
import { ImagePresentation } from '../components/ImagePresentation'
import { ProductView } from '../components/ProductView'
import { imagesPaths } from '../components/ProductView/ImagesPath'
import { ImagePresentationProps } from '../components/ImagePresentation/ImagePresentation.props'

const product = imagesPaths.PyjamasForGirls
const presentation = imagesPaths.StylesImages
</script>

<style module lang="scss">
.root {

}

a {
  font-size: 1.4rem;
  margin: 8px 0;
}
</style>
