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

    <MobileMenu :class="$style.mobile_menu"/>
  </div>
</template>

<script lang="ts" setup>
import { MobileMenu } from '../MobileMenu'

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

.mobile_menu {
  display: none;
}

@media screen and (max-width: 425px) {

  .mobile_menu {
    display: block;
  }
}
</style>
