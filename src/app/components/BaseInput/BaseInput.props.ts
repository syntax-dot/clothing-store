export interface BaseInputProps {
  modelValue: string
}
export interface BaseInputEmits {
  (event: 'update:modelValue', value: string): void
}
