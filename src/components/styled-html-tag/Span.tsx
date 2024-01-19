import {HeadingsPropsType} from './Headings';
import styled from 'styled-components';

export const Span = styled.span<HeadingsPropsType> `
  display: inline-block;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: ${props => props.size || '1.8rem'};
  font-weight: ${props => props.weight || 600};
  color: ${props => props.color || '#777777'};
  text-align: ${props => props.textAlign || 'left'};
  margin: ${props => props.margin || '0'}; 
  white-space: ${props => props.space || 'wrap'};
`