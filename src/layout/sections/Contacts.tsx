import {Wrapper} from '../../components/Wrapper';
import {Heading} from '../../components/styled-html-tag/Headings';
import {Flex} from '../../components/Flex';
import {theme} from '../../styles/Theme';
import {Form} from '../../components/form/Form';
import React from 'react';
import {Section} from '../../components/styled-html-tag/Section';
import {Icon} from '../../components/Icon';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Span} from '../../components/styled-html-tag/Span';

export const Contacts = () => {
    return (
        <Section>
            <Wrapper>
                <Flex width='100%' align='center' direction='column'>
                    <Heading as='h3' heading='h3'>Contact Me</Heading>
                    <Heading as='h2' heading='h2' color={theme.colors.secondary}>Get In Touch</Heading>
                    <Form/>
                    <Flex justify='space-between' gap='3rem'>
                        <Flex direction='column' justify='center' align='center' gap='1rem' flex='0 0 25%'>
                            <Span color={theme.colors.location} size='3rem'>{<FontAwesomeIcon icon={'location-dot'}/>}</Span>
                            <Heading heading='h3' as='h3'>Location</Heading>
                            <Span textAlign='center'>73 Southside Lane Los Angeles Joaquin d'Oeste - DF</Span>
                        </Flex>
                        <Flex justify='flex-start' direction='column' align='center' gap='1rem' flex='0 0 25%'>
                            <Span color={theme.colors.cyan} size='3rem'>{<FontAwesomeIcon icon={'phone-volume'}/>}</Span>
                            <Heading heading='h3' as='h3'>Contact Us</Heading>
                            <Span textAlign='center'>73+(81)52 13698-5745<br/>+(74)12 13698-7412</Span>
                        </Flex>
                        <Flex justify='flex-start' direction='column' align='center' gap='1rem' flex='0 0 25%'>
                            <Span color={theme.colors.mail} size='3rem'>{<FontAwesomeIcon icon={'envelope-circle-check'}/>}</Span>
                            <Heading heading='h3' as='h3'>Email Us</Heading>
                            <Span textAlign='center'>yourname@gmail.com</Span>
                        </Flex>
                    </Flex>
                </Flex>
            </Wrapper>
        </Section>
    )
}