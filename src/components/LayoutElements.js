import styled from 'styled-components';
import Colors from '../Colors';

export const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50vw;
  border: 1px solid red;
`;

export const TextBox = styled.div`
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -o-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;

  width: 100%;
  border: 1px solid red;
  display: flex;
  justify-content: center;
  padding: 4em;
`;

export const TextBoxContent = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  height: 100%;
`;

export const TextBoxTitle = styled.div`
  font-size: 2.5em;
  font-weight: bold;
  max-width: 14ch;
  color: ${Colors.darkDesaturatedBlue};
`;

export const TextBoxParagraph = styled.div`
  font-size: 1.2em;
  font-weight: bold;
  line-height: 1.5em;
  max-width: 45ch;
  color: ${Colors.darkGrayBlue2};
`;

export const TextBoxLink = styled.a`
  text-transform: uppercase;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.25em;

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
  width: 100%;
`;
