<template>
  <div :class="$style.root">
    <h2 :class="$style.title"> {{ title }}</h2>
    <h2 :class="$style.vendor_code"> {{ 'Арт. ' + vendorCode }}</h2>
    <h2>
      Отзывы
      <RatingStars :rating="stars"/>
      {{ reviews }}
    </h2>
  </div>
</template>

<script lang="ts" setup>
import { RatingStars } from '../RatingStars'
import { NameAndRatingProps } from './NameAndRating.props'

defineProps<NameAndRatingProps>()

const stars = 4
</script>

<style module lang="scss">
@import "../../../css/variables.scss";
.root {
  width: 100%;
  height: 100%;
}

.title {
  font-size: 1.8rem;
  font-weight: 600;
}

.vendor_code {
  font-size: 1.2rem;
  font-weight: 400;
  color: $vendor-code-color;
}
</style>
