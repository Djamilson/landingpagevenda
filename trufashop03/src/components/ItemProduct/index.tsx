import React, { useMemo } from 'react'
import IProduct from '../../types/product'

import DescritionPromotion from '../DescritionProduct'
import ImageTop from '../ImageTop'
import Descrition from '../Descrition'
interface IProps {
  product: IProduct
}

import { Container, Content } from './styles'

const ItemProduct: React.FC<IProps> = ({ product }) => {
  return (
    <Container key={product.id}>
      <Content>
        <ImageTop product={product} />
        <DescritionPromotion product={product} />
      </Content>
      <Descrition product={product} />
    </Container>
  )
}

export default ItemProduct
