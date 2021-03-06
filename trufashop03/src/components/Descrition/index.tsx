import React from 'react'
import IProduct from '../../types/product'
import { Container } from './styles'

interface IProps {
  product: IProduct
}

const Descrition: React.FC<IProps> = ({ product }) => {
  return (
    <Container>
      <article>
        <strong>{product.data.name} </strong>
        <p>{product.data.description}</p>
      </article>

      <main>
        <strong>Informações Adicional</strong>
        <p>
          Peso N/A Dimensões 20 x 17 x 3 cm Cores Branco, Preto, Rubi, Vermelho
          Tamanho P, M, G, GG
        </p>
      </main>

      <div>
        <strong>Camisola sensual com calcinha</strong>

        <h1>
          De R$126,99 por <strong>R$ 49,40</strong>
        </h1>

        <p>Em até 6x no cartão</p>
        <strong>no boleto 10% off</strong>
      </div>
    </Container>
  )
}

export default Descrition
