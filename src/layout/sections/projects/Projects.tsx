import {Section} from '../../../components/styled-html-tag/Section';
import {Wrapper} from '../../../components/Wrapper';
import {Flex} from '../../../components/Flex';
import {Heading} from '../../../components/styled-html-tag/Headings';
import {theme} from '../../../styles/Theme';
import {TabMenu, TabsType} from './TabMenu';
import todoImage from '../../../assets/images/to-do-list-apps.png'
import socialImage from '../../../assets/images/social-network.jpg'
import styled from 'styled-components';
import {useState} from 'react';
import {Button} from '../../../components/Buttom';
import {Icon} from '../../../components/Icon';

type ProjectPropsType = {
    title?: string
    cover: string
    demoUrl: string
    codeUrl: string
    filter?: string
}


export const Projects = () => {
    const [tabs, setTabs] = useState('all')
    const projects: Array<ProjectPropsType> = [
        {title: 'Todolist',
            cover: todoImage, demoUrl: 'https://web-serge.github.io/todolist-vanilla-js/',
            codeUrl: 'https://github.com/web-serge/todolist-vanilla-js', filter: 'javascript'},
        {title: 'Audio Player', cover: 'https://149842033.v2.pressablecdn.com/wp-content/uploads/2019/01/Audio-Player-By-Matt-Stvartak-1000x750.jpg',
            demoUrl: 'https://web-serge.github.io/audio-player-js/',
            codeUrl: 'https://github.com/web-serge/audio-player-js', filter: 'landing'},
        {title: 'Social Network', cover: socialImage, demoUrl: 'https://web-serge.github.io/audio-player-js/',
            codeUrl: 'https://github.com/web-serge/audio-player-js', filter: 'react'},
    ]

    // меняем значение активного таба
    const changeTab = (value: TabsType) => setTabs(value)

    // крпируем массив
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
                    <Flex as='ul' gap='2rem' margin='0 0 2.5rem' align='center' justify='center'>
                        <TabMenu changeTab={changeTab} tab={tabs}/>
                    </Flex>
                    <Flex gap='2rem' wrap='wrap'>
                        {copyProjects.map(item => {
                            return <Project cover={item.cover} codeUrl={item.codeUrl} demoUrl={item.demoUrl}/>
                        })}
                    </Flex>
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
                <Button type='a' primaryValue='Demo' secondaryValue='View Demo &#8594;' background={theme.colors.pink} href={props.demoUrl}/>
                <Button type='a' primaryValue='Code' secondaryValue='View Code &#8594;' background={theme.colors.orangeLight} href={props.demoUrl}/>
            </Flex>
        </ProjectItem>
    )
}

type ProjectItemPropsType = {
    background?: string
}
const ProjectItem = styled.div<ProjectItemPropsType> `
  max-width: 35rem;
  min-width: 25rem;
  height: 35rem;
  width: 100%;
  transition: .5s;
  position: relative;
  overflow: hidden;
  border-radius: 2rem;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  & div {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 0;
    transition: .3s;
    backdrop-filter:blur(3px);
    padding: .5rem;
    
    & a {
      opacity: 0;
      transition: .3s;
      color: ${theme.colors.white};
      font-weight: ${theme.weight.bold};
      font-size: 2rem;
    }
  }

  &:hover div {
    height: 100%;
    width: 100%;
    z-index: 11;
    
    & a {
      opacity: 1;
    }
  }
`