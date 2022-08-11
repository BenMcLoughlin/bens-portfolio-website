import React, { useState } from 'react';
import styled from 'styled-components';
import * as Scroll from 'react-scroll';
import { useWindowSize, useOnScreen } from '../../utils/hooks';
import { Text } from '../html';
import Image from 'next/image';
import { Column } from '../html/Column';
import { ReactLogo } from '@styled-icons/fa-brands/ReactLogo';
import { Nextdotjs } from '@styled-icons/simple-icons/Nextdotjs';
import { Prisma } from '@styled-icons/simple-icons/Prisma';
import { Figma } from '@styled-icons/boxicons-logos/Figma';
import { Postgresql } from '@styled-icons/simple-icons/Postgresql';
import { Firebase } from '@styled-icons/boxicons-logos/Firebase';
import { Aws } from '@styled-icons/boxicons-logos/Aws';
import { Express } from '@styled-icons/simple-icons/Express';
import { Styledcomponents } from '@styled-icons/simple-icons/Styledcomponents';
import { Mongodb } from '@styled-icons/simple-icons/Mongodb';
import { Shopify } from '@styled-icons/boxicons-logos/Shopify';
import { Graphql } from '@styled-icons/simple-icons/Graphql';
import { Sentry } from '@styled-icons/simple-icons/Sentry';
import { Expo } from '@styled-icons/simple-icons/Expo';
import { Apple } from '@styled-icons/boxicons-logos/Apple';
import { Android } from '@styled-icons/fa-brands/Android';
import { ChartArea } from '@styled-icons/fa-solid/ChartArea';
import shophopper from '../../public/assets/shop_hopper_circle_logo.png';
import shopify from '../../public/assets/shopify_icon.png';
import { theme } from '../../styles/theme';

export const ProjectCard = (props) => {
    const ScrollLink = Scroll.Link;
    const [width, height] = useWindowSize();

    const logos = {
        shophopper: shophopper,
        shopify: shopify,
        D3: (p) => <ChartArea {...p} />,
        React: (p) => <ReactLogo {...p} />,
        ReactNative: (p) => <ReactLogo {...p} />,
        NextJs: (p) => <Nextdotjs {...p} />,
        Figma: (p) => <Figma {...p} />,
        Prisma: (p) => <Prisma {...p} />,
        PostgreSQL: (p) => <Postgresql {...p} />,
        Firebase: (p) => <Firebase {...p} />,
        AWS: (p) => <Aws {...p} />,
        StyledComponents: (p) => <Styledcomponents {...p} />,
        Express: (p) => <Express {...p} />,
        MongoDB: (p) => <Mongodb {...p} />,
        Shopify: (p) => <Shopify {...p} />,
        Android: (p) => <Android {...p} />,
        GraphQL: (p) => <Graphql {...p} />,
        IOS: (p) => <Apple {...p} />,
        Expo: (p) => <Expo {...p} />,
        Sentry: (p) => <Sentry {...p} />
    };

    const [menuOpen, setMenuOpen] = useState(false);
    const { teamSize, dailyUsers, hours, date, role, stack, title, projectTheme, align, image } = props;

    const [setEntered, enteredScreen] = useOnScreen({ rootMargin: '-20%', threshold: 0 });

    const contrastColor = projectTheme === 'dark' ? theme.color.grey.lightest : theme.color.brand.primary;

    return (
        <Wrapper
            menuOpen={menuOpen}
            contrastColor={contrastColor}
            projectTheme={projectTheme}
            visible={enteredScreen}
            ref={setEntered}>
            <TopBar contrastColor={contrastColor}>
                <Square contrastColor={contrastColor} />

                <Text
                    width="40%"
                    mobile_width="100%"
                    fontSize={20}
                    mobile_fontSize={16}
                    fontWeight="bold"
                    textAlign={'left'}
                    color={contrastColor}>
                    {title}
                </Text>

                {width > 768 && (
                    <Text mobile_width="100%" fontWeight={600} color={contrastColor}>
                        {date}
                    </Text>
                )}
            </TopBar>
            <CustomRow align={align}>
                <Text
                    width="20%"
                    mobile_width="100%"
                    textAlign={align}
                    mobile_textAlign={'center'}
                    fontWeight={200}
                    height="100%"
                    color={contrastColor}>
                    {props.description}
                </Text>
                <Hr contrastColor={contrastColor} />
                <Column width="40%" mobile_width="100%">
                    <TextRow contrastColor={contrastColor}>
                        <CustomText textAlign="left" color={contrastColor}>
                            Bens Role
                        </CustomText>
                        <CustomText textAlign="left" color={contrastColor}>
                            {role}
                        </CustomText>
                    </TextRow>
                    <TextRow contrastColor={contrastColor}>
                        <CustomText textAlign="left" color={contrastColor}>
                            Team Size
                        </CustomText>
                        <CustomText textAlign="right" color={contrastColor}>
                            {teamSize}
                        </CustomText>
                    </TextRow>
                    <TextRow contrastColor={contrastColor}>
                        <CustomText textAlign="left" color={contrastColor}>
                            Avg. Daily Users
                        </CustomText>
                        <CustomText textAlign="right" color={contrastColor}>
                            {dailyUsers}
                        </CustomText>
                    </TextRow>
                    <TextRow contrastColor={contrastColor}>
                        <CustomText textAlign="left" color={contrastColor}>
                            Hours to Build
                        </CustomText>
                        <CustomText textAlign="right" color={contrastColor}>
                            {hours}
                        </CustomText>
                    </TextRow>
                    <Stats />
                    <Icons>
                        {stack.map((logo) => (
                            <WithHover key={logo}>
                                <StackLabel>{logo}</StackLabel>
                                {logos[logo]({ size: 30, color: contrastColor })}
                            </WithHover>
                        ))}
                    </Icons>
                </Column>
                <Column width="30%" mobile_width="100%" alignContent="center" mobile_alignContent="center">
                    {title.includes('App') ? (
                        <Column width={'40%'} mobile_width="60%" alignItems="center" alignContent="center">
                            <Image alt="screenshot" src={image} placeholder="blur" layout="intrinsic" />
                        </Column>
                    ) : (
                        <Image alt="screenshot" mobile_width="90%" src={image} placeholder="blur" layout="intrinsic" />
                    )}
                </Column>
            </CustomRow>
        </Wrapper>
    );
};

