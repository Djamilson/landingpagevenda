import React from 'react'
import { FaCartPlus } from 'react-icons/fa'

import {
  Container,
  ItemSize,
  OrderLI,
  ItemCor,
  ButtonCor,
  Button
} from './styles'

const DescritionPromotion: React.FC = () => {
  return (
    <Container>
      <ItemSize>
        <OrderLI>
          <button type="button">P</button>
        </OrderLI>
        <OrderLI>
          <button type="button">M</button>
        </OrderLI>
        <OrderLI>
          <button type="button">G</button>
        </OrderLI>
        <OrderLI>
          <button type="button">GG</button>
        </OrderLI>
      </ItemSize>

      <ItemCor>
        <ButtonCor type="button">

        </ButtonCor>
        <ButtonCor type="button">

        </ButtonCor>
        <ButtonCor type="button">

        </ButtonCor>

        <ButtonCor type="button"></ButtonCor>
      </ItemCor>
      
      <Button type="button">
        <span>
          <FaCartPlus />
        </span>
        <strong>Adicionar ao carrinho</strong>
      </Button>
      <article>
        <strong>Camisola sensual com calcinha </strong>
        <p>
          A Camisola sensual com calcinha – Cecile é definitivamente perfeita
          para você arrasar naqueles momentos mais especiais, com ainda mais
          charme e muita sensualidade. E como nós sempre pensamos em tudo para
          você, confeccionamos esta peça com uma composição definitivamente
          maravilhosa. Ela é composta por 90% poliamida e 10% elastano. O forro
          da calcinha está em 100% algodão. As alças possuem regulagem em
          plástico. Este modelo não possui bojo. O desenho da renda pode variar.
          Possui forro no busto em tule. E se você quer aquela super dica para
          aqueles momentos que você quer arrasar na sensualidade, não deixe de
          dar uma olhadinha em nossas Lingeries Sensuais. Principalmente no
          Conjunto sexy em renda – Geovanna. Compre também a Calcinha de
          microfibra básica – Penelope.
        </p>
      </article>

      <section>
        <strong>Informações Adicional</strong>
        <p>
          Peso N/A Dimensões 20 x 17 x 3 cm Cores Branco, Preto, Rubi, Vermelho
          Tamanho P, M, G, GG
        </p>
      </section>
    </Container>
  )
}

export default DescritionPromotion
