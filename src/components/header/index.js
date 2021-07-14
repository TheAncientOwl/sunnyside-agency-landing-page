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
const Scroll = require('react-scroll');

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

  const scrollToContent = () => {
    const element = document.getElementById('content');
    if (!element) {
      console.error(`Cannot find element with id content`);
      return;
    }

    Scroll.animateScroll.scrollTo(element.offsetTop, {
      duration: 1200,
      delay: 100,
      smooth: true,
      offset: 50,
    });
  };

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

      <ArrowContainer onClick={scrollToContent}>
        <Arrow />
      </ArrowContainer>
    </Container>
  );
}
