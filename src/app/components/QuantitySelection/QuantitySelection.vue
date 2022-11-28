<template>
  <div :class="$style.root">
    <div :class="$style.increase"
         @click="increase">
      +
    </div>
    <div :class="$style.amount">
      {{ modelValue }}
    </div>
    <div :class="[$style.decrease, {
           [$style.not_active]: modelValue <= 1,
         }]"
         @click="decrease">
      –
    </div>
  </div>
</template>

<script lang="ts" setup>
import { QuantitySelectionProps, QuantitySelectionEmits } from './QuantitySelectionProps'

const props = defineProps<QuantitySelectionProps>()
const emit = defineEmits<QuantitySelectionEmits>()

function increase() {
  emit('update:modelValue', props.modelValue + 1)
  console.log('increase')
}

function decrease() {
  if (props.modelValue <= 1)
    return

  emit('update:modelValue', props.modelValue - 1)
  console.log('decrease')
}
</script>

<style module lang="scss">
@import "../../../css/variables.scss";
.root {
  display: grid;
  grid-auto-flow: column;
  width: 145px;
  height: 44px;
  background-color: $quantity-selection;
  text-align: center;
  align-items: center;
  user-select: none;
}

.amount {
  font-size: 1.4rem;
}

.not_active {
  color: transparent;
}

.increase,
.decrease {
  font-size: 1.4rem;
  cursor: pointer;
  transition: 0.1s ease-in-out;

  &:hover {
    scale: 1.2;
  }
}
</style>
