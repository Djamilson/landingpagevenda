import styled, { keyframes } from 'styled-components'

import { px2vw } from '../../utils/px2vw'

interface Props {
  visible: boolean
}

const fadeIn = keyframes`
  0% {
    opacity: 0;
    background: ${props => props.theme.colors.colorPrimary};
      transform: translateY(-142px);
     }
  100% {
    opacity: 1;
    background: ${props => props.theme.colors.colorBoxBase};
    transform: translateY(0px);
  }
`

export const Container = styled.div<Props>`
  position: fixed;
  top: 0rem;
  right: 0;
  transition: all 0.5s ease;
  animation: ${props => props.visible && fadeIn} 500ms linear;
  width: 100vw;
  padding: 0;
  padding-top: ${props => (props.visible ? '0.5rem' : '1rem')};
  padding-bottom: ${props => (props.visible ? '0.5rem' : '1rem')};

  background: #fff;
  border: 0;
  z-index: 5;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.6);
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.6);
  -o-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.6);

  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  border: 0;
  top: 0;
  margin-top: 0rem;
`

export const Content = styled.div`
  height: 3rem;
  width: 10vw;

  display: flex;
  align-items: center;
  flex-direction: row;
  border: 0;

  @media (min-width: 1024px) {
    margin: 0;
    right: 0;
    padding: 0;
    width: 90vw;
  }

  @media (min-width: 425px) {
    justify-content: space-between;
  }
`

export const NavLink = styled.a`
  img {
    height: 3rem;
  }

  @media (max-width: 424px) {
    margin-left: calc(100% - 180px);
  }
`

export const ProfileLink = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;
  width: 135px;

  &:hover {
    opacity: 0.7;
  }
  svg {
    color: ${props => props.theme.colors.colorTitleInPrimary};
    width: 40px;
    height: 40px;
  }
  div {
    width: 100%;
    text-align: right;
    strong {
      color: ${props => props.theme.colors.colorTitleInPrimary};
    }
    span {
      font-size: 12px;
      color: ${props => props.theme.colors.colorTextInPrimary};
    }
  }
`

export const Profile = styled.div`
  display: none;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  border: 0;
  margin-left: 20px;
  div {
    text-align: right;
    margin-right: 10px;
    display: flex;
    border: 0;
    flex-direction: column;
    width: 100px;
    top: 0;
    margin-top: -0.5rem;
    strong {
      display: block;
      color: ${props => props.theme.colors.colorTextcomplement01};
      font-weight: bold;
    }
    span {
      color: ${props => props.theme.colors.colorTextcomplement01};
      display: block;
      margin-top: 2px;
      font-size: 12px;
    }
  }

  img {
    height: 36px;
    width: 36px;
    border-radius: 50%;
  }

  @media (min-width: 425px) {
    display: flex;
  }
`

export const Badge = styled.button`
  display: none;
  background: none;
  border: 0;
  width: 60px;
  min-width: 60px;
  max-width: 60px;

  align-items: initial;
  flex-direction: row;

  justify-content: space-between;
  margin-left: 20px;
  text-decoration: none;
  transition: opacity 0.2s;
  height: 2.6rem;
  &:hover {
    opacity: 0.7;
  }
  strong {
    font-size: 16px;
    color: ${props => props.theme.colors.colorTextInPrimary};
  }
  span {
    svg {
      font-size: 22px;
      color: ${props => props.theme.colors.colorTitleInPrimary};
    }
  }
  @media (min-width: 764px) {
    display: flex;
  }
`
