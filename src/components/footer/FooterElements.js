import styled from 'styled-components';
import Colors from '../../Colors';

export const Container = styled.div`
  background: ${Colors.darkModerateCyan};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5em;
  font-size: 1.5vw;
`;

export const LogoContainer = styled.div`
  margin-bottom: 2em;
`;

export const Links = styled.div`
  display: flex;
  color: ${Colors.darkDesaturatedCyan};
  text-transform: capitalize;
  margin-bottom: 4em;
`;

export const Socials = styled.div`
  display: flex;
`;

export const Link = styled.div`
  padding: 0 1em;
  color: ${Colors.darkDesaturatedCyan};
  cursor: pointer;
`;
