<template>
  <div :class="$style.root">
    <BaseSelect/>
    <QuantitySelection v-model="productQuantity"/>
    <AddToCart/>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { AddToCart } from '../AddToCart'
import { BaseSelect } from '../BaseSelect'
import { QuantitySelection } from '../QuantitySelection'

const productQuantity = ref(1)
</script>

<style module lang="scss">
.root {
  width: 100%;
  height: 100%;
}
</style>
