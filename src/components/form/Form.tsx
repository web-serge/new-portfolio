import {Input} from './text-fields/Input';
import {Grid} from '../Grid';
import React from 'react';
import styled from 'styled-components';
import {Button} from '../Buttom';
import {theme} from '../../styles/Theme';
import {Textarea} from './text-fields/Textarea';

export const Form = () => {
    return (
        <StyledFormContainer>
            <Grid as='form' action="#">
                <Input placeholder='First name' required/>
                <Input placeholder='Last name' required/>
                <Input placeholder='Email Adress' type='email' required/>
                <Input placeholder='Subject' required/>
                <Textarea required />
                <Button margin='0' primaryValue='Submit' secondaryValue='Submit &#8594;' background={theme.colors.pink}
                    onClick={() => {

                    }}
                />
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

  & form input:valid,
  & form textarea:valid{
    background: rgba(51, 255, 20, 0.11);
  }

  @media ${theme.media.mobile} {
    padding: 2rem 1rem;
  }
`

