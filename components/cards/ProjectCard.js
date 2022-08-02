/* eslint-disable */
import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { Text, Column, Row } from '../html';
import { RowSingleSelect } from '../buttons';
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
import { BoxArrowUpRight } from '@styled-icons/bootstrap/BoxArrowUpRight';
import shophopper from '../../public/assets/shop_hopper_circle_logo.png';
import shopify from '../../public/assets/shopify_icon.png';
import Link from 'next/link';
import { useOnScreen } from '../../utils/hooks/useOnScreen';
import shophopper_app_screenshot from '../../public/assets/shophopper_app_screenshot.png';

export const ProjectCard = (props) => {
    const { teamSize, dailyUsers, hours, date, role, stack, title, logo, align, image } = props;
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

    const [setEntered, enteredScreen] = useOnScreen({ rootMargin: '-20%', threshold: 0 });

    return (
        <Wrapper ref={setEntered} visible={enteredScreen} align={align}>
            {/* <RadialGradient top={-320} left={align === 'left' ? -90 : null} right={align === 'right' ? -90 : null} /> */}
            <Column width="45%" mobile_width="100%">
                <CircleLogo>
                    <Image src={logos[logo]} width={75} height={75} placeholder="blur" />
                </CircleLogo>
                <Text width="100%" fontSize={25}  mobile_fontSize={20} textAlign={align} mobile_textAlign="center">
                    {title}
                </Text>
                <Date>{date}</Date>
                <Hr />
                <Text textAlign={align} mobile_textAlign="center">
                    {props.description}
                </Text>
                <Row width="100%">
                    <Column width="75%" mobile_width="100%" marginTop={25} justifyContent="flex-start">
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
                    </Column>
                    {/* 
                    <Icons width="25%" mobile_width="100%">
                        <Text textAlign={align} width={'70%'} fontSize={20} fontWeight="bold">
                            Stack
                        </Text>
                        {stack.map((logo) => (
                            <WithHover>
                                <StackLabel>{logo}</StackLabel>
                                {logos[logo]({ size: 30 })}
                            </WithHover>
                        ))}
                    </Icons> */}
                </Row>
            </Column>
            <Column width="50%" mobile_width="100%" alignContent="flex-end" mobile_alignContent="center">
                {title.includes('App') ? (
                    <Column width={'40%'} mobile_width="60%" alignItems="center" alignContent="center">
                        <Image alt="screenshot" src={image} placeholder="blur" layout="intrinsic" />
                    </Column>
                ) : (
                    <Image alt="screenshot" mobile_width="90%" src={image} placeholder="blur" layout="intrinsic" />
                )}
            </Column>
        </Wrapper>
    );
};

//---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
    display: flex;
    margin-top: 100px;
    justify-content: space-between;
    flex-direction: ${(p) => (p.align === 'left' ? 'row' : 'row-reverse')};
    width: 90%;
    position: relative;
    cursor: pointer;
    opacity: ${(props) => (!props.visible ? 0 : 1)};
    transition: all 0.8s ease;
    background: none;
    gap: 20px;
    @media (max-width: 768px) {
        flex-direction: column;
        width: 100%;
        gap: 40px;
    }
`;

const CircleLogo = styled.div`
    position: absolute;
    top: 45px;
    left: 20px;
    border-radius: 50%;
    height: 77px;
    width: 77px;
`;

const Date = styled.div`
    color: ${(p) => p.theme.color.grey.dark};
    font-size: 10px;
    position: absolute;
    top: 35px;
    right: 20px;
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

// const RadialGradient = styled.div`
//     position: absolute;
//     top: ${(p) => p.top}px;
//     right: ${(p) => p.right}px;
//     left: ${(p) => p.left}px;
//     height: 500px;
//     width: 500px;
//     opacity: 0.4;
//     z-index: -1;
//     background: none;
//     background: radial-gradient(
//         circle,
//         rgba(56, 87, 97, 0.9990589985994398) 0%,
//         rgba(56, 87, 97, 0.3463979341736695) 0%,
//         rgba(255, 255, 255, 1) 65%
//     );
// `;

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
`;

const WithHover = styled.div`
    cursor: pointer;
    position: relative;
    z-index: 10;
    &:hover ${StackLabel} {
        opacity: 1;
    }
`;

const Icons = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
    justify-content: flex-start;
    align-items: center;
    margin-top: 25px;
    gap: 10px;
    color: ${(p) => p.theme.color.brand.tertiary};
    @media (max-width: 768px) {
        flex-direction: row;
        width: 100%;
    }
`;
const LinkWrapper = styled.div`
    position: absolute;
    bottom: 40px;
    left: 20px;
    cursor: pointer;
`;
const Hr = styled.div`
    height: 1px;
    width: 100%;
    background: ${(p) => p.theme.color.brand.primary};
`;
