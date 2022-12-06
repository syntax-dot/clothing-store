<template>
  <div :class="$style.root">
    <button :class="$style.increase"
            @click="increase">
      +
    </button>

    <input :class="$style.amount_input"
           :value="modelValue">

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
  font-size: 1.4rem;
  text-align: center;
  background: transparent;
  width: 100%;
  height: 100%;
  border: none;
}

.amount_input {

}

.not_active {
  color: transparent;
}

.increase,
.decrease {
  cursor: pointer;
  transition: 0.1s ease-in-out;

  &:hover {
  }
}
</style>
