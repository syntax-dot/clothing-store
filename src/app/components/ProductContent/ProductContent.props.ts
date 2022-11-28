import { NameAndRatingProps } from '../NameAndRating/NameAndRating.props'
import { ProductPriceProps } from '../ProductPrice/ProductPrice.props'

export interface ProductContentProps {
  nameAndRating: NameAndRatingProps
  price: ProductPriceProps
}
