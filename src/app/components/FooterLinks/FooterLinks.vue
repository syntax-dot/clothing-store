<template>
  <div :class="$style.root">
    <div :class="$style.buyers">
      <h1 :class="$style.title">Покупателям</h1>
      <a v-for="buyersLink in buyersLinks">
        {{ buyersLink }}</a>
    </div>

    <div :class="$style.about_us">
      <h1 :class="$style.title">О нас</h1>
      <a v-for="aboutLink in aboutLinks">
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

a {
  display: block;
  margin: 8px 0;
  font-size: 1.4rem;
}

a:hover {

}
</style>
