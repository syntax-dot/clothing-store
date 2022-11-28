<template>
  <div :class="$style.root">
    <BaseSelect/>
    <div :class="$style.actions">
      <QuantitySelection v-model="productQuantity"/>
      <AddToCart @added-to-cart="handleCart"/>
      <AddToFavorites @added-to-favorites="handleFavorite()"/>
    </div>
    <a href="#"> Купить в 1 клик</a>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { AddToCart } from '../AddToCart'
import { AddToFavorites } from '../AddToFavorites'
import { BaseSelect } from '../BaseSelect'
import { QuantitySelection } from '../QuantitySelection'
import { ProductActionsProps } from './ProductActions.props'

const props = defineProps<ProductActionsProps>()

const productQuantity = ref(1)

function handleCart() {
  console.log(`Товар '${props.title}' добавлен в корзину в кол-ве: ${productQuantity.value} ед.`)
}

function handleFavorite() {
  console.log(`Товар '${props.title}' добавлен в избранное`)
}
</script>

<style module lang="scss">
.root {
  display: grid;
  grid-template-rows: max-content max-content;
  gap: 40px;
  width: 100%;
  height: 100%;
  user-select: none;
}

.actions {
  display: flex;
}
</style>
