import styled, { css } from 'styled-components';

export interface Props {
  localVideo?: boolean;
}

const localVideoStyles = css`
  position: absolute;
  bottom: 100px;
  width: 300px;
  height: auto;
`;

export const StyledVideo = styled.video<Props>`
  width: 100%;
  ${({ localVideo }) => localVideo && localVideoStyles}
`;
