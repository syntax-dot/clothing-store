import { Sizes } from '../../types/product'

export interface ProductContentProps {
  title: string
  vendorCode: string
  reviews: number
  rating: number
  price: number
  oldPrice: number
  discountPercent: number
  stockPercent: number
  availableSizes: Sizes[]
}
