import React, { useCallback, useEffect, useState } from 'react';

import IMenu from '../../../types/menu';
import { Navigation, MenuLI, ButtonLI } from './styles'

interface IProps {
  menus: IMenu[];
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
          Meu Carrinho
        </a>
      </ButtonLI>
    </Navigation>
  )
};

export default MeNavigation;
