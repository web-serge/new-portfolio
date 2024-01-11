import styled from 'styled-components';
import {theme} from '../../styles/Theme';
import React from 'react';
import {Icon} from '../Icon';
import {faPhoneVolume} from '@fortawesome/free-solid-svg-icons';

export const Sidebar = () => {
    return (
        <Aside>
            <h2>Sidebar</h2>
            <h3>avatar</h3>
            <h3>nav list</h3>
            <ul>
                <li>
                    <Icon iconTitle='home' title={'Home'} color={'red'} size={50}/>
                </li>
                <li>
                    <Icon iconTitle='phone-volume' title={'Phone'} color={'gold'} size={50}/>
                </li>
                <li>
                    <Icon iconTitle='briefcase' title={'portfolio'} color={'green'} size={50}/>
                </li>
                <li>
                    <Icon iconTitle='quote-left' title={'Testimonial'} color={'blue'} size={50}/>
                </li>
                <li>
                    <Icon pref={'fab'} iconTitle='linkedin-in' title={'email'} color={'blueviolet'} size={50}/>
                </li>
            </ul>





























            <span
                style={{transform: 'rotate(-90deg)', display: 'inline-block', padding: '15px 10px'}}>
                Follow Us
            </span>

            <h3>social icon</h3>
            <ul>
                <li><a href="">icon 1</a></li>
                <li><a href="">icon 2</a></li>
                <li><a href="">icon 3</a></li>
                <li><a href="">icon 4</a></li>
                <li><a href="">icon 5</a></li>
            </ul>
        </Aside>
    )
}

const Aside = styled.aside`
  position: fixed;
  background-color: ${theme.colors.white};
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
  left: 0;
  //width: 12rem;
  padding: 0 5px;
  height: 100%;
  z-index: 2;
  overflow-y: auto;
  overflow-x: hidden;
  transition: all 0.3s;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`