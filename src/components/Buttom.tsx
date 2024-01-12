import styled, {StyledComponentProps} from 'styled-components';
import * as React from 'react';

type ButtonPropsType = {
    primaryValue: string
    secondaryValue?: string
    type?: any
    background?: string
}
export const Button = (props: ButtonPropsType) => {
    return (
        <StyledButton as={props.type} background={props.background}>
            <span>{props.primaryValue}</span>
            <span>{props.secondaryValue}</span>
        </StyledButton>
    )
}

type StyledButtonPropsType = {
    background: string
}

const StyledButton = styled.button<StyledButtonPropsType> `
  color: #ffffff;
  line-height: 1;
  cursor: pointer;
  font-size: 16px;
  text-align: center;
  border-radius: 3rem;
  background-color: ${props => props.background || 'rgb(252, 194, 85)'};
  box-shadow: 0 8px 20px 0 rgba(255, 196, 85, 0.3);
  
  display: inline-flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  
  position: relative;
  overflow: hidden;
  min-width: 200px;
  height: 60px;
  
  // отступы для смежных кнопок
  & + & {
    margin-left: 2rem;
  }
  
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
`