import styled from 'styled-components';
import {theme} from '../../../styles/Theme';

export const Input = styled.input `
  display: block;
  width: 100%;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  
  border-radius: 0.25rem;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;

  outline: none;
  border: none;
  background: #ff000000;
  border-bottom: 1px solid #c7cdd3;
  padding: 1rem .5rem;

  &:focus,
  &:focus-visible {
    background-color: ${theme.colors.textFieldBg};
  }
`