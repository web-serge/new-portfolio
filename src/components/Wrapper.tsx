import styled from 'styled-components';
import {theme} from '../styles/Theme';

export const Wrapper = styled.div `
  max-width: 150rem;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding-left: 16rem;
  overflow: hidden;

  @media ${theme.media.mobile} {
    padding: 0 .5rem;
  }
`