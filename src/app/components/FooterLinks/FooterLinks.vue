<template>
  <div :class="$style.root">
    <div :class="$style.buyers">
      <h1 :class="$style.title">Покупателям</h1>
      <a v-for="(buyersLink, index) in buyersLinks"
         :key="index"
         :class="$style.links">
        {{ buyersLink }}</a>
    </div>

    <div :class="$style.about_us">
      <h1 :class="$style.title">О нас</h1>
      <a v-for="(aboutLink, index) in aboutLinks"
         :key="index"
         :class="$style.links">
        {{ aboutLink }}</a>
    </div>
  </div>
</template>

<script lang="ts" setup>
const buyersLinks = [
  'Каталог',
  'Акции',
  'Бренды',
]

const aboutLinks = [
  'О компании',
  'Новости',
  'Команда',
]
</script>

<style module lang="scss">
@import "../../../css/variables.scss";

.root {
  display: grid;
  grid-template-columns: 50% 50%;
  width: 100%;
  height: 100%;
  user-select: none;
}

.buyers,
.about_us {
  // display: grid;
  // grid-auto-flow: row;
  // gap: 8px;
}

.title {
  font-size: 1.6rem;
  font-weight: 400;
  padding: 12px 0;
}

.links {
  display: block;
  // margin: 8px 0;
  font-size: 1.4rem;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    color: #000;
    font-weight: 500;
  }
}

a:hover {

}
</style>
