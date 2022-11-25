<template>
  <div :class="$style.root">
    <div :class="$style.link_container">
      <img src="./icons/clothes.svg"
           alt="clothes">
      <a :class="$style.link" href="#">
        Описание товара
      </a>
    </div>

    <div :class="$style.link_container">
      <img src="./icons/clock.svg"
           alt="clock">
      <a :class="$style.link" href="#">
        Доставка и возврат
      </a>
    </div>

    <div :class="$style.link_container">
      <img src="./icons/pay.svg"
           alt="clock">
      <a :class="$style.link" href="#">
        Способы оплаты
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style module lang="scss">
@import "../../../css/variables.scss";
.root {
  padding-top: 24px;
  border-top: 1px solid $line_color;
}

.root > div {
  display: flex;
}

// Эксремальная запись
// .root > div:hover > img {
//   scale: 1.1;
// }

.link_container {
  transition: 0.2s ease-in-out;

  &:hover > img {
    scale: 1.1;
  }
}

.link {
  border-bottom: 1px solid $line_color;
  margin-left: 4px;
  transition: 0.2s ease-in-out;

  &:hover {
    border-bottom: 1px solid #000;
  }
}
</style>
