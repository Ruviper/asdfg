import styled from 'styled-components';

export const CounterContainer = styled.div`
  @media (max-width: 640px) {
    width: 90%;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  margin: 0 auto;

`;

export const Title = styled.h1`
  font-size: 1.5em;
  color: #000;
  margin: 0;
`;

export const Subtitle = styled.h2`
  font-size: 0.7em;
  font-weight: 300;
  color: gray;
  margin-bottom: 0;
`;

export const TimeContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin: 32px 0;
`;

export const TimeColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TimeNumber = styled.p`
  font-size: 2.5em;
  color: gray;
  margin: 0;
  font-weight: 600;
`;

export const TimeText = styled.p`
  font-size: 1em;
  color: gray;
  margin: 0;

  font-weight: 400;
`;
