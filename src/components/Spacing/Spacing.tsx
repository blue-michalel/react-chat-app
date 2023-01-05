import * as React from 'react';
import { Spacing as StyledSpacing } from './styles';

export interface Props {
  top?: number;
  bottom?: number;
  testId?: string;
}

const Spacing: React.FC<Props> = React.memo(({ top, bottom = 8, testId }) => {
  return <StyledSpacing data-testid={testId} top={top} bottom={bottom} />;
});

Spacing.displayName = 'Spacing';

export default Spacing;
