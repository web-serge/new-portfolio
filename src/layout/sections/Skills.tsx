import {Section} from '../../components/styled-html-tag/Section';
import {Flex} from '../../components/Flex';
import {IconName} from '@fortawesome/fontawesome-common-types';
import {Wrapper} from '../../components/Wrapper';
import {Heading} from '../../components/styled-html-tag/Headings';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {icon} from '@fortawesome/fontawesome-svg-core';
import {theme} from '../../styles/Theme';
import styled from 'styled-components';
import {Fade} from 'react-awesome-reveal';

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
        {name: 'Figma', progress: 20, fontAwesome: 'figma'},
    ]

    return (
        <Section bg={theme.colors.orange}>
            <Wrapper>
                <SkillsList>
                        {skills.map( (el, index) => {
                            return (
                                <Fade direction={index > 2 ? 'right' : 'left'} delay={1} key={el.name}>
                                    <li key={el.name}>
                                        <FontAwesomeIcon fontSize={'6rem'} icon={icon({
                                            iconName: el.fontAwesome,
                                            prefix: 'fab'
                                        })}/>
                                        {/*<small>{el.progress}%</small>*/}
                                        <h4>{el.name}</h4>
                                    </li>
                                </Fade>
                            )
                        })}

                </SkillsList>
            </Wrapper>
        </Section>
    )
}

const SkillsList = styled.ul `
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;


  @media ${theme.media.mobile} {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
  }
  
  & li {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;

    @media ${theme.media.mobile} {
      & svg {
        font-size: 5rem;
      }
    }
  }
`
