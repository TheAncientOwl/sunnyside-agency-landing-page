import { Arrow, Container, Logo, Nav, NavButton, NavLink, Title, ArrowContainer } from './HeaderElements';

export default function Header() {
  return (
    <Container>
      <Nav>
        <Logo />
        <NavLink>about</NavLink>
        <NavLink>services</NavLink>
        <NavLink>projects</NavLink>
        <NavButton>contact</NavButton>
      </Nav>

      <Title>we are creatives</Title>

      <ArrowContainer>
        <Arrow />
      </ArrowContainer>
    </Container>
  );
}
