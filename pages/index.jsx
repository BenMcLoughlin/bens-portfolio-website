import React, { useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { Column, Row, Section, Text, Chart, ArrowStack, Carousel, Button, Toast } from '../components';
import { ProjectCard, CommunityCard } from '../components/cards';
import { FormText, TextArea } from '../components/inputs';
import { Header, Footer, Spinner, SectionHeader } from '../components/layout';
import shophopper_app_screenshot from '../public/assets/shophopper_app_screenshot.png';
import shophopper_website_screenshot from '../public/assets/shophopper_website_screenshot.png';
import shopify_screenshot from '../public/assets/shopify_screenshot.png';
import savvy_plan_screenshot from '../public/assets/savvy_plan_screenshot.png';
import { useWindowSize } from '../utils';

export default function Home() {
    const [name, setName] = useState('');

    const [email, setEmail] = useState('');

    const [message, setMessage] = useState('');

    const [emailSent, setEmailSent] = useState(false);

    const [isLoading, setIsLoading] = useState(false);

    const [size] = useWindowSize();

    const sendEmail = async (e) => {
        setIsLoading(true);
        const response = await fetch('/api/email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, sendTo: 'benmcl@shaw.ca', message, template: 'contactUs' })
        });

        setEmailSent(true);
        setName('');
        setEmail('');
        setIsLoading(false);
    };

    return (
        <Wrapper>
            <Header />
            <Content>
                <Section alignContent="flex-start" height={500} width="80%" mobile_width="90%" paddingBottom={20}>
                    <HeroContent>
                        <Title color="primary">An App can look good.</Title>
                        <Title color="secondary">But code speaks for itself.</Title>
                        <Text fontSize={20} mobile_fontSize={16} width="70%" mobile_width={'100%'}>
                            Full-stack Developer Web and mobile app developer specializing in React/Node.js.
                        </Text>
                    </HeroContent>
                    <ArrowStack />
                </Section>

                <Section width="100%" flexDirection="column" gap={0}>
                    <SectionHeader name="about" number={'01'} text="" title="About Ben" noBottomBorder={true} />
                    <Row width="100%" alignItems="flex-start" mobile_alignItems="center">
                        <Carousel width="60%">
                            {[...new Array(5)].map((_, i) => (
                                <ProfileImageWrapper key={i}>
                                    <Image
                                        alt="profile"
                                        src={`/assets/profile_photos/profile_${i}.png`}
                                        width={size > 768 ? 500 : 250}
                                        height={size > 768 ? 333 : 166}
                                        layout="fixed"
                                    />
                                </ProfileImageWrapper>
                            ))}
                        </Carousel>
                        <Text
                            fontSize={14}
                            lineHeight={29}
                            width="35%"
                            marginTop={-6}
                            textAlign="left"
                            mobile_textAlign={'center'}
                            mobile_width={'90%'}>
                            From Kelowna B.C, Ben is a 34-year-old husband and a father. Since 2018, he&apos;s been
                            working with tech start-ups in Kelowna, bringing them from ideas to fully functioning
                            MVP&apos;s. He&apos;s built a fully functioning web and mobile applications from front to
                            back and specializes in anything JavaScript.
                        </Text>
                    </Row>
                </Section>
                <Section width="100%" flexDirection="column" background="#385761">
                    <SectionHeader
                        number={'02'}
                        text="This tracks Ben's direct hours working with code.
                    "
                        title="Journey to Mastery"
                        sectionTheme="dark"
                        stat1="6.5k"
                        stat2="10k"
                    />
                    <Chart />
                </Section>
                <Section width="100%" flexDirection="column" gap={0}>
                    <SectionHeader name="projects" number={'03'} text="" title="Recent Projects" />
                    <ProjectCard
                        title="ShopHopper Mobile App"
                        description=" This app enables users to shop for local fashion apparel in one place. We gather the inventories of
                    local boutique stores and copy the data into our database. Ben built the app using React Native and Expo."
                        teamSize="3"
                        dailyUsers="212"
                        hours="742"
                        role="Full-stack mobile"
                        date="2022"
                        stack={['ReactNative', 'Expo', 'Sentry', 'IOS', 'Android']}
                        align="left"
                        link="https://apps.apple.com/us/app/shophopper/id1604915084"
                        image={shophopper_app_screenshot}
                    />
                    <ProjectCard
                        title="ShopHopper Website"
                        description=" This website serves as the landing page for ShopHopper with the goal of getting them to
                    download the mobile app."
                        teamSize="4"
                        role="Full-Stack Developer"
                        dailyUsers="129"
                        hours="67"
                        date="2021"
                        stack={['React', 'NextJs', 'Figma', 'StyledComponents']}
                        align="right"
                        projectTheme="dark"
                        link="https://shophopper.ca/"
                        image={shophopper_website_screenshot}
                    />
                    <ProjectCard
                        title="Shopify Sales Channel"
                        description="Stores with shopify accounts can download the Shophopper sales channel app and integrate their billing and product management with the ShopHopper app."
                        teamSize="2"
                        dailyUsers="12"
                        role="Full-Stack Developer"
                        hours="267"
                        date="2022"
                        stack={['AWS', 'PostgreSQL', 'Prisma', 'NextJs']}
                        align="left"
                        link="https://apps.shopify.com/shophopper?search_id=f1ac1859-a6a8-40d1-a487-1d12ee9b0d14&surface_detail=shophopper&surface_inter_position=1&surface_intra_position=1&surface_type=search"
                        image={shopify_screenshot}
                    />
                </Section>
                <Section width="100%" flexDirection="column" background="#385761">
                    <SectionHeader number={'04'} text="" title="Community Engagement" sectionTheme="dark" />
                    <Row>
                        <CommunityCard
                            imageSrc="/assets/logos/edabit_logo.png"
                            text="Ben's score is in the top 10% on the coding challenge website Edabit. "
                            link="https://edabit.com/user/SYEuojZtP6yLXryHvn"
                            title={'Edabit'}
                        />
                        <CommunityCard
                            imageSrc="/assets/logos/dev_icon.png"
                            text="Keep an eye out for Ben's next blog post on Dev.to"
                            link="https://dev.to/benmcloughlin"
                            title={'Dev.to'}
                        />

                        <CommunityCard
                            imageSrc="/assets/logos/stack_overflow_icon.png"
                            text="Check out his Stack Overflow profile."
                            link="https://stackoverflow.com/users/12243545/benmcl"
                            title={'Stack Overflow'}
                        />
                    </Row>
                </Section>
                <Section flexDirection="column">
                    <SectionHeader name="contact" id="contact" number={'05'} text="" title="Get In Touch" />
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
            {emailSent && <Toast text="Email sent!" />}
            <Footer />
        </Wrapper>
    );
}

