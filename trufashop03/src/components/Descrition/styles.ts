import styled from 'styled-components'
import theme from '../../styles/theme'

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 50vh;
  margin-bottom: 2rem;
  width: 100%;
  border: 0;

  article {
    width: 100%;
    margin-left: 0rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-bottom: 0rem;
    padding: 2rem 1.5rem;

    strong {
      margin-bottom: 1rem;
      font-size: 1.5rem;
      font-weight: 500;
      color: ${props => props.theme.colors.blue};
    }


    p {
      font-size: 1rem;
      margin-top: 0.5rem;
      text-align: justify;
      line-height: 1.5rem;
      color: ${props => props.theme.colors.colorTextBase};
    }
  }


  main {
    width: 100%;
    border: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-bottom: 1rem;
    padding: 2rem 1.5rem;

    strong {
      margin-bottom: 1rem;
      font-size: 1.5rem;
      font-weight: 500;
      color: ${props => props.theme.colors.colorTextBase};
    }
    span {
      margin-top: 1rem;
      margin-bottom: 1.5rem;
      font-size: 1.8rem;
      font-weight: 500;
      color: ${theme.colors.blue};
    }

    h1 {
      margin-top: 1px;
      font-size: 1rem;
      font-weight: 500;
      color: ${theme.colors.text_title};
      margin-top: 2rem;
      strong {
        margin-right: 1rem;
        font-size: 1.8rem;
        font-weight: 700;
        color: ${theme.colors.green_};
      }
    }

    p {
      font-size: 1rem;
      margin-top: 0.5rem;
      text-align: justify;
      line-height: 1.5rem;
      color: ${props => props.theme.colors.colorTextBase};
    }
  }
`
