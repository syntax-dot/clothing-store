<template>
  <div :class="$style.root">
    <h2> {{ title }}</h2>
    <h2> {{ vendorСode }}</h2>
    <h2> {{ vendorСode }}</h2>
  </div>
</template>

<script lang="ts" setup>
import { NameAndRatingProps } from './NameAndRating.props'

defineProps<NameAndRatingProps>()
</script>

<style module lang="scss">
.root {
  width: 100%;
  height: 100%;
}
</style>
