import styled from 'styled-components'

interface IProps {
  scrolled: number
}

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 5px;
  z-index: 99;
  //border: 1px solid #f00;
  //position: absolute;
  overflow-x: hidden;
`

export const DivScroll = styled.div<IProps>`
  //position: relative;
  width: ${props => `${props.scrolled}%`};
  height: 100%;
  background: ${props => props.theme.colors.green_};
`
