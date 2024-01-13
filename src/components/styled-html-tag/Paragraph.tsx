import styled from 'styled-components';
import {HeadingsPropsType} from './Headings';

export const Paragraph = styled.p<HeadingsPropsType> `
  color: ${props => props.color || '#777777;'};
  
  & + & {
    margin: 2rem 0;
  }
`