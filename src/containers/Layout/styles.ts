import styled, { css } from 'styled-components';
import { Layout, Column } from '../../styles';

export const Container = styled(Layout)<{ disableEvents?: boolean }>`
  background-color: ${({ theme }) => theme.colors.grey};
`;

export const Content = styled(Column)<{ box?: boolean }>`
  flex: 1;
  position: relative;
`;
