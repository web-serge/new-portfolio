import {Wrapper} from '../../components/Wrapper';
import styled from 'styled-components';
import banner_bg from '../../assets/images/banner_bg.png'
import {Moveup} from '../../styles/animations/Moveup';

export const Main = () => {
    return <StyledSection>
        <Wrapper>

        </Wrapper>
    </StyledSection>
}

const StyledSection = styled.section `
  height: 100vh;
  background: url(${banner_bg});
  background-size: cover;
  transition: all 0.3s;
  animation: ${Moveup} 50s linear infinite;
`

