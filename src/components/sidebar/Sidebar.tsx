import styled from 'styled-components';
import {theme} from '../../styles/Theme';
import React, {useState} from 'react';
import {Icon, IconPropsType} from '../Icon';
import photo from '../../assets/images/photo.jpg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';

export const Sidebar = () => {
    const navigationItems: Array<IconPropsType> = [
        {
            title: 'About',
            fontAwesome: 'address-card',
            prefix: 'fas',
            type: 'navigation',
            href: '#about',
            color: theme.colors.pink
        },
        {
            title: 'Portfolio',
            fontAwesome: 'briefcase',
            prefix: 'fas',
            type: 'navigation',
            href: '#portfolio',
            color: '#20cae5'
        },
        {title: 'Testimonial', fontAwesome: 'quote-left', prefix: 'fas', type: 'navigation', href: '#', color: 'grey'},
        {
            title: 'Contact',
            fontAwesome: 'phone-volume',
            prefix: 'fas',
            type: 'navigation',
            href: '#contact',
            color: theme.colors.phone
        }
    ]
    const socialItems: Array<IconPropsType> = [
        {title: 'facebook', fontAwesome: 'facebook', prefix: 'fab', type: 'social', href: '#about', color: '#3b5999'},
        {
            title: 'linkedin',
            fontAwesome: 'linkedin-in',
            prefix: 'fab',
            type: 'social',
            href: '#portfolio',
            color: '#0077b5'
        },
        {title: 'whatsapp', fontAwesome: 'whatsapp', prefix: 'fab', type: 'social', href: '#', color: '#25d366'},
        {title: 'twitter', fontAwesome: 'twitter', prefix: 'fab', type: 'social', href: '#contact', color: '#55acee'},
        {
            title: 'instagram',
            fontAwesome: 'instagram',
            prefix: 'fab',
            type: 'social',
            href: '#contact',
            color: '#e4405f'
        }
    ]

    const [mobileMenu, setMobileMenu] = useState<boolean>(false);

    function toggleMobileMenu() {
        return mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
    }

    return (
        <>
            <Aside className={mobileMenu ? 'active' : ''}>
                <a href="#welcome"><img src={photo} alt='randomPhoto'/></a>
                <ul>
                    {navigationItems.map(item => {
                        return (
                            <NavigationItem key={item.title} onClick={toggleMobileMenu}>
                                <Icon color={item.color}
                                      fontAwesome={item.fontAwesome} prefix={item.prefix}
                                      type={item.type}
                                      title={item.title}
                                      size={2.5}
                                      href={item.href}/>
                                <small style={{color: `${item.color}`}}>{item.title}</small>
                            </NavigationItem>
                        )
                    })}
                </ul>
                <FollowUS>Follow Us</FollowUS>
                <ul>
                    {socialItems.map(item => {
                        return (
                            <li key={item.title}>
                                <Icon color={item.color}
                                      fontAwesome={item.fontAwesome} prefix={item.prefix}
                                      type={item.type}
                                      size={2}
                                />
                            </li>
                        )
                    })}
                </ul>
            </Aside>
            <button onClick={toggleMobileMenu}><FontAwesomeIcon icon={faBars}/></button>
        </>
    )
}

const Aside = styled.aside`
  position: fixed;
  background-color: ${theme.colors.white};
  box-shadow: 0 0 2rem rgba(0, 0, 0, .1);
  left: 0;
  top: 0;
  bottom: 0;
  width: 12rem;
  padding: 1rem;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  transition: all .3s;
  text-align: center;
  z-index: 10;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  & img {
    width: 9rem;
    object-fit: cover;
    border-radius: 50%;
    transform: scale(-1, 1);
  }

  & + button {
    position: fixed;
    right: 1rem;
    top: 1rem;
    border: none;
    font-size: 3rem;
    background: transparent;
    cursor: pointer;
    z-index: 10;

    @media ${theme.media.tablet} {
      display: none;
    }
  }

  @media ${theme.media.mobile} {
    width: 0;
    padding: 0;
    opacity: 0;
    inset: 0;

    &.active {
      height: 100%;
      width: 12rem;
      padding: 1rem;
      opacity: 1;
    }
`
const NavigationItem = styled.li`
  padding: 2.5rem 0;
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid #e5e5e5;

  & small {
    position: absolute;
    bottom: -1rem;
    margin: 0 auto;
    line-height: 1.2;
    left: 0;
    right: 0;
    color: #ff5352;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s;
    font-size: 1.6rem;
    pointer-events: none;
  }

  & a:hover + small {
    bottom: 10px;
    opacity: 1;
    visibility: visible;
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

  & + small {
    & small {
      position: absolute;
      right: 1rem;
      top: 1rem;
      cursor: pointer;
      font-size: 3rem;

      & svg {
        animation: none;
      }
    }
  }
`