import styled from 'styled-components';
import {theme} from '../styles/Theme';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  width: 100%;
  margin-bottom: 1rem;
  justify-items: start;
  
  @media ${theme.media.mobile} {
    //grid-template-columns: repeat(auto-fit, minmax(25rem, auto));
    grid-template-columns: 1fr;
    justify-items: normal;
    margin-bottom: 0;
  }
`