import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {IconLookup, IconDefinition, findIconDefinition} from '@fortawesome/fontawesome-svg-core'
import {IconName} from '@fortawesome/fontawesome-common-types';
import {fab} from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';

library.add(fas, fab)

type IconPropsType = {
    title: string
    iconTitle: IconName
    color: string
    size: number
    pref?: 'fas' | 'fab'
}
export const Icon = (props: IconPropsType) => {

    const iconLookup: IconLookup = { prefix: props.pref || 'fas', iconName: props.iconTitle }
    const iconDefinition: IconDefinition = findIconDefinition(iconLookup)

    return (
        <Link style={{color: `${props.color}`}}>
            <span style={{fontSize: `${props.size}px`}}>
                <FontAwesomeIcon icon={iconDefinition} />
            </span>
            <span>{props.title}</span>
        </Link>
    )
}

const Link = styled.a `
  cursor: pointer;
  transition: all 3s;
  display: inline-block;
  overflow: hidden;
  
  & span{
    transition: .5s;
    display: inline-block;
  }

  & span + span {
    display: block;
    transform: scale(0);
  }
  
  &:hover span + span {
    transform: scale(1);
  }
`