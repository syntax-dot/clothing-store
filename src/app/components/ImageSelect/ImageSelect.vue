<template>
  <div :class="$style.root">
    <div v-for="image in imagesPaths"
         :key="image"
         :class="$style.image"
         :style="{ backgroundImage: `url(${image})` }"
         @click="handleClick"/>
  </div>
</template>

<script lang="ts" setup>
import { ImageSelectProps, ImageSelectEmits } from './ImageSelect.props'
import { ref, watch } from 'vue'

const selectedImage = ref('')

const props = defineProps<ImageSelectProps>()

watch(selectedImage, () => {
  console.log(selectedImage.value)
})

const emit = defineEmits<ImageSelectEmits>()

function handleClick(event: Event): void {
  if (!(event.target instanceof HTMLElement))
    return

  console.log((event.target as HTMLInputElement).value)

  return emit('select', (event.target as HTMLInputElement).value)
}
</script>

<style module lang="scss">
.root {
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

.image {
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
</style>
