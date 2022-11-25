<template>
  <div :class="$style.root">
    <img src="./icons/person.svg" alt="person">

    <img src="./icons/favorite.svg" alt="favorite">

    <img src="./icons/bag.svg" alt="bag">
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
</style>
