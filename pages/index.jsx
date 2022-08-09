import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import {
    Column,
    Row,
    Section,
    Text,
    Header,
    Footer,
    Chart,
    ProjectCard,
    ProjectCardV2,
    Spinner,
    Button
} from '../components';
import { FormText, TextArea } from '../components/inputs';
import { SectionHeader } from '../components/layout';

import shophopper_app_screenshot from '../public/assets/shophopper_app_screenshot.png';
import shophopper_website_screenshot from '../public/assets/shophopper_website_screenshot.png';
import shophopper_db_screenshot from '../public/assets/shophopper_db_screenshot.png';
import savvy_plan_screenshot from '../public/assets/savvy_plan_screenshot.png';
import arrows from '../public/assets/arrows.png';

export default function Home() {
    const [name, setName] = useState('');

    const [email, setEmail] = useState('');

    const [message, setMessage] = useState('');

    const [emailSent, setEmailSent] = useState(false);

    const [isLoading, setIsLoading] = useState(false);

    const sendEmail = async (e) => {
        e.preventDefault();

        setIsLoading(true);

        const res = await fetch('/api/email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, sendTo: 'benmcl@shaw.ca', message, template: 'contactUs' })
        });

        setTimeout(() => {
            setIsLoading(false);
        }, 300);

        setEmailSent(true);
        setName('');
        setEmail('');
    };

    return (
        <Wrapper>
            <Header />
            <Content>
                <Section alignContent="flex-start" height={500} width="80%" mobile_width="100%" paddingBottom={20}>
                    <HeroContent>
                        <Title color="primary">Hard-earned Trust is priceless.</Title>
                        <Title color="secondary">Let Ben earn yours.</Title>
                        <Text fontSize={20} mobile_fontSize={16} width="70%" mobile_width={'100%'}>
                            Ben Full Stack Developer Web and mobile app developer specializeing in React/Node.js.
                        </Text>
                    </HeroContent>
                    <BackgroundImageWrapper>
                        <Image src={arrows} width={300} height={300} placeholder="blur" />
                    </BackgroundImageWrapper>
                </Section>
                <Section width="100%" flexDirection="column">
                    <SectionHeader
                        number={'01'}
                        text="Since 2018 Ben has been tracking his hours coding to one day see if the maxim holds true that 10,000
                    leads to mastery."
                        title="On a Journey to Mastery"
                    />
                    <Chart />
                </Section>
                <Section width="100%" flexDirection="column" gap={0}>
                    <SectionHeader number={'02'} text="" title="Recent Projects" />
                    <ProjectCardV2
                        title="ShopHopper Mobile App"
                        description=" This app enables users to shop for local fashion apparel in one place. We gather the inventories of
                    local boutique stores and copy the data into our database. Ben built the app using React Native and Expo."
                        teamSize="3"
                        dailyUsers="98"
                        hours="742"
                        role="Full-stack mobile"
                        date="Nov 2021 - July2022"
                        stack={['ReactNative', 'Expo', 'Sentry', 'IOS', 'Android']}
                        align="left"
                        image={shophopper_app_screenshot}
                    />
                    <ProjectCardV2
                        title="ShopHopper Website"
                        description=" This website serves as the landing page for ShopHopper with the goal of getting them to
                    download the mobile app."
                        teamSize="4"
                        role="Front-end Developer"
                        dailyUsers="44"
                        hours="67"
                        date="April 2022"
                        stack={['React', 'NextJs', 'Figma', 'StyledComponents']}
                        align="right"
                        image={shophopper_website_screenshot}
                    />
                    <ProjectCardV2
                        title="ShopHopper Database"
                        description="Ben helped write scripts that gather the inventories of local boutique stores and copy the data into our database."
                        teamSize="4"
                        dailyUsers="44"
                        hours="67"
                        date="April 2022"
                        stack={['AWS', 'PostgreSQL', 'Prisma', 'NextJs']}
                        align="left"
                        image={shophopper_db_screenshot}
                    />

                    <ProjectCardV2
                        title="Financial Planning Software"
                        description="Ben built a financial planning platform that uses javascript to provide real time web brower responses to changes in a financial plan. "
                        teamSize="4"
                        dailyUsers="44"
                        hours="67"
                        date="April 2022"
                        stack={['React', 'MongoDB', 'Express', 'D3']}
                        align="right"
                        image={savvy_plan_screenshot}
                    />
                </Section>
                <Section width="90%" padding={40} flexDirection="column">
                    <SectionHeader name="contact" id="contact" number={'02'} text="" title="Get In Touch" />
                    <Form>
                        {isLoading ? (
                            <Spinner />
                        ) : (
                            <Column width="100%" alignItems="flex-end">
                                <Row justifyContent="space-between" width="100%">
                                    <FormText
                                        value={name}
                                        label={'First Name'}
                                        handleChange={(e) => setName(e.target.value)}
                                    />
                                    <FormText
                                        value={email}
                                        label={'Email'}
                                        handleChange={(e) => setEmail(e.target.value)}
                                    />
                                </Row>
                                <TextArea
                                    className="contact"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    minRows={10}
                                    label="message"
                                />
                                <Button title="Shoot" size={18} background={'tertiary'} onClick={(e) => sendEmail(e)} />
                            </Column>
                        )}
                    </Form>
                </Section>
            </Content>

            <Footer />
        </Wrapper>
    );
}

// ---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
    width: 100%;
    height: auto;
    background: radial-gradient(circle at right, #e7eced, #fcfcfc);
`;

const Content = styled.div`
    width: 85%;
    margin: 40px auto;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    position: relative;
    gap: 25px;
    -webkit-box-shadow: 0px 15px 20px 4px rgba(0, 0, 0, 0.17);
    box-shadow: 0px 15px 20px 4px rgba(0, 0, 0, 0.17);
    background: radial-gradient(circle at right, #e7eced, #fcfcfc);
`;

const Hr = styled.div`
    height: 1px;
    width: 100%;
    background: ${(p) => p.theme.color.brand.primary};
`;
const Title = styled.div`
    font-size: 60px;
    font-weight: 900;
    color: ${(p) => p.theme.color.text[p.color]};
`;

const HeroContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;

    text-align: left;
    margin-left: -10px;
    z-index: 5;
    position: relative;
    gap: 5px;

    @media (max-width: 768px) {
        width: 100%;

        margin-left: 0;
    }
`;

const Form = styled.form`
    width: 70%;
    display: flex;
    gap: 20px;
    margin: 0 auto;
    padding: 50px;
    min-height: 400px;
    position: relative;
    flex-direction: column;
    @media (max-width: 768px) {
        width: 100%;
        padding: 5px;
    }
`;
const BackgroundImageWrapper = styled.div`
    position: absolute;
    right: 40px;
    bottom: 0px;
    @media (max-width: 1000px) {
        opacity: 0.2;
    }
`;
