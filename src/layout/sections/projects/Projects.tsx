import {Section} from '../../../components/styled-html-tag/Section';
import {Wrapper} from '../../../components/Wrapper';
import {Flex} from '../../../components/Flex';
import {Heading} from '../../../components/styled-html-tag/Headings';
import {theme} from '../../../styles/Theme';
import {TabMenu} from './TabMenu';
import todoImage from '../../../assets/images/to-do-list-apps.png'
import socialImage from '../../../assets/images/social-network.jpg'
import styled from 'styled-components';

type ProjectPropsType = {
    title?: string
    cover: string
    demoUrl: string
    codeUrl: string
}
export const Projects = () => {

    const projects: Array<ProjectPropsType> = [
        {title: 'Todolist', cover: todoImage, demoUrl: 'https://web-serge.github.io/todolist-vanilla-js/', codeUrl: 'https://github.com/web-serge/todolist-vanilla-js'},
        {title: 'Audio Player', cover: 'https://149842033.v2.pressablecdn.com/wp-content/uploads/2019/01/Audio-Player-By-Matt-Stvartak-1000x750.jpg', demoUrl: 'https://web-serge.github.io/audio-player-js/', codeUrl: 'https://github.com/web-serge/audio-player-js'},
        {title: 'Social Network', cover: socialImage, demoUrl: 'https://web-serge.github.io/audio-player-js/', codeUrl: 'https://github.com/web-serge/audio-player-js'},
    ]

    return (
        <Section bg={theme.colors.white}>
            <Wrapper>
                <Flex direction='column' align='center'>
                    <Heading as='h3' heading='h3'>Quality Work</Heading>
                    <Heading as='h2' heading='h2' color={theme.colors.secondary} margin='0 0 3rem'>My Projects</Heading>
                    <Flex as='ul' gap='2rem' margin='0 0 2.5rem'>
                        <TabMenu />
                    </Flex>
                    <Flex gap='2rem'>
                        {projects.map(item => {
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
            <Flex align='center' justify='space-around' gap='1rem'>
                <a href={props.demoUrl} target='_blank'>Demo <span>&#8594;</span></a>
                <a href={props.codeUrl} target='_blank'>Code <span>&#8594;</span></a>
            </Flex>
        </ProjectItem>
    )
}

type ProjectItemPropsType = {
    background?: string
}
const ProjectItem = styled.div<ProjectItemPropsType> `
  width: 35rem;
  height: 35rem;
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
      color: ${theme.colors.dark};
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