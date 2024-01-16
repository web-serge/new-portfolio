import styled from 'styled-components';
import {theme} from '../../../styles/Theme';

export const Textarea = styled.textarea `
  width: 100%;
  resize: none;
  min-height: 10rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #212529;
  appearance: none;
  border-radius: 0.25rem;
  outline: none;
  background: #ff000000;
  border: 1px solid #c7cdd3;
  padding: .5rem;
  grid-column: 1/3;

  transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;

  &:focus,
  &:focus-visible {
    background-color: ${theme.colors.textFieldBg};
  }

  @media ${theme.media.mobile} {
    grid-column: auto;
  }
`