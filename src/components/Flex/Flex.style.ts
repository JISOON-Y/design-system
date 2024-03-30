import styled from 'styled-components';
import { FlexProps } from './Flex';

export const FlexContainer = styled.div<FlexProps>`
  display: flex;
  align-items: ${props => props.alignSelf ?? 'start'};
  flex-direction: ${props => props.flexDirection ?? 'row'};
  justify-content: ${props => props.justifyContent ?? 'start'};
  flex-wrap: ${props => props.flexWrap ?? 'nowrap'};
  gap: ${props => props.gap ?? 0}px;
  width: ${props => (props.height !== undefined ? props.width + 'px' : 'auto')};
  height: ${props =>
    props.height !== undefined ? props.height + 'px' : 'auto'};
`;
