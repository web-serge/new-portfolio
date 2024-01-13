import {Wrapper} from '../../components/Wrapper';
import {Heading} from '../../components/styled-html-tag/Headings';
import {Flex} from '../../components/Flex';
import {theme} from '../../styles/Theme';
import {Form} from '../../components/form/Form';
import React from 'react';
import {Section} from '../../components/styled-html-tag/Section';

export const Contacts = () => {
    return (
        <Section>
            <Wrapper>
                <Flex width='100%' align='center' direction='column'>
                    <Heading as='h3' heading='h3'>Contact Me</Heading>
                    <Heading as='h2' heading='h2' color={theme.colors.secondary}>Get In Touch</Heading>
                    <Form />
                </Flex>
            </Wrapper>
        </Section>
    )
}