// ---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
    width: 100%;
    height: auto;
    background: radial-gradient(circle at right, #e7eced, #fcfcfc);
    position: relative;
`;

const Content = styled.div`
    width: 85%;
    margin: -15px auto 25px auto;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    position: relative;
    gap: 25px;
    -webkit-box-shadow: 0px 15px 20px 4px rgba(0, 0, 0, 0.17);
    box-shadow: 0px 15px 20px 4px rgba(0, 0, 0, 0.17);
    background: radial-gradient(circle at right, #e7eced, #fcfcfc);
    @media (max-width: 768px) {
        width: 100%;
    }
`;

const ProfileImageWrapper = styled.div`
    position: relative;
    height: 335px;
    width: 500px;
    border-bottom: 1px solid ${(p) => p.theme.color.grey.dark};
    border-left: 1px solid ${(p) => p.theme.color.grey.dark};
    border-top: 1px solid ${(p) => p.theme.color.grey.dark};
    @media (max-width: 768px) {
        height: 166px;
        width: 250px;
    }
`;
const Title = styled.div`
    font-size: 55px;
    font-weight: 900;
    color: ${(p) => p.theme.color.text[p.color]};
    @media (max-width: 768px) {
        font-size: 40px;
    }
`;

const HeroContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;

    text-align: left;
    margin-left: -10px;
    z-index: 5;
    position: relative;
    gap: 5px;

    @media (max-width: 768px) {
        width: 90%;
        margin: 0 auto;
    }
`;

const Form = styled.div`
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
