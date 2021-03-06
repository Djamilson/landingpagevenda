import { shade } from 'polished'
import styled from 'styled-components'
import theme from '../../styles/theme';
export const Container = styled.button`
  border: 0;
  line-height: 2.5;
  font-size: 1rem;
  text-align: center;

  border: 0;
  border-radius: 0.4rem;
  width: 100%;
  min-width: 25%;
  height: 3rem;

  background-color: ${theme.colors.colorSecundary};

  font: 700 1rem Poppins;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: background-color 0.2s;

  span {
    display: block;
    background: rgba(0, 0, 0, 0.08);
    width: 52px;
    height: 3rem;
    border-radius: 0rem 0 0 0rem;

    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s;
    svg {
      color: #fff;
      width: 20px;
      height: 20px;
    }
  }

  strong {
    flex: 1;
    text-align: center;
    color: #fff;
  }

  &:hover {
    background: ${shade(0.2, `${theme.colors.colorSecundary}`)};
  }
`
