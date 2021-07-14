import styled from 'styled-components';
import Colors from '../../Colors';
import Breakpoints from '../../Breakpoints';

export const Container = styled.div`
  padding: 5em 3em;

  @media (max-width: ${Breakpoints.sm}) {
    padding: 3.5em;
  }
`;

export const Title = styled.div`
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.8vw;
  font-family: cursive;
  letter-spacing: 0.125em;
  color: ${Colors.grayBlue};
  margin-bottom: 3em;

  @media (max-width: ${Breakpoints.sm}) {
    font-size: 4vw;
  }
`;

export const List = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 3em;

  @media (max-width: ${Breakpoints.sm}) {
    flex-direction: column;
  }
`;
