import {Section} from '../../../components/styled-html-tag/Section';
import {Wrapper} from '../../../components/Wrapper';
import {Flex} from '../../../components/Flex';
import {Heading} from '../../../components/styled-html-tag/Headings';
import {theme} from '../../../styles/Theme';
import {TabMenu, TabsType} from './TabMenu';
import todoImage from '../../../assets/images/to-do-list-apps.png'
import socialImage from '../../../assets/images/social-network.jpg'
import orange from '../../../assets/images/orange.jpg'
import styled from 'styled-components';
import {useState} from 'react';
import {Button} from '../../../components/Buttom';
import {ExitFromRight} from '../../../styles/animations/animations';
import {AnimatePresence, motion} from 'framer-motion';

type ProjectPropsType = {
    title: string
    cover: string
    demoUrl: string
    codeUrl: string
    filter?: string
}


export const Projects = () => {
    const [tabs, setTabs] = useState('all')
    const projects: Array<ProjectPropsType> = [
        {
            title: 'Todolist', cover: todoImage,
            demoUrl: 'https://web-serge.github.io/todolist-vanilla-js/',
            codeUrl: 'https://github.com/web-serge/todolist-vanilla-js',
            filter: 'javascript'
        },
        {
            title: 'Audio Player', cover: orange,
            demoUrl: 'https://web-serge.github.io/audio-player-js/',
            codeUrl: 'https://github.com/web-serge/audio-player-js',
            filter: 'javascript'
        },
        {
            title: 'Social Network', cover: socialImage,
            demoUrl: 'https://web-serge.github.io/audio-player-js/',
            codeUrl: 'https://github.com/web-serge/audio-player-js',
            filter: 'react'
        },
    ]

    // меняем значение активного таба
    const changeTab = (value: TabsType) => setTabs(value)
    // копируем массив
    let copyProjects = [...projects]
    // фильтруем массив по значению таба
    if (tabs !== 'all') {
        copyProjects = copyProjects.filter(el => el.filter === tabs)
    }

    return (
        <Section bg={theme.colors.white}>
            <Wrapper>
                <Flex direction='column' align='center'>
                    <Heading as='h3' heading='h3' id='portfolio'>Quality Work</Heading>
                    <Heading as='h2' heading='h2' color={theme.colors.secondary} margin='0 0 3rem'>My Projects</Heading>
                    <TabMenu changeTab={changeTab} tab={tabs}/>
                    <ProjectContainer>
                        <AnimatePresence>
                            {copyProjects.length !== 0 ?
                                copyProjects.map((item, idx: number) => {
                                    return (
                                        <motion.li initial={{opacity: 0}}
                                                   animate={{ opacity: 1}}
                                                   exit={{ opacity: 0}}
                                                   layout={true}
                                                   style={{
                                                       display: 'flex',
                                                       flexDirection: 'column',
                                                       alignItems: 'center',
                                                   }}
                                                   key={item.title}>
                                            <Heading as='h3'>{item.title}</Heading>
                                            <Project cover={item.cover} codeUrl={item.codeUrl} demoUrl={item.demoUrl}
                                                     title={item.title}/>

                                        </motion.li>
                                    )
                                }) : <h2 style={{textAlign: 'center'}}>There is no project in this category</h2>
                            }
                        </AnimatePresence>
                    </ProjectContainer>
                </Flex>
            </Wrapper>
        </Section>
    )
}


const Project = (props: ProjectPropsType) => {
    return (
        <ProjectItem>
            <img src={props.cover} alt={props.title}/>
            <Flex align='center' justify='center' direction='column' gap='1rem'>
                <Button type='a' primaryValue='Demo' secondaryValue='View Demo &#8594;' background={theme.colors.pink}
                        href={props.demoUrl}/>
                <Button type='a' primaryValue='Code' secondaryValue='View Code &#8594;'
                        background={theme.colors.orangeLight} href={props.codeUrl}/>
            </Flex>
        </ProjectItem>
    )
}

type ProjectItemPropsType = {
    background?: string
}
const ProjectItem = styled.div<ProjectItemPropsType>`
  width: 100%;
  transition: .5s;
  position: relative;
  overflow: hidden;
  border-radius: 2rem;
    //animation: ${ExitFromRight} .2s linear;
  border: 2px solid #efefef;

  & img {
    //max-width: 32rem;
    width: 100%;
    object-fit: cover;
    object-position: center;
    transition: .2s;
    aspect-ratio: 4/3;
  }

  & div {
    position: absolute;
    opacity: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 0;
    transition: .3s;
    backdrop-filter: blur(2px);
    padding: .5rem;

    @media ${theme.media.mobile} {
      flex-direction: row;
      justify-content: center;
      align-items: flex-end;
    }

    & a {
      transition: .3s;
      color: ${theme.colors.white};
      font-weight: ${theme.weight.bold};

      @media ${theme.media.mobile} {
        font-size: 2rem;
        min-width: 10rem;
      }
    }

    @media ${theme.media.mobile} {
      height: 100%;
      width: 100%;
      z-index: 2;
      opacity: 1;
      backdrop-filter: none;

      & a {
        width: 80px;
        opacity: .9;
        font-size: 1.4rem;
        height: 3rem;
      }
    }
  }

  @media screen and (any-hover: hover) {
    &:hover div {
      height: 100%;
      width: 100%;
      z-index: 11;
      opacity: 1;
    }
  }
`

const ProjectContainer = styled.ul`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 35rem));
  gap: 1rem;
  width: 100%;
`
