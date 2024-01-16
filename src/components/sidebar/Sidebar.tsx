import styled from 'styled-components';
import {theme} from '../../styles/Theme';
import React from 'react';
import {Icon} from '../Icon';
import photo from '../../assets/images/photo.jpg'

export const Sidebar = () => {
    return (
        <Aside>
            <a href="#welcome"><img src={photo} alt='randomPhoto'/></a>
            <ul>
                <li>
                    <Icon href='#about' type='navigation' iconTitle='address-card' title={'About'} color={theme.colors.pink} size={2.5}/>
                </li>
                <li>
                    <Icon href='#portfolio' type='navigation' iconTitle='briefcase' title={'Portfolio'} color={'#20cae5'} size={2.5}/>
                </li>
                <li>
                    <Icon disabled={true} href='#'
                          type='navigation'
                          iconTitle='quote-left'
                          title={'Testimonial'}
                          color={'grey'}
                          size={2.5}/>
                </li>
                <li>
                    <Icon href='#contact' type='navigation' iconTitle='phone-volume' title={'Contact'} color={theme.colors.phone} size={2.5}/>
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
                    <Icon href='https://wa.me/+79996243090' type='social' pref={'fab'} iconTitle='whatsapp' color={'#25d366'} size={2}/>
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
  padding: 10px;
  height: 100%;
  z-index: 99999;
  overflow-y: auto;
  overflow-x: hidden;
  transition: all 0.3s;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  & img {
    width: 9rem;
    border-radius: 50%;
    object-fit: cover;
    transform: scale(-1,1);
  }
  
  & > ul > li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  @media ${theme.media.mobile} {
    width: 0;
    padding: 0;
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