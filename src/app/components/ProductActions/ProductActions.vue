<template>
  <div :class="$style.root">
    <BaseSelect/>
    <div :class="$style.actions">
      <QuantitySelection v-model="productQuantity"/>
      <AddToCart/>
      <AddToFavorites/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { AddToCart } from '../AddToCart'
import { AddToFavorites } from '../AddToFavorites'
import { BaseSelect } from '../BaseSelect'
import { QuantitySelection } from '../QuantitySelection'

const productQuantity = ref(1)
</script>

<style module lang="scss">
.root {
  width: 100%;
  height: 100%;
}

.actions {
  display: flex;
}
</style>
