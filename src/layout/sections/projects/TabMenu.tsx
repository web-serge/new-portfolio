import {theme} from '../../../styles/Theme';
import styled, {css} from 'styled-components';

export type TabsType = 'all' | 'javascript' | 'react' | 'landing'

type StateType = {
    title: string
    tabsValue: TabsType
}

type TabMenuPropsType = {
    changeTab: (value: TabsType) => void
    tab: string
}
export const TabMenu = (props: TabMenuPropsType) => {
    let tabsList: Array<StateType> = [
        {title: 'ALL', tabsValue: 'all'},
        {title: 'JavaScript', tabsValue: 'javascript'},
        {title: 'React', tabsValue: 'react'},
        {title: 'Landing Page', tabsValue: 'landing'},
    ]

    return (
        <TabsContainer>
            {tabsList.map(tab => {
                return (
                    <li key={tab.title}>
                        <Tab id={tab.title} key={tab.title}
                              active={props.tab === tab.tabsValue}
                              onClick={(e) => {
                                  e.preventDefault()
                                  props.changeTab(tab.tabsValue)
                              }}>
                            {tab.title}</Tab>
                    </li>
                )
            })}
        </TabsContainer>
    )
}


type LinkPropsType = {
    active?: boolean
}

const TabsContainer = styled.ul `
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
`
const Tab = styled.button<LinkPropsType>`
  color: #556d91;
  font-weight: ${theme.weight.semiBold};
  text-transform: uppercase;
  position: relative;
  transition: all .3s;
  white-space: nowrap;
  background: none;
  border: none;
  cursor: pointer;

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

  ${props => props.active && css`
    color: ${theme.colors.pink};

    &::before {
      width: 100%;
    }
  `}
  &:hover {
    color: ${theme.colors.pink};
    opacity: .8;
  }

  &:focus-visible {
    outline: 1px solid #ccc8c8;
  }

  @media screen and (max-width: 420px) {
    font-size: 1.2rem;
  }
`