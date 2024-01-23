import {Wrapper} from '../../components/Wrapper';
import {Heading} from '../../components/styled-html-tag/Headings';
import {Flex} from '../../components/Flex';
import {theme} from '../../styles/Theme';
import {Form} from '../../components/form/Form';
import React from 'react';
import {Section} from '../../components/styled-html-tag/Section';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Span} from '../../components/styled-html-tag/Span';

export const Contacts = () => {
    return (
        <Section>
            <Wrapper>
                <Flex width='100%' align='center' direction='column'>
                    <Heading as='h3' heading='h3' id='contact'>Contact Me</Heading>
                    <Heading as='h2' heading='h2' color={theme.colors.secondary}>Get In Touch</Heading>
                    <Form/>
                    <Flex as={'ul'} justify='center' gap='3rem' wrap={'wrap'} margin={'0'}>
                        <Flex as={'li'} justify='flex-start' direction='column' align='center' flex='1 1 auto' width={'20rem'}>
                            <Span color={theme.colors.cyan} size='3rem'>{<FontAwesomeIcon icon={'phone-volume'}/>}</Span>
                            <Heading heading='h3' as='h3'>Contact Me</Heading>
                            <Span textAlign='center' as='a' href='tel:+78442433333'>+7 (844) 243-33-33</Span>
                        </Flex>
                        <Flex as={'li'} direction='column' justify='center' align='center' flex='1 1 auto' width={'20rem'}>
                            <Span color={theme.colors.location} size='3rem'>{<FontAwesomeIcon icon={'location-dot'}/>}</Span>
                            <Heading heading='h3' as='h3'>Location</Heading>
                            <Span textAlign='center' as='a' href={'https://maps.app.goo.gl/AfqSLq9xtJa2hrXN9'} target='_blank'>
                                st. Embankment of the 62nd Army, 28, Volgograd, 400005
                            </Span>
                        </Flex>
                        <Flex as={'li'} justify='flex-start' direction='column' align='center' flex='1 1 auto' width={'20rem'}>
                            <Span color={theme.colors.mail} size='3rem'>{<FontAwesomeIcon icon={'envelope-circle-check'}/>}</Span>
                            <Heading heading='h3' as='h3'>Email Me</Heading>
                            <Span as={'a'} textAlign='center' href='mailto:web-serge@outlook.com'>web-serge@outlook.com</Span>
                        </Flex>
                    </Flex>
                </Flex>
            </Wrapper>
        </Section>
    )
}