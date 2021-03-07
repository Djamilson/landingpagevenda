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

  header {
    line-height: 1.5rem;
    margin-bottom: 0rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 50vh;
    border: 0;
    width: 100%;

    article {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      width: 30vw;
      max-width: 30vw;
      height: 5rem;
      border: 0;
      top: 0;

      h1 {
        margin-top: 0rem;
        font-size: 1rem;
        font-weight: 500;
        color: ${theme.colors.blue};
      }
      strong {
        font-size: 1.5rem;
        font-weight: 500;
        color: ${props => props.theme.colors.text_title};
      }
      span {
        margin-top: 1rem;
        margin-bottom: 1.5rem;
        font-size: 1.8rem;
        font-weight: 500;
        color: ${theme.colors.blue};
      }
    }
  }

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

export const ItemSize = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;

  strong {
    font-size: 1rem;
    font-weight: 500;
    color: ${props => props.theme.colors.text_title};
  }

  div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 0px;
    margin-top: 10px;

    margin-bottom: 20px;
    border: 0;
    button + button {
      margin-right: 1em;
    }
  }
`

export const ComponentButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 2rem;

  button {
    width: 15rem;
    background: ${theme.colors.blue};
    color: #fff;
    border: 0;
    border-radius: 4px;
    overflow: hidden;
    margin-top: auto;

    display: flex;
    align-items: center;
    transition: background 0.02s;

    &:hover {
      background: ${shade(0.2, '#7159c1')};
    }

    div {
      display: flex;
      align-items: center;
      padding: 12px;
      background: rgba(0, 0, 0, 0.1);

      svg {
        margin-right: 5px;
      }
    }

    span {
      font-size: 11px;
      flex: 1;
      text-align: center;
      font-weight: bold;
    }
  }
`
export const Button = styled(MyButton)`
  background: ${theme.colors.blue};
  width: 250px;
  min-width: 250px;
  margin-bottom: 2rem;

  span {
    border-radius: 6px 0 0 6px;
  }

  &:hover {
    background: ${shade(0.2, `${theme.colors.colorSecundary}`)};
  }
`

export const ItemCor = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;

  margin-top: 1rem;

  strong {
    font-size: 1rem;
    font-weight: 500;
    color: ${props => props.theme.colors.text_title};
  }
  div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 0px;
    margin-top: 10px;

    justify-content: center;
    align-items: center;

    margin-bottom: 20px;
    border: 0;
    button + button {
      margin-right: 1em;
    }
  }
`

export const ButtonSize = styled(MyButton)`
  background: ${theme.colors.blue};
  border-radius: 6px;
  width: 60px;
  height: 30px;

  span {
    border-radius: 6px 0 0 6px;
    width: 20px;
    height: 30px;
    svg {
      width: 15px;
      height: 15px;
    }
  }

  strong {
    color: ${theme.colors.colorTitleInPrimary};
  }

  &:hover {
    background: ${shade(0.2, `${theme.colors.blue}`)};
  }
`

export const ButtonCor = styled(MyButton)`
  background: ${theme.colors.primary};
  border-radius: 50%;
  width: 30px;
  height: 30px;

  span {
    background: none;
    border-radius: 50%;

    width: 30px;
    height: 30px;
  }

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
