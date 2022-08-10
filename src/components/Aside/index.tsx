import React, { useState } from 'react';
import { Container, Header, LogoImg, Title, MenuContainer, MenuItemLink, MenuItemButton, ToggleMenu, ThemeToogleFooter } from './styles';
import logoImg from '../../assets/logo.svg';
import { MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp, MdClose, MdMenu } from 'react-icons/md';
import { useAuth } from '../../hooks/auth';
import { useTheme } from '../../hooks/theme';
import Toggle from '../Toggle';


const Aside: React.FC  = () => {
  const { signOut } = useAuth(); 
  const { toggleTheme, theme } = useTheme(); 

  const [toggleMenuisOpened, setToggleMenuisOpened] = useState(false);
  const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark ? true : false');

  const handleToggleMenu = () => {
    setToggleMenuisOpened(!toggleMenuisOpened);
  }

  const handleChangeTheme = () => {
    setDarkTheme(!darkTheme);
    toggleTheme();
  }

  return (
    <Container menuisOpen={ toggleMenuisOpened }>
      <Header>
        <ToggleMenu onClick={handleToggleMenu }>
          { toggleMenuisOpened ? <MdClose /> : <MdMenu /> }
        </ToggleMenu>
        <LogoImg src={logoImg} alt='Logo minha carteira' />
        <Title>Minha Carteira</Title>
      </Header>
      <MenuContainer>
        <MenuItemLink href='/dashboard'>
          <MdDashboard />
          Dashboard
        </MenuItemLink>

        <MenuItemLink href='/list/entry-balance'>
          <MdArrowUpward/>
          Entradas
        </MenuItemLink>

        <MenuItemLink href='/list/exit-balance'>
          <MdArrowDownward />
          Saídas
        </MenuItemLink>

        <MenuItemButton onClick={ () => signOut() }>
          <MdExitToApp />
          Sair
        </MenuItemButton>
      </MenuContainer>
      <ThemeToogleFooter menuisOpen={ toggleMenuisOpened }>
        <Toggle
          labelLeft="Light"
          labelRight='Dark'
          checked={ darkTheme }
          onChange={ handleChangeTheme }
        />
      </ThemeToogleFooter>
    </Container>
  )
}

export default Aside;