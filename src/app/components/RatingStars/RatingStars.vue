<template>
  <div :class="$style.root">
    <div v-for="index in 5"
         :key="index">
      <img v-if="index <= rating"
           :class="$style.star"
           src="./icons/activeStar.svg">
      <img v-else
           :class="$style.star"
           src="./icons/inactiveStar.svg">
    </div>
  </div>
</template>

<script lang="ts" setup>
import { RatingStarsProps } from './RatingStars.props'

defineProps<RatingStarsProps>()
</script>

<style module lang="scss">
.root {
  display: grid;
  grid-template-columns: repeat(5, max-content);
}

.star {
  transition: 0.1s ease-in-out;

  &:hover {
    scale: 1.2;
  }
}
</style>
