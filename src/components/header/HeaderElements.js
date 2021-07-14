import styled, { css } from 'styled-components';
import ImgHeaderDesktopSrc from '../../images/desktop/image-header.jpg';
import LogoSrc from '../../images/logo.svg';
import Colors from '../../Colors';
import ArrowSrc from '../../images/icon-arrow-down.svg';
import Breakpoints from '../../Breakpoints';

export const Container = styled.div`
  background-size: cover;
  background-image: url(${ImgHeaderDesktopSrc});
  background-position: bottom center;
  height: 100vh;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding: 1.5em;
  font-size: 1.3em;
`;

export const DesktopLinks = styled.div`
  margin-left: auto;
  @media (max-width: ${Breakpoints.md}) {
    display: none;
  }
`;

export const MobileMenuButton = styled.div`
  margin-left: auto;
  @media (min-width: ${Breakpoints.md}) {
    display: none;
  }
`;

export const MobileMenu = styled.div(
  ({ open }) => css`
    position: absolute;
    top: 14vh;
    left: 50%;
    transform: translate(-50%);

    background: ${Colors.white};
    width: 80vw;
    padding: 2em 1em;

    display: flex;
    flex-direction: column;
    align-items: center;

    display: ${open ? 'flex' : 'none'};
    border-radius: 1em;

    @media (min-width: ${Breakpoints.md}) {
      display: none;
    }
  `
);

export const Logo = styled.img`
  content: url(${LogoSrc});
`;

export const NavLink = styled.a`
  text-transform: capitalize;

  color: ${Colors.white};
  padding: 0 1em;
  cursor: pointer;
  text-decoration: none;

  position: relative;
  ::before {
    content: '';
    position: absolute;
    bottom: -0.31em;
    left: 0;
    height: 2px;
    background: ${Colors.softRed};
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.3s ease-out;
    margin: 0 5%;
    width: 90%;
    border-radius: 1em;
  }

  :hover {
    color: ${Colors.softRed};

    ::before {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }

  @media (max-width: ${Breakpoints.md}) {
    color: ${Colors.darkGrayBlue2};
    margin-bottom: 1em;
    font-size: 3vw;
  }
`;

export const NavButton = styled.a`
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 0.125em;
  color: ${Colors.darkDesaturatedBlue};
  background: ${Colors.white};
  cursor: pointer;
  text-decoration: none;
  padding: 0.5em 1em;
  border-radius: 2em;
  margin-left: 1em;
  border: 2px solid ${Colors.white};
  transition: 0.3s ease-out;

  :hover {
    color: ${Colors.white};
    background-color: ${Colors.softRed};
  }

  @media (max-width: ${Breakpoints.md}) {
    background-color: ${Colors.yellow};
    padding: 1em 2em;
  }
`;

export const Title = styled.div`
  text-transform: uppercase;
  letter-spacing: 0.125em;
  font-weight: bold;
  color: ${Colors.white};
  font-size: 4.45vw;
  text-align: center;
  margin-top: 9vh;
  margin-bottom: 15vh;
`;

export const ArrowContainer = styled.div`
  margin: 0 auto;
  width: 4.5vh;
`;

export const Arrow = styled.img`
  display: block;
  width: 100%;
  content: url(${ArrowSrc});

  cursor: pointer;

  transition: 0.2s ease-in;

  :hover {
    transition: 0.3s ease-out;
    transform: translateY(5%) scale(1.1);
  }
`;
