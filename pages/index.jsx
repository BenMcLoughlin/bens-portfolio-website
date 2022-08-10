import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import { Column, Row, Section, Text, Chart, ProjectCard, CommunityCard, Carousel, Button } from '../components';
import { FormText, TextArea } from '../components/inputs';
import { Header, Footer, Spinner, SectionHeader } from '../components/layout';
import ben_profile_photo from '../public/assets/ben_profile_photo.png';
import shophopper_app_screenshot from '../public/assets/shophopper_app_screenshot.png';
import shophopper_website_screenshot from '../public/assets/shophopper_website_screenshot.png';
import shophopper_db_screenshot from '../public/assets/shophopper_db_screenshot.png';
import savvy_plan_screenshot from '../public/assets/savvy_plan_screenshot.png';
import arrows from '../public/assets/arrows.png';
import { useWindowSize } from '../utils';

export default function Home() {
    const [name, setName] = useState('');

    const [email, setEmail] = useState('');

    const [message, setMessage] = useState('');

    const [emailSent, setEmailSent] = useState(false);

    const [isLoading, setIsLoading] = useState(false);

    const [size] = useWindowSize();

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
                        <Title color="primary">Trust is priceless.</Title>
                        <Title color="secondary">Let Ben earn yours.</Title>
                        <Text fontSize={20} mobile_fontSize={16} width="70%" mobile_width={'100%'}>
                            Full-stack Developer Web and mobile app developer specializeing in React/Node.js.
                        </Text>
                    </HeroContent>
                    <BackgroundImageWrapper>
                        <Image src={arrows} width={300} height={300} placeholder="blur" />
                    </BackgroundImageWrapper>
                </Section>

                <Section width="100%" flexDirection="column" gap={0}>
                    <SectionHeader name="about" number={'01'} text="" title="About Ben" noBottomBorder={true} />
                    <Row width="100%" alignItems="flex-start">
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
                            From Kelowna B.C, Ben is a 34-year-old husband and a father. He served in Afghanistan 2009
                            and after releasing became a Forest Firefighter. He studied business for his undergrad and
                            computer science in his MBA. He&apos;s now honing his craft so he can become one of the best
                            Full-Stack Developers in Canada.
                        </Text>
                    </Row>
                </Section>
                <Section width="100%" flexDirection="column" background="#385761">
                    <SectionHeader
                        number={'02'}
                        text="Since 2018 Ben has been tracking his hours coding to one day see if the maxim holds true that 10,000
                    leads to mastery."
                        title="Journey to Mastery"
                        sectionTheme="dark"
                        stat1="4.5k"
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
                        dailyUsers="98"
                        hours="742"
                        role="Full-stack mobile"
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
                        projectTheme="dark"
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
                        projectTheme="dark"
                        image={savvy_plan_screenshot}
                    />
                </Section>
                <Section width="100%" flexDirection="column" background="#385761">
                    <SectionHeader number={'04'} text="" title="Community Engagement" sectionTheme="dark" />
                    <Row>
                        <CommunityCard
                            imageSrc="/assets/logos/edabit_logo.png"
                            text="Ben&apos;s score is in the top 10% on the coding challenge website Edabit. "
                            link="https://edabit.com/user/SYEuojZtP6yLXryHvn"
                            title={'Edabit'}
                        />
                        <CommunityCard
                            imageSrc="/assets/logos/dev_icon.png"
                            text="Every blog post Ben has written is on the Dev.to"
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
                <Section width="90%" padding={40} flexDirection="column">
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
    font-size: 60px;
    font-weight: 900;
    color: ${(p) => p.theme.color.text[p.color]};
    @media (max-width: 768px) {
        font-size: 40px;
    }
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
        width: 90%;
        margin: 0 auto;
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
