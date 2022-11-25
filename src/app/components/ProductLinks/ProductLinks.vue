<template>
  <div :class="$style.root">
    <div>
      <img src="./icons/clothes.svg" alt="clothes">
      <a :class="$style.link" href="#">Описание товара</a>
    </div>

    <div>
      <img src="./icons/clock.svg" alt="clock">
      <a :class="$style.link" href="#">Доставка и возврат</a>
    </div>

    <div>
      <img src="./icons/pay.svg" alt="clock">
      <a :class="$style.link" href="#">Способы оплаты</a>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style module lang="scss">
@import "../../../css/variables.scss";
.root {
  border-top: 1px solid $line_color;
}

.root > div {
  display: flex;
}

.link {
  text-decoration: underline;
  margin-left: 4px;
}
</style>
