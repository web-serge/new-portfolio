import {Section} from '../../components/styled-html-tag/Section';
import {Flex} from '../../components/Flex';
import {IconName} from '@fortawesome/fontawesome-common-types';
import {Wrapper} from '../../components/Wrapper';
import {Heading} from '../../components/styled-html-tag/Headings';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {icon} from '@fortawesome/fontawesome-svg-core';
import {theme} from '../../styles/Theme';
import styled from 'styled-components';

type SkillsPropsType = {
    name: string
    progress: number
    image: IconName
}
export const Skills = () => {
    const skills: Array<SkillsPropsType> = [
        {name: 'JavaScript', progress: 60, image: 'js'},
        {name: 'HTML', progress: 80, image: 'html5'},
        {name: 'CSS', progress: 80, image: 'css3-alt'},
        {name: 'SASS', progress: 75, image: 'sass'},
        {name: 'React', progress: 20, image: 'react'},
    ]

    return (
        <Section bg={theme.colors.orange}>
            <Wrapper>
                <Flex as='ul' wrap='wrap'>
                    {skills.map(el => {
                        return (
                            <Flex as='li' direction='column' align='center' key={el.name}>

                                    <FontAwesomeIcon  fontSize={'6rem'} color={theme.colors.pink} icon={icon({
                                        iconName: el.image,
                                        prefix: 'fab'})} />
                                    <span color={theme.colors.secondary}>{el.progress}%</span>
                                    <Heading as='h3' heading='h3' color={theme.colors.secondary}>{el.name}</Heading>
                                    {/*<BorderProgress>*/}

                                    {/*    <svg width='120' height='120'>*/}
                                    {/*        <circle stroke='#fff' strokeWidth='4' cx='60' cy='60' r='52' fill='transparent'/>*/}
                                    {/*    </svg>*/}
                                    {/*</BorderProgress>*/}

                            </Flex>
                        )
                    })}
                </Flex>
            </Wrapper>
        </Section>
    )
}

const BorderProgress = styled.div `

  text-align: center;
    & svg {
      
      & circle {
        stroke-dasharray: 50 10;
      }
    }
`