import {Wrapper} from '../../components/Wrapper';
import {Flex} from '../../components/Flex';
import {Button} from '../../components/Button';
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
                        <img src={photo} alt="avata"/>
                    </ImageWrapper>
                    <Flex direction='column' maxWidth='55rem'>
                        <Heading as={'h3'} heading='h3' id='about'>About Me</Heading>
                        <Heading as={'h2'} heading='h2' color={theme.colors.cyan} margin='1.5rem 0 1.7rem 0;'>Want to know me?</Heading>
                        <Paragraph>
                            I'm a Frontend Developer passionate about crafting interactive, accessible, and responsive websites. Check out my projects section for some of the beautiful websites I've built.
                        </Paragraph>
                        <Paragraph>
                            I'm currently open to Job opportunities where I can contribute to your business and create delightful user experiences. Feel free to contact me if you find my skills useful.
                        </Paragraph>
                        <Span color={theme.colors.cyan}>Sergey Churekov</Span>
                        <Span size='1.5rem' margin='0 0 2rem 0'>Frontend Developer</Span>
                        <Flex width='100%' gap='1rem' wrap={'wrap'}>
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
  margin: 0 auto;
  
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border: 5px solid #ff517e;
    top: 3rem;
    right: 3rem;
    //top: 5%;
    //right: 5%;
    z-index: -1;
    
  }

  & img {
    width: 100%;
    transform: scale(-1, 1);
  }
`