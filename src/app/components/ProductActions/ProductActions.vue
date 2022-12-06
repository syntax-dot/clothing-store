<template>
  <div :class="$style.root">
    <SizeSelection :availableSizes="availableSizes"/>

    <div :class="$style.actions">
      <QuantitySelection v-model.number="productQuantity"/>

      <div :class="$style.actions_btns">
        <AddToCart @added-to-cart="handleCart"/>

        <AddToFavorites @added-to-favorites="handleFavorite()"/>
      </div>
    </div>

    <a :class="$style.link"
       href="#"> Купить в 1 клик</a>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { AddToCart } from '../AddToCart'
import { AddToFavorites } from '../AddToFavorites'
import { SizeSelection } from '../SizeSelection'
import { QuantitySelection } from '../QuantitySelection'
import { ProductActionsProps } from './ProductActions.props'
import { notify } from '../../Notification/Notification'

const props = defineProps<ProductActionsProps>()

const productQuantity = ref(1)

function handleCart() {
  notify({
    message: `Товар '${props.title}' добавлен в корзину в кол-ве: ${productQuantity.value} ед.`,
    toCard: true,
  })
  productQuantity.value = 1
}

function handleFavorite() {
  notify({
    message: `Товар '${props.title}' добавлен в избранное`,
    toCard: false,
  })
}
</script>

<style module lang="scss">
.root {
  display: grid;
  grid-template-rows: 1fr 1fr max-content;
  user-select: none;
}

.actions {
  display: grid;
  grid-template-columns: max-content max-content;
  gap: 12px;
  margin-top: 40px;
}

.actions_btns {
  display: grid;
  grid-template-columns: max-content max-content;
  gap: 4px;
}

.link {
  text-decoration: underline;
  transition: .2s ease-in-out;
  width: fit-content;

  &:hover {
    color: #000;
  }
}

@media screen and (max-width: 1024px) {
  .actions {
    grid-template-columns: max-content;
    margin-top: 12px;
  }
}
</style>
