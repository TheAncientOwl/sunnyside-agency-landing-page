import { useState } from 'react';
import {
  Arrow,
  DesktopLinks,
  Container,
  Logo,
  Nav,
  NavButton,
  NavLink,
  Title,
  ArrowContainer,
  MobileMenuButton,
  MobileMenu,
} from './HeaderElements';
import HamburgerIconSrc from '../../images/icon-hamburger.svg';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  menuOpen, setMenuOpen;

  const links = (
    <>
      <NavLink>about</NavLink>
      <NavLink>services</NavLink>
      <NavLink>projects</NavLink>
      <NavButton>contact</NavButton>
    </>
  );

  return (
    <Container>
      <Nav>
        <Logo />

        <DesktopLinks>{links}</DesktopLinks>

        <MobileMenuButton onClick={() => setMenuOpen(!menuOpen)}>
          <img src={HamburgerIconSrc} alt='menu button' />
        </MobileMenuButton>

        <MobileMenu open={menuOpen}>{links}</MobileMenu>
      </Nav>

      <Title>we are creatives</Title>

      <ArrowContainer>
        <Arrow />
      </ArrowContainer>
    </Container>
  );
}
