export interface ImageSelectProps {
  productUrl: string
}

export interface ImageSelectEmits {
  (emit: 'update', imageUrl: string): void
}
