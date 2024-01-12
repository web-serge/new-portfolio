import styled from 'styled-components';
import {theme} from '../../styles/Theme';
import React from 'react';
import {Icon} from '../Icon';
import randomPhoto from '../../assets/images/random-photo.jpg'
import {Button} from '../Buttom';

export const Sidebar = () => {
    return (
        <Aside>
            <img src={randomPhoto} alt='randomPhoto'/>
            <ul>
                <li>
                    <Icon type='navigation' iconTitle='address-card' title={'About'} color={'#ff5353'} size={2.5}/>
                </li>
                <li>
                    <Icon type='navigation' iconTitle='briefcase' title={'Portfolio'} color={'#20cae5'} size={2.5}/>
                </li>
                <li>
                    <Icon type='navigation' iconTitle='quote-left' title={'Testimonial'} color={'#ffc455'} size={2.5}/>
                </li>
                <li>
                    <Icon type='navigation' iconTitle='phone-volume' title={'Contact'} color={'#ff754a'} size={2.5}/>
                </li>
            </ul>
            <FollowUS>Follow Us</FollowUS>
            <ul>
                <li>
                    <Icon type='social' pref={'fab'} iconTitle='facebook' color={'#3b5999'} size={2}/>
                </li>
                <li>
                    <Icon type='social' pref={'fab'} iconTitle='linkedin-in' color={'#0077b5'} size={2}/>
                </li>
                <li>
                    <Icon type='social' pref={'fab'} iconTitle='whatsapp' color={'#25d366'} size={2}/>
                </li>
                <li>
                    <Icon type='social' pref={'fab'} iconTitle='twitter' color={'#55acee'} size={2}/>
                </li>
                <li>
                    <Icon type='social' pref={'fab'} iconTitle='instagram' color={'#e4405f'} size={2}/>
                </li>
            </ul>
        </Aside>
    )
}

const Aside = styled.aside`
  position: fixed;
  background-color: ${theme.colors.white};
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
  left: 0;
  width: 12rem;
  padding: 1rem;
  height: 100%;
  z-index: 99999;
  overflow-y: auto;
  overflow-x: hidden;
  transition: all 0.3s;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;

  & img {
    width: 9rem;
    border-radius: 50%;
    transform: scale(-1, 1);
    object-fit: cover;
  }
  
  & > ul {
    width: 100%;
  }
  
  & > ul > li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`

const FollowUS = styled.span`
  color: #222222;
  font-weight: 700;
  display: block;
  transform: rotate(180deg);
  writing-mode: vertical-lr;
  margin-bottom: 8.4rem;
  position: relative;
  padding: 5px 0;
  white-space: nowrap;

  &::before {
    content: '';
    position: absolute;
    width: 1px;
    height: 64px;
    background-color: #e8e8e8;

    bottom: 8rem;
    left: 0;
    right: 0;
    margin: 0 auto;
    transform: translateY(-50%);
  }
`