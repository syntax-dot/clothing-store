<template>
  <div :class="$style.root">
    <button :class="$style.increase"
            @click="increase">
      +
    </button>

    <input :class="$style.amount_input"
           type="number"
           :value="modelValue"
           @input="handleInput">

    <button :class="[$style.decrease, {
              [$style.not_active]: modelValue <= 1,
            }]"
            @click="decrease">
      –
    </button>
  </div>
</template>

<script lang="ts" setup>
import { QuantitySelectionProps, QuantitySelectionEmits } from './QuantitySelectionProps'

const props = defineProps<QuantitySelectionProps>()
const emit = defineEmits<QuantitySelectionEmits>()

function handleInput(event: Event): void {
  if (!(event.target instanceof HTMLElement))
    return

  return emit('update:modelValue', ((event.target as HTMLInputElement).value) as number)
}

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
  grid-template-columns: 1fr 1fr 1fr;
  width: 145px;
  height: 44px;
  background-color: $quantity-selection;
  text-align: center;
  align-items: center;
  user-select: none;
}

.amount_input,
.increase,
.decrease {
  cursor: pointer;
  font-size: 1.4rem;
  text-align: center;
  background: transparent;
  width: 100%;
  height: 100%;
  border: none;
}

// Убрать стрелки на инпут
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.not_active {
  color: transparent;
}
</style>
