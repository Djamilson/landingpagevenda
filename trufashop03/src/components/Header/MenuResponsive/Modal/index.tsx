import React, { useRef } from 'react'
import { useSpring, animated } from 'react-spring'

import IMenu from '../../../../types/menu'
import { Background, Container, OrderLI, ModalWrapper } from './styles'

interface IProps {
  handleToggleMenu(): void
  menus: IMenu[]
  isOpen: boolean
}

const Modal: React.FC<IProps> = ({ isOpen, handleToggleMenu, menus }) => {
  const modalRef = useRef<HTMLDivElement>(null)

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? `translateY(0%)` : `translateY(-100%)`
  })

  return (
    <Background visible={isOpen} onClick={handleToggleMenu} ref={modalRef}>
      <animated.div style={animation}>
        <ModalWrapper showModal={isOpen}>
          <Container>
            {menus?.map((menu: IMenu, index) => {
              return (
                <OrderLI key={index}>
                  <a
                    href={menu.path}
                    aria-label={menu.label}
                    onClick={handleToggleMenu}
                  >
                    <span>{menu.label}</span>
                  </a>
                </OrderLI>
              )
            })}
          </Container>
        </ModalWrapper>
      </animated.div>
    </Background>
  )
}

export default Modal
