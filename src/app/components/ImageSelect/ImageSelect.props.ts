export interface ImageSelectProps {
  imagesPaths: string[]
}

export interface ImageSelectEmits {
  (emit: 'select', imageUrl: string): void
}
