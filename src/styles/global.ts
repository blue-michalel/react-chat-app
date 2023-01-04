import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize};
  
  body {
     font-family: ${({ theme }) => theme.font.family.default};
     overflow-x: hidden;
  }
`;

export default GlobalStyle;
