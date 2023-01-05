import { fireEvent, render, screen } from '../../test-utils';
import React from 'react';
import Button, { Props } from './Button';
import { PlayIcon } from '../../icons';

describe('<Button />', () => {
  const title = 'button-title';
  const onClick = jest.fn();
  const props: Props = {
    title,
    onClick,
  };

  it('should render component', () => {
    render(<Button {...props} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it('should call the onClick callback', () => {
    render(<Button {...props} />);
    fireEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should add the icons', () => {
    const leftIconId = 'left-icon';
    const LeftIcon = <PlayIcon data-testid={leftIconId} />;
    const rightIconId = 'right-icon';
    const RightIcon = <PlayIcon data-testid={rightIconId} />;

    render(<Button {...props} LeftIcon={LeftIcon} RightIcon={RightIcon} />);
    expect(screen.getByTestId(leftIconId)).toBeInTheDocument();
    expect(screen.getByTestId(rightIconId)).toBeInTheDocument();
  });

  it('should render as a big variant', () => {
    const expectedHeight = '60px';
    render(<Button {...props} big />);
    expect(screen.getByRole('button')).toHaveStyle(
      `height: ${expectedHeight};`,
    );
  });
});
