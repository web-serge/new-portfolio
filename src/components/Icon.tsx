import {icon, library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {IconName} from '@fortawesome/fontawesome-common-types';
import {fab} from '@fortawesome/free-brands-svg-icons';
import styled, {css} from 'styled-components';

library.add(fas, fab)

export type IconPropsType = {
    title?: string
    color: string
    size?: number
    type?: 'social' | 'navigation'
    href?: string
    disabled?: boolean
    fontAwesome: IconName
    prefix: 'fas' | 'fab'
}
export const Icon = (props: IconPropsType) => {
    return (
        <Link href={props.href}
              type={props.type}
              style={{color: `${props.color}`}}
              background={props.color}
              disabled={props.disabled}>
            <span style={{fontSize: `${props.size}rem`}}>
                <FontAwesomeIcon icon={icon({iconName: props.fontAwesome, prefix: props.prefix})}/>
            </span>

            {props.type === 'navigation' ?
                <HiddenSpan>
                    <FontAwesomeIcon icon={icon({iconName: props.fontAwesome, prefix: props.prefix})}/>
                </HiddenSpan>
                : null }

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
  line-height: 1.5;
  width: 100%;
  display: block;

  ${props => props.type === 'navigation' && css`
    & > span:nth-child(1) {
      display: inline-block;
      pointer-events: none;
      position: relative;
      transition: all .3s;
    }

    & > span:nth-child(2) {
      position: absolute;
      top: 100%;
      transform: translate3d(0,0,0);
      left: 0;
      right: 0;
      margin: 0 auto;
      display: inline-block;
    }

    // hovers effects
    &:hover > span:nth-child(1) {
      transform: translateY(-100%);
    } 
    
    &:hover > span:nth-child(2) {
      top: 0;
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
  top: 3rem;
  left: 50%;
  transform: translate(-50%, 50%);
  pointer-events: none;

  & svg {
    font-size: 2.5rem;
  }
`