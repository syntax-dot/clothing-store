export enum Size {
  XXS = 34,
  XS = 36,
  S = 38,
  M = 40,
  L = 42,
  XL = 44,
  XXL = 46
}

export interface Product {
  id: number
  title: string
  vendorCode: string
  reviews: number
  rating: number
  price: number
  availableSizes: Size[]
  oldPrice: number
  discountPercent: number
  stockPercent: number
  images: string[] | string
  inTheCart: boolean
  inTheFavorite: boolean
}
