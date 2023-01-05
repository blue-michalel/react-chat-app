import React from 'react';
import { render, screen } from '../../test-utils';

import Spacing, { Props } from './Spacing';

describe('<Spacing />', () => {
  const props: Props = {
    testId: 'spacing',
  };
  it('should render component', () => {
    render(<Spacing {...props} />);
    expect(screen.getByTestId('spacing')).toBeInTheDocument();
  });

  it('should add the margins', () => {
    render(<Spacing {...props} bottom={16} top={16} />);
    expect(screen.getByTestId('spacing')).toHaveStyle(
      `margin-top: 16px; margin-bottom: 16px`,
    );
  });
});
