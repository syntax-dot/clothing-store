export enum Size {
  XXS = 34,
  XS = 36,
  S = 38,
  M = 40,
  L = 42,
  XL = 44,
  XXL = 46
}

export interface WithPrice {
  price: number
  oldPrice: number
  discountPercent: number
  stockPercent: number
}

export interface BaseInfo {
  title: string
  reviews: number
  rating: number
  vendorCode: string
}

export interface Product extends WithPrice, BaseInfo {
  id: number
  availableSizes: Size[]
  selectedSize?: Size
  images: string[]
  inTheCart: boolean
  inTheFavorite: boolean
}
