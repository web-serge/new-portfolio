import {Input} from './text-fields/Input';
import {Grid} from '../Grid';
import React, {ElementRef, useRef} from 'react';
import styled from 'styled-components';
import {theme} from '../../styles/Theme';
import {Textarea} from './text-fields/Textarea';
import emailjs from '@emailjs/browser';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';

export const Form = () => {
    const form = useRef<ElementRef<'form'>>(null);
    const sendEmail = (e: any) => {
        e.preventDefault();
        if (!form.current) return
        emailjs.sendForm('service_waovfet', 'template_iio3jpm', form.current, '0JnnOcAZwZanj7KRz')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };

    return (
        <StyledFormContainer>
            <Grid as='form' onSubmit={sendEmail} ref={form}>
                <Input placeholder='First name' required name={'user_name'}/>
                <Input placeholder='Last name' required name={'last_name'}/>
                <Input placeholder='Email Adress' type='email' required name={'user_email'}/>
                <Input placeholder='Subject' required name={'subject'}/>
                <Textarea required name={'message'}/>
                <Submit type="submit" background={theme.colors.pink}>
                    <span>Send</span>
                    <FontAwesomeIcon icon={faPaperPlane}/>
                </Submit>
            </Grid>
        </StyledFormContainer>
    )
}

const StyledFormContainer = styled.div`
  max-width: 77rem;
  padding: 5rem;
  width: 100%;
  background-color: ${theme.colors.white};
  box-shadow: 0 0 77px -4px ${theme.colors.boxShadowForm};
  margin-bottom: 4rem;

  //& form input:valid,
  //& form textarea:valid{
  //  background: rgba(51, 255, 20, 0.11);
  //}

  @media ${theme.media.mobile} {
    padding: 2rem 1rem;
  }
`

type StyledButtonPropsType = {
    background: string
    margin?: string
}

const Submit = styled.button<StyledButtonPropsType>`
  color: #ffffff;
  line-height: 1;
  cursor: pointer;
  font-size: 1.6rem;
  text-align: center;
  border-radius: 3rem;
  border: transparent;
  background-color: ${props => props.background || theme.colors.orange};

  min-width: 20rem;
  height: 6rem;
  transition: .3s;

  & span {
    margin-right: 1rem;
  }
  
  & svg {
    transition: .3s;
  }

  &:active, &:focus-visible {
    transform: scale(0.95);
    outline: none;
  }

  &:hover, &:focus-visible {
    & svg {
      transform: translateX(10px);
    }
  }

  @media screen and (max-width: 437px) {
    width: 100%;
  }
`