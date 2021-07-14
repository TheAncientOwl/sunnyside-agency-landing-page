import styled, { css } from 'styled-components';
import Colors from '../Colors';

export const Grid = styled.div(
  ({ double }) => css`
    display: grid;
    grid-template-columns: ${double ? '25% 25% 25% 25%' : '50% 50%'};
    height: ${double ? '30vw' : '40vw'};
    border: 1px solid red;
  `
);

export const TextBox = styled.div`
  padding: 5em 3em 5em 5em;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;

  border: 1px solid black;

  overflow: auto;
`;

export const TextBoxTitle = styled.div`
  font-size: 3.2vw;
  font-weight: bold;
  padding-right: 2.5em;
  color: ${Colors.darkDesaturatedBlue};
`;

export const TextBoxParagraph = styled.div`
  font-size: 1.5vw;
  font-weight: bold;
  line-height: 1.5em;
  max-width: 60ch;
  color: ${Colors.darkGrayBlue2};
`;

export const TextBoxLink = styled.a`
  text-transform: uppercase;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.55vw;

  display: inline;

  position: relative;
  ::before {
    content: '';
    position: absolute;
    background: hsla(51, 100%, 49%, 0.45);

    bottom: -0.1em;
    left: -0.4em;
    width: calc(100% + 0.8em);
    height: 0.45em;

    border-radius: 2em;
  }
`;

export const ImageBox = styled.div`
  border: 1px solid red;
`;
