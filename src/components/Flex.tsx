import styled from 'styled-components';
import {theme} from '../styles/Theme';

type FlexPropsType = {
    display?: 'flex' | 'inline-flex'
    align?: 'center' | 'flex-start' | 'flex-end'
    justify?: 'center' | 'space-between' | 'flex-start' | 'flex-end' | 'space-around'
    direction?: 'row' | 'column'
    gap?: string
    flex?: string
    padding?: string
    background?: string
    wrap?: string
    maxWidth?: string
    width?: string
    height? : string
    margin?: string
}
export const Flex = styled.div<FlexPropsType>`
  max-width: ${props => props.maxWidth};
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  display: ${props => props.display || 'flex'};
  flex-wrap: ${props => props.wrap || 'nowrap'};
  flex-direction: ${props => props.direction || 'row'};
  align-items: ${props => props.align || 'flex-start'};
  justify-content: ${props => props.justify || 'flex-start'};
  gap: ${props => props.gap};
  flex: ${props => props.flex};
  padding: ${props => props.padding};
  background: ${props => props.background};
  margin: ${props => props.margin || '0 auto'};
  
  @media ${theme.media.mobile} {
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`