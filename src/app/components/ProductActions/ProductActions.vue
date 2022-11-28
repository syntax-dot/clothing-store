<template>
  <div :class="$style.root">
    <BaseSelect/>
    <div :class="$style.actions">
      <QuantitySelection v-model="productQuantity"/>

      <AddToCart @added-to-cart="handleCart"/>

      <AddToFavorites @added-to-favorites="handleFavorite()"/>
    </div>
    <a :class="$style.link"
       href="#"> Купить в 1 клик</a>

    <PopUp/>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { AddToCart } from '../AddToCart'
import { AddToFavorites } from '../AddToFavorites'
import { BaseSelect } from '../BaseSelect'
import { PopUp } from '../PopUp'
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
  user-select: none;
}

.actions {
  display: flex;
  margin-top: 40px;
}

.link {
  text-decoration: underline;
  transition: .2s ease-in-out;
  width: fit-content;

  &:hover {
    color: #000;
  }
}
</style>
