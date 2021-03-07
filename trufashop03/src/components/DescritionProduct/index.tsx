import React, { useCallback, useMemo } from 'react'
import { FaCartPlus } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'
import { MdAddShoppingCart } from 'react-icons/md'
import IProduct from '../../types/product'
import { ProductStock, useCartProduct } from '../../hooks/cartProduct'

import {
  Container,
  ItemSize,
  ButtonSize,
  ItemCor,
  ButtonCor,
  ComponentButton,
  Button
} from './styles'

interface IProps {
  product: IProduct
}

const DescritionProduct: React.FC<IProps> = ({ product }) => {
  const { addToCart, cart } = useCartProduct()

  const amount = useMemo(
    () =>
      cart.reduce((sumAmount: any, item: ProductStock) => {

        console.log('item:', item);
        
        //sumAmount[item.itemProduct.product.id] = item.itemProduct.stock

        return sumAmount
      }, {}),
    [cart]
  )

  const addItem = useCallback(
    async (idProduct: string) => {
      console.log('idProduct', idProduct)
      await addToCart(idProduct)
    },
    [addToCart]
  )

  return (
    <Container>
      <header>
        <article>
          <h1>{product.data.name}</h1>
          <strong>{product.data.name}</strong>
          <span>R$ {product.data.price}</span>
        </article>
      </header>
      <ItemSize>
        <strong>Selecione o tamanho</strong>
        <div>
          <ButtonSize type="button">
            <span>
              <FiCheck />
            </span>
            <strong>P</strong>
          </ButtonSize>
          <ButtonSize type="button">
            <span>
              <FiCheck />
            </span>
            <strong>M</strong>
          </ButtonSize>
          <ButtonSize type="button">
            <span>
              <FiCheck />
            </span>
            <strong>G</strong>
          </ButtonSize>
          <ButtonSize type="button">
            <span>
              <FiCheck />
            </span>
            <strong>GG</strong>
          </ButtonSize>
        </div>
      </ItemSize>

      <ItemCor>
        <strong>Selecione a cor</strong>
        <div>
          <ButtonCor type="button">
            <span>
              <FiCheck />
            </span>
          </ButtonCor>
          <ButtonCor type="button">
            <span>
              <FiCheck />
            </span>
          </ButtonCor>
          <ButtonCor type="button">
            <span>
              <FiCheck />
            </span>
          </ButtonCor>

          <ButtonCor type="button">
            <span>
              <FiCheck />
            </span>
          </ButtonCor>
        </div>
      </ItemCor>

      <ComponentButton>
        <button type="button" onClick={() => addItem(product.id)}>
          <div>
            <MdAddShoppingCart size={16} color="#fff" />

            {amount[product.id] || 0}
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </ComponentButton>
    </Container>
  )
}

export default DescritionProduct
