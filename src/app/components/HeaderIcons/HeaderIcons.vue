<template>
  <div :class="$style.root">
    <img :class="$style.icon"
         src="./icons/person.svg"
         alt="person">

    <img :class="$style.icon"
         src="./icons/favorite.svg"
         alt="favorite">

    <img :class="$style.icon"
         src="./icons/bag.svg"
         alt="bag">
  </div>
</template>

<script lang="ts" setup>

</script>

<style module lang="scss">
.root {
  display: grid;
  grid-auto-flow: column;
  gap: 24px;
  align-content: center;
}

.icon {
  border-bottom: 1px solid #00000000;
  transition: 0.2s ease-in-out;

  &:hover {
    border-bottom: 1px solid #000;
    scale: 1.1;
  }
}
</style>
