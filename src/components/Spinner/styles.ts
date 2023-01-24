import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const DEFAULT_SIZE = 36;

export interface Props {
  size?: number;
}

export const Container = styled.div<Props>`
  width: ${({ size }) => `${size ?? DEFAULT_SIZE}px`};
  height: ${({ size }) => `${size ?? DEFAULT_SIZE}px`};
  border: ${({ size }) => (size ?? DEFAULT_SIZE) / 5}px solid
    ${({ theme }) => theme.colors.blue};
  border-top: ${({ size }) => (size ?? DEFAULT_SIZE) / 5}px solid
    ${({ theme }) => theme.colors.grey};
  border-radius: 50%;
  animation: ${spin} 1.5s linear infinite;
  align-self: center;
`;

export const SpinnerWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
