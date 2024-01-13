import {Input} from './text-fields/Input';
import {Grid} from '../Grid';
import React from 'react';
import styled from 'styled-components';
import {Button} from '../Buttom';
import {theme} from '../../styles/Theme';
import {Textarea} from './text-fields/Textarea';

export const Form = () => {
    return (
        <StyledForm as='form' action="#">
            <Grid>
                <Input placeholder='First name' required/>
                <Input placeholder='Last name' required/>
                <Input placeholder='Email Adress' type='email' required/>
                <Input placeholder='Subject' required/>
            </Grid>
            <Textarea required/>
            <Button margin='5rem 0 0 0' primaryValue='Submit' secondaryValue='Submit' background={theme.colors.pink}/>
        </StyledForm>
    )
}

const StyledForm = styled.form`
  max-width: 77rem;
  padding: 5rem;
  width: 100%;
  background-color: ${theme.colors.white};
  box-shadow: 0 0 77px -4px ${theme.colors.boxShadowForm};
`

