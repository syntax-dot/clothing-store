export interface EmailInputProps {
  modelValue: string
}
export interface EmailInputEmits {
  (event: 'update:modelValue', value: string): void
}
