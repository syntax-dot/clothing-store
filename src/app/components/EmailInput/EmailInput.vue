<template>
  <div :class="$style.root">
    <div :class="[$style.input_form, {
      [$style.error]: isEmailError
    }]">
      <input :class="$style.input"
             type="email"
             placeholder="Адрес электронной почты"
             :value="modelValue"
             @input="handleInput">

      <div :class="$style.clear"
           @click="handleClear">
        <img src="../../../assets/icons/close.svg" alt="clear">
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { EmailInputProps, EmailInputEmits } from './EmailInput.props'

const props = defineProps<EmailInputProps>()
const emit = defineEmits<EmailInputEmits>()

const isEmailError = ref(true)

function handleInput(event: Event): void {
  if (!(event.target instanceof HTMLElement))
    return

  return emit('update:modelValue', (event.target as HTMLInputElement).value)
}

function handleClear() {
  emit('clear')
  console.log('clear')
}
</script>

<style module lang="scss">
.root {

  box-sizing: border-box;
  // width: 100%;
  // height: 100%;

  padding-top: 16px;
  padding-bottom: 24px;
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
}

.error {
  border-bottom: 1px solid rgb(255, 0, 0);
}

.clear {
  height: 16px;
  cursor: pointer;

  &:hover > svg {
    stroke: #000;
  }
}
</style>
