import React, { useState } from 'react';

import styled from 'styled-components';
import { Column, Row, Section, Text, Header, Footer, Chart, ProjectCard, Spinner, Button } from '../components';
import { FormText, TextArea } from '../components/inputs';

import shophopper_app_screenshot from '../public/assets/shophopper_app_screenshot.png';
import shophopper_website_screenshot from '../public/assets/shophopper_website_screenshot.png';
import shophopper_db_screenshot from '../public/assets/shophopper_db_screenshot.png';
import savvy_plan_screenshot from '../public/assets/savvy_plan_screenshot.png';
import { useWindowSize } from '../utils';

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

    const [width] = useWindowSize();
    console.log('/index.js - width: ', width);
    return (
        <Wrapper>
            <Gradient />
            <Header />

            <Content>
                {/* <RadialGradient top={30} right={-20} />
                <RadialGradient top={120} right={20} />
                <RadialGradient top={120} left={-20} /> */}
                <HeroSection>
                    <Column width="50%" mobile_width={'90%'} height="90%" alignItems="flex-start" padding={20}>
                        <h1>Ben McLoughlin</h1>
                        <Text
                            fontStyle="italic"
                            fontWeight="100"
                            fontSize={20}
                            mobile_fontSize={16}
                            mobile_width={'100%'}>
                            Full Stack Web and Mobile Developer
                        </Text>
                        <Text fontSize={16} textAlign="left" width={'100%'} mobile_width={'100%'}>
                            Ben&apos;s on a mission to track 10,000 hours of focused coding time. Check out the graph
                            below to see how he&apos;s been spending his time.
                        </Text>
                    </Column>
                    {width > 768 && (
                        <Column
                            alignItems="center"
                            width="30%"
                            mobile_width={'75%'}
                            justifyContent="space-around"
                            height="100%"
                            padding={20}>
                            <Text fontSize={90} width="100%" textAlign="left" mobile_width="90%" mobile_fontSize={60}>
                                4.5k
                            </Text>
                            <RotatedLine />
                            <Text fontSize={90} width="100%" textAlign="right" mobile_fontSize={60}>
                                10k
                            </Text>
                        </Column>
                    )}
                </HeroSection>
                <Section height={400} mobile_height={300} marginTop={50} width="100%" flexDirection="column">
                    <Chart />
                </Section>
                <Section width="90%" flexDirection="column">
                    <SectionHeader>Latest Projects</SectionHeader>
                    <ProjectCard
                        title="ShopHopper Mobile App"
                        description=" This app enables users to shop for local fashion apparel in one place. We gather the inventories of
                    local boutique stores and copy the data into our database. Ben built the app using React Native and Expo."
                        teamSize="3"
                        dailyUsers="98"
                        hours="742"
                        role="Full-stack mobile Developer"
                        date="Nov 2021 - July2022"
                        stack={['ReactNative', 'Expo', 'Sentry', 'IOS', 'Android']}
                        align="left"
                        image={shophopper_app_screenshot}
                    />
                    <ProjectCard
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
                    <ProjectCard
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

                    <ProjectCard
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
                    <SectionHeader name="contact" id="contact">
                        Reach out
                    </SectionHeader>
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
                                <Button title="Shoot" size={18} onClick={(e) => sendEmail(e)} />
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
    display: flex;
    flex-direction: column;
    position: relative;
    gap: 5px;
`;
const Content = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    position: relative;
    gap: 5px;
    @media (min-width: 1400px) {
        flex-direction: column;
        width: 85%;
        margin: 0 auto;
    }
`;
const Gradient = styled.div`
    position: absolute;
    top: 65px;
    left: 0;
    height: 100%;
    width: 100%;
    padding-bottom: 380px;
    z-index: -1;
    background: -webkit-linear-gradient(bottom left, #f6f4f5, #ffffff);
    background: -moz-linear-gradient(bottom left, #f6f4f5, #ffffff);
    background: linear-gradient(to top right, #f6f4f5, #ffffff);
`;

const RotatedLine = styled.div`
    height: 1px;
    width: 100%;
    transform: rotate(135deg);
    background: ${(p) => p.theme.color.brand.primary};
    @media (max-width: 768px) {
        flex-direction: column;
        width: 70%;
    }
`;

const HeroSection = styled.div`
    min-height: 400px;
    width: 80%;
    display: flex;
    padding-top: 100px;
    margin: 0 auto;
    justify-content: space-around;

    @media (max-width: 768px) {
        padding-top: 20px;
        flex-direction: column;
        min-height: 200px;
        width: 100%;
    }
`;

const SectionHeader = styled.div`
    color: ${(p) => p.theme.color.grey.dark};
    font-size: 50px;
    width: 100vw;
    padding: 20px;
    margin-bottom: 30px;
    @media (max-width: 768px) {
        font-size: 30px;
        padding: 10px;
        margin-top: 50px;
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
        width: 120%;
        padding: 5px;
        
    }
`;
