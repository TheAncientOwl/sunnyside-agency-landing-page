import styled, { css } from 'styled-components';
import Colors from '../../Colors';

export const Grid = styled.div(
  ({ double }) => css`
    display: grid;
    grid-template-columns: ${double ? '25% 25% 25% 25%' : '50% 50%'};
    height: ${double ? '30vw' : '40vw'};
  `
);

export const TextBox = styled.div`
  padding: 5em 3em 5em 5em;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;

  overflow: auto;
`;

export const TextBoxTitle = styled.div`
  font-family: cursive;
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

  cursor: pointer;
  display: inline;

  position: relative;
  :before {
    content: '';
    position: absolute;
    background: hsla(51, 100%, 49%, 0.45);

    bottom: -0.1em;
    left: -0.4em;
    width: calc(100% + 0.8em);
    height: 0.45em;

    border-radius: 2em;
  }

  transition: 0.3s ease-in;

  :hover {
    color: ${Colors.softRed};
    transition: 0.3s ease-out;

    :before {
      background: hsla(51, 100%, 49%, 0.46);
      transition: 0.3s ease-out;
    }
  }
`;

export const ImageBox = styled.div`
  position: relative;
`;

export const ImageText = styled.div(
  ({ color }) => css`
    position: absolute;
    bottom: 3em;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    color: ${color || 'red'};
  `
);

export const ImageTitle = styled.div`
  font-weight: bold;
  font-size: 1.45em;
  margin-bottom: 1.25em;
  font-family: cursive;
`;

export const ImageParagraph = styled.div`
  min-width: 39ch;
  line-height: 1.4em;
`;
