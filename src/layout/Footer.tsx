import styled from 'styled-components';
import {theme} from '../styles/Theme';

export const Footer = () =>  <StyledFooter><small>Copyright © 2021 Portfolio. All Rights Reserved</small></StyledFooter>

const StyledFooter = styled.footer `
  background-color: ${theme.colors.orangeLight};
  padding: 1.7rem 0;
  text-align: center;
  font-size: 1.5rem;
  color: ${theme.colors.white};
`