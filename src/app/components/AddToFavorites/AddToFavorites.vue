<template>
  <button :class="$style.root"
          @click="handleClick">
    <img :class="$style.image"
         src="./favorite.svg"
         alt="favorite">
  </button>
</template>

<script lang="ts" setup>
import { AddToFavoritesEmits } from './AddToFavorites.props'

const emit = defineEmits<AddToFavoritesEmits>()

function handleClick() {
  emit('addedToFavorites')
  console.log('addedToFavorites')
}
</script>

<style module lang="scss">
@import "../../../css/variables.scss";

.root {
  width: 44px;
  height: 44px;
  background-color: $btn-bg-color;
  border: none;
  cursor: pointer;
  transition: .2s ease-in-out;

  &:hover {
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.2);
    background-color: rgb(194, 0, 0);
    // border: 1px solid rgb(255, 0, 0);
    scale: 1.05;
  }

  &:hover > img {
    content: url('../../../assets/icons/favoriteFull.svg');

  }
}
</style>
