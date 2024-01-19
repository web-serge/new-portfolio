import {Section} from '../../components/styled-html-tag/Section';
import {Flex} from '../../components/Flex';
import {IconName} from '@fortawesome/fontawesome-common-types';
import {Wrapper} from '../../components/Wrapper';
import {Heading} from '../../components/styled-html-tag/Headings';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {icon} from '@fortawesome/fontawesome-svg-core';
import {theme} from '../../styles/Theme';

type SkillsPropsType = {
    name: string
    progress?: number
    fontAwesome: IconName
}
export const Skills = () => {
    const skills: Array<SkillsPropsType> = [
        {name: 'JavaScript', progress: 60, fontAwesome: 'js'},
        {name: 'HTML', progress: 80, fontAwesome: 'html5'},
        {name: 'CSS', progress: 80, fontAwesome: 'css3-alt'},
        {name: 'SASS', progress: 75, fontAwesome: 'sass'},
        {name: 'React', progress: 20, fontAwesome: 'react'},
    ]

    return (
        <Section bg={theme.colors.orange}>
            <Wrapper>
                <Flex as='ul' wrap='wrap' gap='1.5rem' align='center' justify='center'>
                    {skills.map(el => {
                        return (
                            <Flex key={el.name} as='li' direction='column' align='center' flex='1'>
                                <FontAwesomeIcon fontSize={'6rem'} icon={icon({
                                    iconName: el.fontAwesome,
                                    prefix: 'fab'
                                })}/>
                                {/*<span style={{color: `${theme.colors.white}`}}>{el.progress}%</span>*/}
                                <Heading as='h3' heading='h3'>{el.name}</Heading>
                            </Flex>
                        )
                    })}
                </Flex>
            </Wrapper>
        </Section>
    )
}
