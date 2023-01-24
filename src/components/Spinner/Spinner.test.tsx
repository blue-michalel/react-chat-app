import { render, screen } from '../../test-utils';
import React from 'react';
import Spinner, { Props } from './Spinner';

describe('<Spinner />', () => {
  const props: Props = {};

  it('should render component', () => {
    render(<Spinner {...props} />);
    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });

  it('should set size', () => {
    const expectedSize = 55;
    render(<Spinner {...props} size={expectedSize} />);
    expect(screen.getByTestId('spinner')).toHaveStyle(`
        width: ${expectedSize}px;
        height: ${expectedSize}px;
      `);
  });
});
