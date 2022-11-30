<template>
  <div :class="$style.info">
    <div :class="$style.fullscreen">
      <img src="../../../assets/icons/fullScreen.svg"
           :class="$style.cursor"
           alt="fullScreen">
    </div>

    <div :class="$style.bag">
      <img :class="$style.cursor"
           src="../../../assets/icons/bag.svg"
           alt="bag">
      <div>Узнай что на мне</div>
    </div>

    <div :class="$style.likes">
      <div>
        <img :class="$style.cursor"
             src="../../../assets/icons/favoriteFull.svg"
             alt="likes">
        <div>{{ randomLikes }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { StyleInfoProps } from './StyleInfo.props'

defineProps<StyleInfoProps>()
defineEmits<StyleInfoProps>()

const randomLikes = ref(getRandomLikes(200))

function getRandomLikes(max: number): number {
  return Math.floor(Math.random() * max)
}
</script>

<style module lang="scss">
.info {
  user-select: none;
  position: relative;
  display: grid;
  box-sizing: border-box;
  font-size: 1.4rem;
  color: #fff;
  opacity: 0;
  transition: opacity 0.3s;
  padding: 12px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);

  &:hover {
    opacity: 1;
  }
}

.cursor {
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    scale: 1.1;
  }
}

.fullscreen {
  text-align: end;
}

.bag {
  align-self: center;
}

.likes {
  align-self: end;
}
</style>
