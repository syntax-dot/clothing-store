<template>
  <div :class="$style.root">
    <a :class="$style.link"
       href="#"> Просмотреть все стили</a>

    <div :class="$style.styles">
      <div :class="$style.left_image"
           :style="{ backgroundImage: `url(${defaultMainImage})` }"/>

      <div v-for="image in presetnationImages"
           :key="image"
           :style="{ backgroundImage: `url(${image})` }"
           :class="$style.right_image"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { StylesPresentationProps } from './StylesPresentation.props'
const props = defineProps<StylesPresentationProps>()

const defaultMainImage = props?.presetnationImages.findIndex(v => (v.includes('main'))) ?? props.presetnationImages[0]
</script>

<style module lang="scss">
.root {
  text-align: center;
  margin-top: 24px;
}

.link {
  text-decoration: underline;
  margin: 24px;
  transition: .2s ease-in-out;

  &:hover {
    color: #000;
    font-weight: 500;
  }
}
.styles {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-top: 24px;
}

.left_image,
.right_image {

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 686px;
  height: 686px;

  // max-width: 686px;
  // max-height: 686px;

  // background-color: rgb(138, 138, 138);
}

.right_image {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 12px;
}

.right > div {
  // max-height: 335px;
  // background-color: #333;
}

@media screen and (max-width: 768px) {
  .styles {
    grid-template-columns: 1fr;
  }

    .left {
    width: 100%;
  }

}

@media screen and (max-width: 425px) {
  .styles {
    grid-template-columns: 1fr;
  }

}
</style>
