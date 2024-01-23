import {Input} from './text-fields/Input';
import {Grid} from '../Grid';
import React, {ElementRef, useRef} from 'react';
import styled from 'styled-components';
import {Button} from '../Buttom';
import {theme} from '../../styles/Theme';
import {Textarea} from './text-fields/Textarea';
import emailjs from '@emailjs/browser';

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
        };

    return (
        <StyledFormContainer>
            <Grid as='form' onSubmit={sendEmail} ref={form}>
                <Input placeholder='First name' required name={'user_name'}/>
                <Input placeholder='Last name' required name={'last_name'}/>
                <Input placeholder='Email Adress' type='email' required name={'user_email'}/>
                <Input placeholder='Subject' required name={'subject'}/>
                <Textarea required name={'message'}/>
                {/*<Button type={'submit'} margin='0' primaryValue='Submit' secondaryValue='Submit &#8594;' background={theme.colors.pink}*/}
                <SInput type="submit" value={'Send 📧'} background={theme.colors.pink}/>
                {/*/>*/}
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

const SInput = styled.input<StyledButtonPropsType> `
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