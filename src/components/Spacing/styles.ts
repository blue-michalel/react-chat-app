import styled from 'styled-components';

export const Spacing = styled.div<{ top?: number; bottom?: number }>`
  margin-top: ${({ top }) => top && `${top}px`};
  margin-bottom: ${({ bottom }) => bottom && `${bottom}px`};
`;
