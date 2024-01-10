import {keyframes} from 'styled-components';

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