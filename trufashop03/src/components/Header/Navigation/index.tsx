import React, { useCallback, useEffect, useState } from 'react'
import { MdAddShoppingCart } from 'react-icons/md'

import IMenu from '../../../types/menu'
import { Navigation, MenuLI, ButtonLI } from './styles'

interface IProps {
  menus: IMenu[]
}

const MeNavigation: React.FC<IProps> = ({ menus }) => {
  return (
    <Navigation>
      <MenuLI>
        <a href="#" aria-label="Home">
          Home
        </a>
      </MenuLI>
      <MenuLI>
        <a href="#" aria-label="Contatos">
          Contatos
        </a>
      </MenuLI>
      <ButtonLI>
        <a href="#" aria-label="Contatos">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
            10
          </div>
          <span>Meu carrinho</span>
        </a>
      </ButtonLI>
    </Navigation>
  )
}

export default MeNavigation
