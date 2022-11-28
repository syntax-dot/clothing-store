import { Size } from './../../types/product'

export interface SizeSelectionProps {
  availableSizes: Size[]
}

export interface SizeSelectionEmits {
  (event: 'select', selectSize: Size): void
}
