import { shade } from 'polished'
import styled from 'styled-components'
import theme from '../../styles/theme'
import MyButton from '../Button'

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 50vh;
  margin-bottom: 2rem;

  article {
    margin-left: 0rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-bottom: 1rem;

    strong {
      font-size: 1.5rem;
      font-weight: 500;
      color: ${props => props.theme.colors.text_title};
    }

    h1 {
      font-size: 1rem;
      font-weight: 500;
      color: ${props => props.theme.colors.text_title};
      margin-top: 2rem;
      strong {
        margin-right: 1rem;
        font-size: 1.8rem;
        font-weight: 700;
        color: ${props => props.theme.colors.green_};
      }
    }

    p {
      font-size: 1rem;
      margin-top: 0.5rem;
      text-align: justify;
      line-height: 1.5rem;
    }
  }

  section {
    top: 0;
    margin-top: 0;
    margin-left: 0rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    strong {
      font-size: 1.5rem;
      font-weight: 500;
      color: ${props => props.theme.colors.text_title};
    }

    h1 {
      font-size: 1rem;
      font-weight: 500;
      color: ${props => props.theme.colors.text_title};
      margin-top: 2rem;
      strong {
        margin-right: 1rem;
        font-size: 1.8rem;
        font-weight: 700;
        color: ${props => props.theme.colors.green_};
      }
    }

    p {
      font-size: 1rem;
      margin-top: 0.5rem;
      text-align: justify;
      line-height: 1.5rem;
    }
  }
`

export const ItemSize = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 0px;
  margin-top: 20px;
  padding: 10px 40px;
`
export const Button = styled(MyButton)`
  background: ${theme.colors.primary};

  &:hover {
    background: ${shade(0.2, `${theme.colors.colorSecundary}`)};
  }
`

export const ItemCor = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 0px;
  margin-top: 20px;
  padding: 10px 40px;
  button + button {
    margin-left: 1rem;
  }
`

export const ButtonCor = styled(MyButton)`
  background: ${theme.colors.primary};
  border-radius: 50%;
  width: 30px;
  height: 30px;


  &:hover {
    background: ${shade(0.2, `${theme.colors.primary}`)};
  }
`

export const OrderLI = styled.li`
  border: 0;
  border-radius: 0px;
  height: 40px;
  background: none;
  width: 20px;
  list-style-type: none;
  transition: transform 0.3s ease-in-out;
  border-bottom: 1px solid ${props => props.theme.colors.colorLineInWhite};
  margin-bottom: 10px;

  span {
    border: none;
    display: block;
    color: #7159c1;
    font-size: 16px;
    font-weight: normal;
    text-align: left;
    margin-left: 20px;
  }
  &:hover,
  &.active {
    font-weight: bold;
    opacity: 0.6;
    transform: translateY(-5px);
    transition: all 0.2s;

    &:after {
      opacity: 1;
      bottom: -10px;
      width: 100%;
    }
  }
`
