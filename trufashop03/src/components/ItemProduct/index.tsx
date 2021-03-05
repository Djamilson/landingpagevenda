import React from 'react'
import IProduct from '../../types/product'
import ChallengeBox from '../ChallengeBox'
import CompletedChallenges from '../CompletedChallenges'
import CountDown from '../CountDown'
import DescritionPromotion from '../DescritionProduct'
import ImageTop from '../ImageTop'

interface IProps {
  product: IProduct
}

import { Container } from './styles'

const ItemProduct: React.FC<IProps> = ({ product }) => {
  return (
    <Container key={product.id}>
      <ImageTop images={product.data.images} />
      <DescritionPromotion />
    </Container>
  )
}

export default ItemProduct
