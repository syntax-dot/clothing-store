<template>
  <div :class="$style.root">
    <a :class="$style.link"
       href="#"> Просмотреть все стили</a>

    <div :class="$style.styles">
      <div :class="$style.left">
        <div :class="$style.left_image"
             :style="{ backgroundImage: `url(${mainImage})` }">
          <StyleInfo :likes="200"/>
        </div>
      </div>

      <div :class="$style.right">
        <div v-for="image in presetnationImages"
             :key="image"
             :style="{ backgroundImage: `url(${image})` }"
             :class="$style.right_image">
          <StyleInfo :likes="200"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { StyleInfo } from '../StyleInfo'
import { StylesPresentationProps } from './StylesPresentation.props'
defineProps<StylesPresentationProps>()
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

.left,
.right {
  max-width: 100%;
  height: 686px;
}

.left_image,
.right_image {
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.right {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 12px;
}

@media screen and (max-width: 768px) {
  .styles {
    grid-template-columns: 1fr;
  }

  .left,
  .right {
    width: 100%;
    height: 768px;
  }

}

@media screen and (max-width: 425px) {
  .styles {
    grid-template-columns: 1fr;
  }

  .left,
  .right {
    width: 100%;
    height: 425px;
  }

  .right,
  .styles {
    gap: 8px
  }

}
</style>
