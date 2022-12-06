<template>
  <div :class="$style.root">
    <div :class="$style.input_form">
      <input :class="$style.input"
             type="email"
             placeholder="Адрес электронной почты"
             :value="modelValue"
             @input.stop="handleInput">

      <div :class="$style.clear"
           @click="$emit('clear')">
        <img src="../../../assets/icons/close.svg" alt="clear">
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { EmailInputProps, EmailInputEmits } from './EmailInput.props'

defineProps<EmailInputProps>()

const emit = defineEmits<EmailInputEmits>()

function handleInput(event: Event): void {
  if (!(event.target instanceof HTMLElement))
    return

  return emit('update:modelValue', (event.target as HTMLInputElement).value)
}
</script>

<style module lang="scss">
.root {
  box-sizing: border-box;
  padding-top: 16px;
  // padding-bottom: 24px;
}

.input_form {
  display: grid;
  grid-template-columns: max-content max-content;
  justify-content: space-between;
  border-bottom: 1px solid #c4c4c4;
  padding: 12px 16px 12px;
  transition: 0.3s ease-in-out;

  &:hover {
    border-bottom: 1px solid #000;
  }
}

.input {
  background: transparent;
  outline: none;
  border: none;

  &:focus + .input_form {
    border-bottom: 1px solid #000;
  }
}

.error {
  border-bottom: 1px solid rgb(255, 0, 0);
}

.clear {
  height: 16px;
  cursor: pointer;
  user-select: none;

  &:hover {
    scale: 1.2;
  }
}
</style>
