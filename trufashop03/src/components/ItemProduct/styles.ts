import styled from 'styled-components'
import theme from '../../styles/theme'

export const Container = styled.main`
  top: 0;
  margin-bottom: 0vh;
  border: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  width: 100%;
  height: 230vh;
  padding: 0;
  border-bottom: 1px solid ${theme.colors.colorLineInWhite};
`
export const Content = styled.div`
  top: 0;

  margin-top: -15rem;
  margin-bottom: 0vh;

  display: grid;
  grid-template-columns: 2fr 1fr;
  justify-content: center;
  align-items: center;

  box-shadow: rgba(0, 0, 0, 0.05) 0px 0.1rem 0.3rem,
    rgba(0, 0, 0, 0.05) 0px 0.1rem 0.2rem, rgba(0, 0, 0, 0.05) 0px 0.5rem 1.5rem;
  border: 0;

  width: 100%;
`
