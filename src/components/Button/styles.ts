import styled, {
  css,
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps,
} from 'styled-components';
import { Types } from './types';

const primary = css`
  background: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  svg {
    > path {
      fill: ${({ theme }) => theme.colors.white};
    }
  }
`;

const secondary = css`
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.blue};
  border: 1px solid ${({ theme }) => theme.colors.blue};
  svg {
    > path {
      fill: ${({ theme }) => theme.colors.blue};
    }
  }
`;

const types: Record<Types, FlattenInterpolation<ThemeProps<DefaultTheme>>> = {
  [Types.PRIMARY]: primary,
  [Types.SECONDARY]: secondary,
};

const center = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const StyledButton = styled.button<{
  noMinWidth?: boolean;
  big?: boolean;
  btnType: Types;
}>`
  ${center}
  padding: 0 16px;
  min-width: ${({ noMinWidth }) => (noMinWidth ? 'unset' : '150px')};
  height: ${({ big }) => (big ? 60 : 40)}px;
  border-radius: 4px;
  box-sizing: border-box;
  outline: 0;
  border: 0;
  cursor: pointer;
  ${({ btnType }) => types[btnType]};
`;

const leftIcon = css`
  margin-left: -8px;
  margin-right: 8px;
`;

const rightIcon = css`
  margin-left: 8px;
  margin-right: -8px;
`;

export const IconWrapper = styled.div<{ left?: boolean; right?: boolean }>`
  ${center}
  ${({ left }) => left && leftIcon};
  ${({ right }) => right && rightIcon};
`;