// ---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
    height: auto;
    width: 100%;
    align-self: flex-end;
    display: flex;
    flex-direction: column;
    padding-bottom: 15px;
    position: relative;
    border-radius: 10px;
    margin-top: 120px;
    padding: 20px;
    background: ${(p) => (p.projectTheme === 'dark' ? theme.color.brand.primary : theme.color.grey.lightest)};
    box-shadow: 0px 15px 20px 4px rgba(0, 0, 0, 0.17);
    transition: all 0.4s ease;
    opacity: ${(props) => (!props.visible ? 0 : 1)};
    @media (max-width: 768px) {
        width: 90%;
        justify-content: center;
    }
`;
const TopBar = styled.div`
    width: 100%;
    align-items: center;
    height: 40px;
    display: flex;
    justify-content: space-between;
    gap: 10px;
    border-top: 1px solid ${(p) => p.contrastColor};
    border-bottom: 1px solid ${(p) => p.contrastColor};
    background: transparent;
`;

const Hr = styled.div`
    width: 1px;
    align-items: center;
    height: 300px;
    border-right: 1px solid ${(p) => p.contrastColor};
    @media (max-width: 768px) {
        height: 30px;
        width: 100%;
        border-right: none;
        border-bottom: 1px solid ${(p) => p.contrastColor};
    }
`;

const CustomText = styled.div`
    width: 50%;
    font-weight: 200;
    color: ${(p) => p.color};
    text-align: ${(p) => p.textAlign};
`;

const Square = styled.div`
    height: 40px;
    width: 30px;
    background: ${(p) => p.theme.color.brand.secondary};
    border-bottom: 1px solid ${(p) => p.contrastColor};
    border-top: 1px solid ${(p) => p.contrastColor};
`;
const CustomRow = styled.div`
    display: flex;
    padding-top: 30px;
    justify-content: space-between;
    align-content: flex-start;
    align-items: flex-start;

    height: 100%;
    width: 100%;

    flex-direction: ${(p) => (p.align === 'left' ? 'row' : 'row-reverse')};
    @media (max-width: 768px) {
        justify-content: space-around;
        flex-direction: column;
    }
`;

const Stats = styled.div`
    font-size: 50px;
    font-weight: 900;
    width: 40%;
    color: ${(p) => p.contrastColor};
`;
const TextRow = styled.div`
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid ${(p) => p.contrastColor};
    width: 100%;
    justify-content: space-between;
    padding: 5px;
    @media (max-width: 768px) {
        padding: 2px;
    }
`;
const Icons = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    margin-top: 25px;
    gap: 10px;
    margin-bottom: 40px;
    color: ${(p) => p.theme.color.brand.tertiary};
    @media (max-width: 768px) {
        width: 100%;
    }
`;

const StackLabel = styled.div`
    width: auto;
    height: 30px;
    color: white;
    position: absolute;
    top: 10px;
    left: 50px;
    text-align: left;
    padding: 7px;
    border-radius: 5px;
    background: #72706e;
    opacity: 0;
    font-size: 12px;
    transition: all 0.4s ease;
    text-align: center;
    display: flex;

    @media (max-width: 768px) {
        display: none;
    }
`;

const WithHover = styled.div`
    cursor: pointer;
    position: relative;
    z-index: 10;
    &:hover ${StackLabel} {
        opacity: 1;
    }
`;
