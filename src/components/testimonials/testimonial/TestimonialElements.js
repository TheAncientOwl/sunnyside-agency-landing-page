import styled from 'styled-components';
import Colors from '../../../Colors';
import Breakpoints from '../../../Breakpoints';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  border-radius: 50%;
  width: 6.5vw;
  margin-bottom: 2.5em;

  @media (max-width: ${Breakpoints.sm}) {
    width: 25vw;
    margin-bottom: 1.5em;
  }
`;

export const Text = styled.div`
  max-width: 36ch;
  text-align: center;
  font-weight: bold;
  font-size: 1.2vw;
  color: ${Colors.darkDesaturatedBlue};
  margin-bottom: 3em;

  @media (max-width: ${Breakpoints.sm}) {
    font-size: 3.7vw;
    margin-bottom: 2em;
  }
`;

export const Name = styled.div`
  font-size: 1.4vw;
  font-weight: bold;
  font-family: cursive;
  color: ${Colors.darkDesaturatedBlue};
  margin-bottom: 0.7em;

  @media (max-width: ${Breakpoints.sm}) {
    font-size: 3.5vw;
  }
`;

export const Title = styled.div`
  font-size: 1.1vw;
  color: ${Colors.grayBlue};

  @media (max-width: ${Breakpoints.sm}) {
    font-size: 3.2vw;
  }
`;
