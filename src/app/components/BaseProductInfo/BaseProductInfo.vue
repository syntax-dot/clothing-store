<template>
  <div :class="$style.root">
    <h2 :class="$style.title"> {{ content.title }}</h2>
    <h2 :class="$style.vendor_code"> {{ 'Арт. ' + content.vendorCode }}</h2>
    <div :class="$style.rating">
      Отзывы
      <RatingStars :rating="content.rating"/>

      {{ content.reviews }} Отзывов
      <img :class="$style.arrow_left" src="../../../assets/icons/arrowLeft.svg">
    </div>
  </div>
</template>

<script lang="ts" setup>
import { RatingStars } from '../RatingStars'
import { BaseProductInfoProps } from './BaseProductInfo.props'

defineProps<BaseProductInfoProps>()
</script>

<style module lang="scss">
@import "../../../css/variables.scss";

.root {
  // width: 100%;
  // height: 100%;
}

.title {
  font-size: 1.8rem;
  font-weight: 600;
  padding: 4px 0;
}

.vendor_code {
  font-size: 1.2rem;
  font-weight: 400;
  color: $vendor-code-color;
  padding: 4px 0 8px;
}

.rating {
  display: grid;
  grid-template-columns: repeat(4, max-content);
  gap: 10px;
  font-size: 1.4rem;
  align-items: center;
  padding: 8px 0 4px;
}

.arrow_left {
  cursor: pointer;
}
</style>
