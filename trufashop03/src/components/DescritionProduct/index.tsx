import React from 'react'
import { FaCartPlus } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'

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
        <Button type="button">
          <span>
            <FaCartPlus />
          </span>
          <strong>Adicionar ao carrinho</strong>
        </Button>
      </ComponentButton>
    </Container>
  )
}

export default DescritionProduct
