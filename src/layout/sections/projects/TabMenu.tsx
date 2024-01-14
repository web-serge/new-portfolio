import {theme} from '../../../styles/Theme';
import styled, {css} from 'styled-components';
import {useState} from 'react';

type StateType = {
    title: string
    active: boolean
}
export const TabMenu = () => {
    let [state, setState] = useState<Array<StateType>>([
        {title: 'ALL', active: true},
        {title: 'JavaScript', active: false},
        {title: 'React', active: false},
        {title: 'TypeScript', active: false},
        {title: 'HTML/CSS', active: false},
    ])

    return (
        <>
            {state.map(item => {
                return (
                    <li><Link active={item.active}
                              href="#"
                              id={item.title}
                              key={item.title}

                              // change active link
                              onClick={ (e) => {
                                  e.preventDefault()
                                  let copy = [...state];
                                  copy.map(el => el.title !== item.title ? el.active = false : el.active = true);
                                  console.log(copy)
                                  setState(copy);
                              }}

                    >{item.title}</Link></li>
                )
            })}
        </>
    )
}


type LinkPropsType = {
    active?: boolean
}

const Link = styled.a<LinkPropsType> `
  color: ${theme.colors.link};
  font-weight: ${theme.weight.semiBold};
  text-transform: uppercase;
  position: relative;
  transition: all .3s;

  &::before {
    content: '';
    position: absolute;
    width: 0;
    height: .2rem;
    background-color: ${theme.colors.pink};
    bottom: -20%;
    left: 50%;
    transform: translateX(-50%);
    transition: .3s;
  }
  
  ${props => props.active && css `
    color: ${theme.colors.pink};
    
    &::before {
      width: 100%;
    }
  `}
  
  &:hover {
  color: ${theme.colors.pink};
    opacity: .8;
  }
`