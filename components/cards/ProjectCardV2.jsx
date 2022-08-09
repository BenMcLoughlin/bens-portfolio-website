import React, { useState } from 'react';
import Link from 'next/link';
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
import shophopper_app_screenshot from '../../public/assets/shophopper_app_screenshot.png';

export const ProjectCardV2 = (props) => {
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
    const { teamSize, dailyUsers, hours, date, role, stack, title, number, align, image } = props;

    const [setEntered, enteredScreen] = useOnScreen({ rootMargin: '-20%', threshold: 0 });

    return (
        <Wrapper menuOpen={menuOpen}>
            <TopBar>
                <Square />

                <Text width="40%" mobile_width="100%" fontSize={20} fontWeight="bold" textAlign={'left'}>
                    {title}
                </Text>

                {width > 768 && (
                    <Text mobile_width="100%" fontWeight={600} color={'#C4C4C4'}>
                        {date}
                    </Text>
                )}
            </TopBar>
            <CustomRow align={align} visible={enteredScreen} ref={setEntered}>
                <Text width="20%" mobile_width="100%" textAlign={align} height="100%">
                    {props.description}
                </Text>
                <Hr />
                <Column width="40%" mobile_width="100%">
                    <TextRow>
                        <Text textAlign="left" width="50%">
                            Bens Role
                        </Text>
                        <Text textAlign="right" width="50%">
                            {role}
                        </Text>
                    </TextRow>
                    <TextRow>
                        <Text textAlign="left" width="50%">
                            Team Size
                        </Text>
                        <Text textAlign="right" width="50%">
                            {teamSize}
                        </Text>
                    </TextRow>
                    <TextRow>
                        <Text textAlign="left" width="50%">
                            Avg. Daily Users
                        </Text>
                        <Text textAlign="right" width="50%">
                            {dailyUsers}
                        </Text>
                    </TextRow>
                    <TextRow>
                        <Text textAlign="left" width="50%">
                            Hours to Build
                        </Text>
                        <Text textAlign="right" width="50%">
                            {hours}
                        </Text>
                    </TextRow>
                    <Stats />
                    <Icons>
                        {stack.map((logo) => (
                            <WithHover>
                                <StackLabel>{logo}</StackLabel>
                                {logos[logo]({ size: 30 })}
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
    margin-top: 80px;
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
    border-top: 1px solid ${(p) => p.theme.color.border.medium};
    border-bottom: 1px solid ${(p) => p.theme.color.border.medium};
    background: transparent;
`;

const Hr = styled.div`
    width: 1px;
    align-items: center;
    height: 300px;
    border-right: 1px solid ${(p) => p.theme.color.border.medium};
    @media (max-width: 768px) {
        height: 30px;
        width: 100%;
        border-right: none;
        border-bottom: 1px solid ${(p) => p.theme.color.border.medium};
    }
`;

const Square = styled.div`
    height: 40px;
    width: 30px;
    background: ${(p) => p.theme.color.brand.secondary};
    border-bottom: 1px solid ${(p) => p.theme.color.border.medium};
    border-top: 1px solid ${(p) => p.theme.color.border.medium};
`;
const CustomRow = styled.div`
    display: flex;
    padding-top: 30px;
    justify-content: space-between;
    align-content: flex-start;
    align-items: flex-start;
    opacity: ${(props) => (!props.visible ? 0 : 1)};
    height: 100%;
    width: 100%;
    transition: all 0.4s ease;
    flex-direction: ${(p) => (p.align === 'left' ? 'row' : 'row-reverse')};
    @media (max-width: 768px) {
        justify-content: space-around;
    }
`;

const Number = styled.div`
    width: 80px;
    display: flex;
`;
const Stats = styled.div`
    font-size: 50px;
    font-weight: 900;
    width: 40%;
    color: ${(p) => p.theme.color.text.primary};
`;
const TextRow = styled.div`
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid ${(p) => p.theme.color.grey.medium};
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
    color: ${(p) => p.theme.color.brand.tertiary};
    @media (max-width: 768px) {
        width: 100%;
        gap: 3px;
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
        padding: 2px;
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
