import styled from 'styled-components'

export const Container = styled.div`
  flex:1;
  display: flex;
  align-items: center;
  width: 100px;

  div {
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

      img {
        margin-right: 0.5rem;
        width: 1rem;
        height: 1rem;
      }
    }
  }
`
