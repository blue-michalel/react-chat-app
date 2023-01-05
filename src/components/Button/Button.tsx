import React from 'react';
import { Types } from './types';
import { StyledButton, IconWrapper } from './styles';

export interface Props {
  title: string;
  type?: Types;
  big?: boolean;
  LeftIcon?: React.ReactNode;
  RightIcon?: React.ReactNode;
  testId?: string;
  onClick?(): void;
}

const Button: React.FC<Props> = React.memo(
  ({
    title,
    big,
    LeftIcon,
    RightIcon,
    type = Types.PRIMARY,
    testId,
    onClick,
  }) => {
    return (
      <StyledButton
        big={big}
        btnType={type}
        data-testid={testId}
        onClick={onClick}>
        {LeftIcon && <IconWrapper left>{LeftIcon}</IconWrapper>}
        <span>{title}</span>
        {RightIcon && <IconWrapper right>{RightIcon}</IconWrapper>}
      </StyledButton>
    );
  },
);

Button.displayName = 'Button';

export default Button;
