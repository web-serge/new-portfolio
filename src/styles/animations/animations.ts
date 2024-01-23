import {keyframes} from 'styled-components';

export const Mover = keyframes `
  0% {transform: translateY(0)}
  50% {transform: translateY(-2rem)}
  100% {transform: translateY(0)}
`

export const Moveup = keyframes `
  0% {
    background-position: left 0 top 0;
  }
  25% {
    background-position: left 150px top -150px;;
  }
  50% {
    background-position: left 300px top -300px;
  }
  75% {
    background-position: left 150px top -150px;
  }
  100% {
    background-position: left 0 top 0;
  }
`

export const ExitFromRight = keyframes `
  0% {
    transform: translateX(90%) scale(0);
    opacity: 0;
  }  
  100% {
    transform: translateX(0) scale(1);
    opacity: 1;
  }
`