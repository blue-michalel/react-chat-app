import styled from 'styled-components';
import { Column, Row } from '../../styles';

export const Container = styled(Column)`
  flex: 1;
`;

export const VideoWrapper = styled(Row)`
  flex: 1;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(30%, 1fr));
`;

export const NavigationWrapper = styled(Row)`
  padding: 20px;
  justify-content: center;
`;

export const JoinOthersWrappers = styled(Column)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
