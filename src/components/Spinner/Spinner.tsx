import React from 'react';
import { Container, Props as ContainerProps } from './styles';

export interface Props extends ContainerProps {}

const Spinner: React.FC<Props> = (props) => {
  return <Container {...props} data-testid="spinner" />;
};

export default React.memo(Spinner);
