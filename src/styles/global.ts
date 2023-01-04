import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize};
  
  body {
     font-family: ${({ theme }) => theme.font.family.default};
     overflow-x: hidden;
     background: ${({ theme }) => theme.colors.grey};
     color: ${({ theme }) => theme.colors.white};
  }
`;

export default GlobalStyle;
