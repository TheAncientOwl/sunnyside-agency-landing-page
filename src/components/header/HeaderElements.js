import styled from 'styled-components';
import ImgHeaderDesktopSrc from '../../images/desktop/image-header.jpg';
import LogoSrc from '../../images/logo.svg';
import Colors from '../../Colors';
import ArrowSrc from '../../images/icon-arrow-down.svg';

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

export const Logo = styled.img`
  content: url(${LogoSrc});
`;

export const NavLink = styled.a`
  text-transform: capitalize;

  color: ${Colors.white};
  padding: 0 1em;
  cursor: pointer;
  text-decoration: none;

  :first-of-type {
    margin-left: auto;
  }

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
`;

export const Title = styled.div`
  text-transform: uppercase;
  letter-spacing: 0.125em;
  font-weight: bold;
  color: ${Colors.white};
  font-size: 4em;
  text-align: center;
  margin-top: 1.7em;
`;

export const ArrowContainer = styled.div`
  margin: 6em auto 0 auto;
  width: 2.7em;
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
