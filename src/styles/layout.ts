import styled from 'styled-components';

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
`;

export const Layout = styled(Column)`
  min-height: 100vh;
`;
