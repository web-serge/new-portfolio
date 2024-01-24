import styled, {css} from 'styled-components';
import {theme} from '../../styles/Theme';

export type HeadingsPropsType = {
    size?: string
    color?: string
    weight?: number
    margin?: string
    transform?: 'capitalize' | 'uppercase' | 'lowercase' | 'full-width' | 'full-size-kana' | 'none'
    heading?: 'h1' | 'h2' | 'h3'
    textAlign?: string
    space?: 'nowrap'
}
export const Heading = styled.h3<HeadingsPropsType> `
  position: relative;
  transition: all 0.3s;
  text-transform: capitalize;
  z-index: 0;
  font-weight: ${theme.weight.semiBold};
  margin: ${props => props.margin || '.5rem 0'};
  color: ${props => props.color || 'inherit'};

${props => props.heading === 'h1' && css `
  color: ${theme.colors.grayDark};
  font-size: clamp(1.4rem, 5vw, ${theme.size.h1}rem);
  position: relative;
  padding-left: 1.2rem;
  font-weight: ${theme.weight.semiBold};

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: .2rem;
    height: 100%;
    background: #ffc455;
  }
`}

${props => props.heading === 'h2' && css `
  line-height: 1.3;
  font-size: clamp(1.65rem, 5vw, ${theme.size.h2}rem);
  font-weight: ${theme.weight.semiBold};
`}
  
  ${props => props.heading === 'h3' && css `
    font-weight: ${theme.weight.semiBold};
    font-size: ${theme.size.h3}rem;
    white-space: nowrap;

    &::after {
      content: "";
      position: absolute;
      background: ${theme.colors.orangeLight};
      left: -12%;
      right: -12%;
      top: 1rem;
      bottom: 1.1rem;
      margin: auto;
      z-index: -1;
      transition: all 0.5s;
    }
  `}
`
