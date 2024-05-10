import styled, { keyframes } from 'styled-components';

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const SpinnerContainer = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SpinnerStyled = styled.div`
  width: 60px;
  height: 60px;
  border: 10px #565eef solid;
  border-bottom-color: #ff922d;
  border-radius: 50%;
  animation: ${spinAnimation} 1.5s linear infinite;
`;
