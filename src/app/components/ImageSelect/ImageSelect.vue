<template>
  <div :class="$style.root">
    <!-- <div v-for="image in productImages"/> -->
    <div :class="$style.image"/>
    <div :class="$style.image"/>
    <div :class="$style.image"/>
    <div :class="$style.image"/>
    <div :class="$style.image"/>
  </div>
</template>

<script lang="ts" setup>
import { ImageSelectProps, ImageSelectEmits } from './ImageSelect.props'

const props = defineProps<ImageSelectProps>()
// const emit = defineEmits<ImageSelectEmits>()

// const productImages = `../../../assets/products/${props.productUrl}/`

// const productImages = `../../../assets/products/${props.productUrl}/`
</script>

<style module lang="scss">
.root {
  position: absolute;
  display: grid;
  grid-auto-flow: row;
  gap: 7px;
  margin-left: 24px;
  margin-top: 26px;
}

.image {
  height: 90px;
  width: 70px;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgba(0, 17, 255, 0);
  transition: 0.3s ease-in-out;

  &:hover {
    border: 1px solid rgb(0, 0, 0);
  }
}
</style>
