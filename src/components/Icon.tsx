import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {IconLookup, IconDefinition, findIconDefinition} from '@fortawesome/fontawesome-svg-core'
import {IconName} from '@fortawesome/fontawesome-common-types';
import {fab} from '@fortawesome/free-brands-svg-icons';
import styled, {css} from 'styled-components';

library.add(fas, fab)

type IconPropsType = {
    title?: string
    iconTitle: IconName
    color: string
    size?: number
    pref?: 'fas' | 'fab'
    type?: 'social' | 'navigation'
    href?: string
    disabled?: boolean
}
export const Icon = (props: IconPropsType) => {
    const iconLookup: IconLookup = {prefix: props.pref || 'fas', iconName: props.iconTitle}
    const iconDefinition: IconDefinition = findIconDefinition(iconLookup)

    return (
        <Link href={props.href}
              type={props.type}
              style={{color: `${props.color}`}}
              background={props.color}
              disabled={props.disabled}>
            <span style={{fontSize: `${props.size}rem`}}>
                <FontAwesomeIcon icon={iconDefinition}/>
            </span>
            {!!props.title ? <HiddenSpan>
                    <span style={{fontSize: `${props.size}rem`}}>
                        <FontAwesomeIcon icon={iconDefinition}/>
                    </span>
                <br/>
                {props.title}
            </HiddenSpan> : null}
        </Link>
    )
}

type LinkPropsType = {
    type?: 'social' | 'navigation'
    background: string
    disabled?: boolean
}


const Link = styled.a<LinkPropsType>`
  position: relative;
  overflow: hidden;
  cursor: pointer;
  line-height: 1;
  width: 100%;

  &:hover::after {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    background-color: ${props => props.background || 'grey'};
    opacity: 30%;
  }

  ${props => props.type === 'navigation' && css`
    padding: 2.5rem 0;
    border-bottom: 1px solid #e5e5e5;

    & > span:nth-child(1) {
      transition: .2s;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      pointer-events: none;
    }

    // hovers effects

    &:hover > span:nth-child(1) {
      transform: translate(-50%, -5rem);
    }

    &:hover > span {
      transform: translate(-50%, 0);
    }

    &:hover > span + span {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  `
  }


  ${props => props.type === 'social' && css`
    padding: 1rem 0;

    & span {
      transition: .5s;
      display: inline-block;
    }

    &:hover span {
      transform: rotate(360deg);
    }
  `}

  ${props => props.disabled && css`
    cursor: not-allowed;
    color: grey;
  `}
`

const HiddenSpan = styled.span`
  position: absolute;
  transition: .2s;
  width: 100%;
  top: 3rem;
  left: 50%;
  transform: translate(-50%, 50%);
  pointer-events: none;
`