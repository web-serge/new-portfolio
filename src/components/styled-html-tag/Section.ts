import styled from 'styled-components';
import {theme} from '../../styles/Theme';

type SectionPropsType = {
    bg?: string
}
export const Section = styled.section<SectionPropsType>`
  padding: ${theme.size.sectionPadding}rem 0;
  background-color: ${props => props.bg || theme.colors.background};
  
  @media ${theme.media.mobile} {
    padding: ${theme.size.sectionMobilePadding}rem 0;
  }
`