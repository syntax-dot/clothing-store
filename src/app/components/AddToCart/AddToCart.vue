<template>
  <div :class="$style.root"/>
</template>

<script lang="ts" setup>
import { AddToCartEmits } from './AddToCart.props'

defineEmits<AddToCartEmits>()
</script>

<style module lang="scss">
.root {
  width: 100%;
  height: 100%;
}
</style>
