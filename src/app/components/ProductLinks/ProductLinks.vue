<template>
  <div :class="$style.root">
    <div>
      <img src="./icons/clothes.svg" alt="clothes">
      <a href="#">Описание товара</a>
    </div>

    <div>
      <img src="./icons/clock.svg" alt="clock">
      <a href="#">Доставка и возврат</a>
    </div>

    <div>
      <img src="./icons/pay.svg" alt="clock">
      <a href="#">Способы оплаты</a>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style module lang="scss">
.root {
  width: 100%;
  height: 100%;
}

.root > div {
  display: flex;
}
</style>
