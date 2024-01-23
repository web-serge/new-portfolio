import styled from 'styled-components';
import * as React from 'react';
import {theme} from '../styles/Theme';

type ButtonPropsType = {
    primaryValue: string
    secondaryValue?: string
    type?: any
    background?: string
    margin?: string
    href?: string
    target?: string
    onClick?: () => void
    download?: boolean
}
export const Button = (props: ButtonPropsType) => {
    return (
        <StyledButton as={props.type}
                      background={props.background}
                      margin={props.margin}
                      href={props.href}
                      target={props.target || '_blank'}
                      onClick={props.onClick}
                      download={props.download}>
            <span>{props.primaryValue}</span>
            <span>{props.secondaryValue}</span>
        </StyledButton>
    )
}

type StyledButtonPropsType = {
    background: string
    margin?: string
}

const StyledButton = styled.button<StyledButtonPropsType> `
  color: #ffffff;
  line-height: 1;
  cursor: pointer;
  font-size: 1.6rem;
  text-align: center;
  border-radius: 3rem;
  border: transparent;
  background-color: ${props => props.background || theme.colors.orange};
  box-shadow: 0 8px 20px 0 rgba(255, 196, 85, 0.3);
  margin: ${props => props.margin};
  
  display: inline-flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  
  position: relative;
  overflow: hidden;
  min-width: 20rem;
  height: 6rem;
  
  // стилилизуем оба span
  & span {
    transform: translate(-50%, -50%);
    white-space: nowrap;
    position: absolute;
    font-weight: 600;
    transition: .5s;
    left: 50%;
    top: 50%;
  }

  // стилилизуем второй span
  & span + span {
    top: 120%;
    opacity: 0;
  }
  
  // hover для первого span
  &:hover > span {
    top: -20%;
    opacity: 0;
  }
  
  //// hover для второго span
  &:hover span + span {
    top: 50%;
    opacity: 1;
  }

  @media screen and (max-width: 437px) {
      width: 100%;
  }
`