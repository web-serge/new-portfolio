import {Wrapper} from '../../components/Wrapper';
import {Flex} from '../../components/Flex';
import {Button} from '../../components/Buttom';
import photo from '../../assets/images/photo.jpg'
import styled from 'styled-components';
import {Heading} from '../../components/styled-html-tag/Headings';
import {Paragraph} from '../../components/styled-html-tag/Paragraph';
import {Span} from '../../components/styled-html-tag/Span';
import {theme} from '../../styles/Theme';
import {Section} from '../../components/styled-html-tag/Section';

export const About = () => {
    return (
        <Section>
            <Wrapper>
                <Flex justify='space-between' align='center' gap='2rem' wrap='wrap'>
                    <ImageWrapper>
                        <img src={photo} alt="random photo"/>
                    </ImageWrapper>
                    <Flex direction='column' maxWidth='55rem'>
                        <Heading as={'h3'} heading='h3' id='about'>About Me</Heading>
                        <Heading as={'h2'} heading='h2' color={theme.colors.cyan} margin='1.5rem 0 1.7rem 0;'>I'm In The Design Industry With 10 Years Of Experience.</Heading>
                        <Paragraph>There are many variations of passages of Lorem Ipsum , but the a have suffered are some form,
                            by injected humour, or the words which don't look even slightl. If you use a passage of, you
                            need to be sure there isn't anything look even slightly believable. If you are going to use
                            a of , you need to be sure there isn't hidden in the middle the on the tend.
                        </Paragraph>
                        <Paragraph>
                            Embarrassing hidden in the middle of text. All the Lorem Ipsum generate on the are Internet
                            tend to repeat predefined chunks as necessary, making of this the first true generator on
                            the Internet which don't look even you.
                        </Paragraph>
                        <Span color={theme.colors.cyan}>Sergey Churekov</Span>
                        <Span size='1.5rem' margin='0 0 2rem 0'>Frontend Developer</Span>
                        <Flex width='100%' gap='1rem'>
                            <Button type={'a'} primaryValue='Download CV' secondaryValue='Download'/>
                            <Button type={'a'} primaryValue='Hire Me' secondaryValue='Contact'
                                    background={theme.colors.pink}/>
                        </Flex>
                    </Flex>
                </Flex>
            </Wrapper>
        </Section>
    )
}

const ImageWrapper = styled.div `
  max-width: 50rem;
  width: 100%;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border: 5px solid #ff517e;
    top: 3rem;
    right: 3rem;
    z-index: -1;
    
  }

  & img {
    width: 100%;
    transform: scale(-1, 1);
  }
`

const ContentWrapper = styled.div `
  max-width: 65rem;
  width: 100%;
`