import styled from 'styled-components';

type FlexPropsType = {
    display?: 'flex' | 'inline-flex'
    align?: 'center' | 'flex-start' | 'flex-end'
    justify?: 'center' | 'space-between' | 'flex-start' | 'flex-end'
    direction?: 'row' | 'column'
    gap?: string
    flex?: string
    padding?: string
    background?: string
    wrap?: string
    maxWidth?: string
}
export const Flex = styled.div<FlexPropsType>`
  max-width: ${props => props.maxWidth};
  width: 100%;
  height: 100%;
  display: ${props => props.display || 'flex'};
  flex-wrap: ${props => props.wrap || 'nowrap'};
  flex-direction: ${props => props.direction || 'row'};
  align-items: ${props => props.align || 'flex-start'};
  justify-content: ${props => props.justify || 'flex-start'};
  gap: ${props => props.gap};
  flex: ${props => props.flex};
  padding: ${props => props.padding};
  background: ${props => props.background};
`