import React, { PropsWithChildren } from 'react';
import { Container, Content } from './styles';

const Layout: React.FC<PropsWithChildren> = React.memo(({ children }) => (
  <Container>
    <Content>{children}</Content>
  </Container>
));

Layout.displayName = 'Layout';

export default Layout;
