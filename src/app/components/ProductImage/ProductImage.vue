<template>
  <div :class="$style.root"
       :style="{ backgroundImage: `url(${selectedImage})` }">
    <div :class="$style.select">
      <div v-for="image in imagesPaths"
           :key="image"
           :class="$style.select_image"
           :style="{ backgroundImage: `url(${image})` }"
           @click="selectedImage = image"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ProductImageProps } from './ProductImage.props'

const props = defineProps<ProductImageProps>()

const defaultMainImage = props.imagesPaths.find(v => (v.includes('main'))) ?? props.imagesPaths[0]

const selectedImage = ref(defaultMainImage)
</script>

<style module lang="scss">
.root {
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  // transition: 0.3s ease-in-out;
}

.select {
  position: absolute;
  display: grid;
  grid-auto-flow: row;
  gap: 7px;
  margin-left: 24px;
  margin-top: 26px;
  opacity: 0.8;
  transition: opacity 0.3s;

  &:hover {
    opacity: 1;
  }
}

.select_image {
  height: 90px;
  width: 70px;
  box-sizing: border-box;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgba(255, 255, 255, 0);
  transition: 0.3s ease-in-out;

  &:hover {
    border: 1px solid rgb(0, 0, 0);
  }
}

@media screen and (max-width: 680px) {
  .root {
    height: 100vh;
  }

}

@media screen and (max-width: 425px) {
  .root {
    height: 550px;
  }

}
</style>
