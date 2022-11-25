<template>
  <div :class="$style.root">
    <div v-for="star in rating">
      <img src="./icons/activeStar.svg">
      <img src="./icons/inactiveStar.svg">
    </div>
  </div>
</template>

<script lang="ts" setup>
import { RatingStarsProps } from './RatingStars.props'

defineProps<RatingStarsProps>()
</script>

<style module lang="scss">
.root {
  width: 100%;
  height: 100%;
}
</style>
