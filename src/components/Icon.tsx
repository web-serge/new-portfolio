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
}
export const Icon = (props: IconPropsType) => {
    const iconLookup: IconLookup = {prefix: props.pref || 'fas', iconName: props.iconTitle}
    const iconDefinition: IconDefinition = findIconDefinition(iconLookup)

    return (
        <Link type={props.type} style={{color: `${props.color}`}}>
            <span style={{fontSize: `${props.size}rem`}}>
                <FontAwesomeIcon icon={iconDefinition}/>
            </span>
            {props.title ?
                <HiddenSpan >
                    <span style={{fontSize: `${props.size}rem`}}><FontAwesomeIcon icon={iconDefinition}/></span> <br/>
                    {props.title}
                </HiddenSpan>
                : null}
        </Link>
    )
}

type LinkPropsType = {
    type?: 'social' | 'navigation'
}


const Link = styled.a<LinkPropsType>`
  position: relative;
  display: block;
  overflow: hidden;
  cursor: pointer;
  line-height: 1;
  width: 100%;

  ${props => props.type === 'navigation' && css`
    padding: 3rem 0;
    border-bottom: 1px solid #e5e5e5;

    & > span:nth-child(1) {
      transition: .3s;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      pointer-events: none;
    }

    &:hover > span:nth-child(1) {
      transform: translate(0, -100px);
    }
    
    & > span + span {
    }
    
    &:hover > span {
      transform: translate(-50% , -10%);
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
      transition: .3s;
      display: inline-block;
    }

    &:hover span {
      transform: rotate(360deg);
    }
  `}
`

const HiddenSpan = styled.span`
  position: absolute;
  transition: .3s;
  width: 100%;
  top: 100%;
  left: 50%;
  transform: translate(-50%, 50%);
  pointer-events: none;
`


// const Link = styled.a<LinkPropsType>`
//   position: relative;
//   line-height: 1;
//   width: 100%;
//   cursor: pointer;
//   display: block;
//   padding: 2.5rem 0;
//   overflow: hidden;
//   text-align: center;
//   border-bottom: 1px solid #e5e5e5;
//
//   &:hover span + span {
//     top: 80%;
//   }
//
//   ${props => props.type === 'social' && css`
//     border-bottom: none;
//     padding: 1rem 0;
//
//     & span{
//       transition: .3s;
//       display: inline-block;
//     }
//     &:hover span {
//       transform: rotate(360deg);
//     }
//   `}
// `
//
// const HiddenSpan = styled.span `
//   position: absolute;
//   transition: .3s;
//   width: 100%;
//   top: 100%;
//   left: 50%;
//   transform: translateX(-50%);
// `