<template>
  <div :class="$style.root">
    <div :class="$style.input_form">
      <input :class="$style.input"
             type="email"
             placeholder="Адрес электронной почты"
             :value="modelValue">
      <div :class="$style.clear">
        <svg width="16"
             height="16"
             viewBox="0 0 16 16"
             fill="none"
             xmlns="http://www.w3.org/2000/svg">
          <path d="M3.70001 12.0664L12.0501 3.88337" stroke="#C4C4C4"/>
          <path d="M12.2516 12.0664L3.90161 3.88335" stroke="#C4C4C4"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { EmailInputProps, EmailInputEmits } from './EmailInput.props'

defineProps<EmailInputProps>()
defineEmits<EmailInputEmits>()
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

.clear {
  height: 16px;
  cursor: pointer;

  &:hover > svg {
    stroke: #000;
  }
}
</style>
