<template>
  <button :class="$style.root"
          @click="handleClick">
    Добавить в корзину
  </button>
</template>

<script lang="ts" setup>
import { AddToCartEmits } from './AddToCart.props'

const emit = defineEmits<AddToCartEmits>()

function handleClick() {
  emit('addedToCart')
  console.log('addedToCart')
}
</script>

<style module lang="scss">
@import "../../../css/variables.scss";
.root {
  width: 200px;
  height: 44px;
  border: 1px solid #333;
  color: #fff;
  background-color: $btn-bg-color;
  font-size: 1.4rem;
  text-align: center;
  border: none;
  // margin: 8px 28px 8px 28px;
  cursor: pointer;
  transition: .2s ease-in-out;

  &:hover {
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.2);
    scale: 1.02;
  }
}
</style>
