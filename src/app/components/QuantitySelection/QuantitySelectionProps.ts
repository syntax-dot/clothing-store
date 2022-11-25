export interface QuantitySelectionProps {
  modelValue: number
}

export interface QuantitySelectionEmits {
  (event: 'update:modelValue', value: number): void
}
