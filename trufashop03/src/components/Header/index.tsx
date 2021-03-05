import React, { useState, useCallback, useRef, useEffect } from 'react'

import ButtonMenu from './MenuResponsive/ButtonMenu'
import MenuResponsive from './MenuResponsive/Modal'
import Navigation from './Navigation'
import {
  Container,
  Content,
  NavLink,
  Profile,
  Box
} from './styles'

const Header: React.FC = () => {
  const menuDashBoard = {
    label: 'Home',
    path: '/',
    selected: true
  }

  const menuCursos = {
    label: 'Contato',
    path: '/contato',
    selected: false
  }

  const menus = [menuDashBoard, menuCursos]

  const [sticky, setSticky] = useState({ isSticky: false, offset: 0 })
  const headerRef = useRef<HTMLDivElement>(null)
  const [modalOpen, setModalOpen] = useState<boolean>(false)

  const handleToggleMenu = useCallback(() => {
    setModalOpen(!modalOpen)
  }, [modalOpen, setModalOpen])

  useEffect(() => {
    if (!headerRef.current) return

    const handleScrollEvent = () => {
      if (window.pageYOffset > 90) {
        setSticky({ isSticky: true, offset: window.pageYOffset })
      }
      if (window.pageYOffset < 9) {
        setSticky({ isSticky: false, offset: 0 })
      }
    }

    window.addEventListener('scroll', handleScrollEvent)
    return () => {
      window.removeEventListener('scroll', handleScrollEvent)
    }
  }, [setSticky])

  return (
    <Container ref={headerRef} visible={sticky.isSticky}>
      <MenuResponsive
        handleToggleMenu={handleToggleMenu}
        menus={menus}
        isOpen={modalOpen}
      />
      <Content>
        <Box>
          <NavLink href="/dashboard">
            <img src="/logo.png" alt="Proffy" />
          </NavLink>
          <ButtonMenu handleClick={handleToggleMenu} isActive={modalOpen} />
          <Navigation menus={menus} />
        </Box>
        <Profile>
          <div>
            <strong>Olá,</strong>
            <span>Seja bem-vindo</span>
          </div>
        </Profile>
      </Content>
    </Container>
  )
}

export default Header
