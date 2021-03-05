import React from 'react'
import { Container, Content } from './styles'
import Footer from '../../components/Footer'

import ScrollIndicator from '../ScrollIndicator'
import ItemProduct from '../ItemProduct'
import IProduct from '../../types/product'
import Header from '../Header'

interface IProductProps {
  products: IProduct[]
}

const Home: React.FC<IProductProps> = ({ products }) => {
  return (
    <Container>
      <ScrollIndicator />
      <Header />

      {products.map((product, index) => (
        <ItemProduct key={index} product={product} />
      ))}

      <Footer />
    </Container>
  )
}

export default Home
