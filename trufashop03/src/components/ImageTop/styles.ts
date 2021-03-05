import styled from 'styled-components'

export const Container = styled.header`
  top: 0;

  width: 100%;
  height: 94vh;
  padding: 0rem;

  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  border: 0;
  margin-top: 0rem;

  header {
    line-height: 1.5rem;
    margin-bottom: 4rem;
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
        color: #586fe5;
      }
      strong {
        font-size: 1.5rem;
        font-weight: 500;
        color: ${props => props.theme.colors.text_title};
      }
      span {
        font-size: 1rem;
        font-weight: 500;
        color: #586fe5;
      }
    }
  }

  div {
    border: 1px solid #f00;
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    align-items: center;
    width: 90%;
    margin-top: -4rem;
    section {
      width: 12rem;
      margin-left: 1rem;

      border: 0;
      top: 0;
      margin-top: -1rem;
    }
  }
`

interface IPropsImage {
  url: string
}

export const ContainerImage = styled.article<IPropsImage>`
  width: 40vw;

  background: url(${props => props.url}) no-repeat center;
  background-size: contain;
  margin-bottom: 1rem;
  max-height: 71vh;

  box-shadow: rgba(0, 0, 0, 0.05) 0px 0.1rem 0.3rem,
    rgba(0, 0, 0, 0.05) 0px 0.1rem 0.2rem, rgba(0, 0, 0, 0.05) 0px 0.5rem 1.5rem;
  border: 0;
  border-radius: 6px;
  img {
    width: 45vw;
    height: 71vh;
  }
  &:hover {
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
    border-radius: 8px;
  }
`

interface IPropsMiniImage {
  url: string
}
export const ButtonImage = styled.button<IPropsMiniImage>`
  width: 100px;
  height: 100px;
  background: url(${props => props.url}) no-repeat center;
  background-size: contain;

  box-shadow: rgba(0, 0, 0, 0.05) 0px 0.1rem 0.3rem,
    rgba(0, 0, 0, 0.05) 0px 0.1rem 0.2rem, rgba(0, 0, 0, 0.05) 0px 0.5rem 1.5rem;
  border: 0;
  border-radius: 6px;
`
