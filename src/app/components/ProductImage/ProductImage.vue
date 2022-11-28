<template>
  <div :class="$style.root">
    <ImageSelect :imagesPaths="props.imagesPaths"/>
    <!-- <img :class="$style.image"
         src="./Pajamas_1.jpg"
         alt="PyjamasForGirls"> -->
  </div>
</template>

<script lang="ts" setup>
import { ImageSelect } from '../ImageSelect'
import { ProductImageProps } from './ProductImage.props'

const props = defineProps<ProductImageProps>()
</script>

<style module lang="scss">
.root {
  height: 878px;
  width: 686px;

  background-image: url("./Pajamas_1.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

}

.image {

}
</style>
