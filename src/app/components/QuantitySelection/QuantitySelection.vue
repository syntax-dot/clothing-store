<template>
  <div :class="$style.root">
    <div>+</div>
    <div>{{ modelValue }}</div>
    <div>-</div>
  </div>
</template>

<script lang="ts" setup>
import { QuantitySelectionProps, QuantitySelectionEmits } from './QuantitySelectionProps'

defineProps<QuantitySelectionProps>()
defineEmits<QuantitySelectionEmits>()
</script>

<style module lang="scss">
@import "../../../css/variables.scss";
.root {
  width: 145px;
  height: 44px;
  background-color: $quantity-selection;
}
</style>
