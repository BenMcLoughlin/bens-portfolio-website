import React from 'react';
import styled from 'styled-components';
import { GooglePlay } from '@styled-icons/remix-fill/GooglePlay';
import { Apple } from '@styled-icons/boxicons-logos/Apple';
import { Github } from '@styled-icons/bootstrap/Github';
import { LinkedinWithCircle } from '@styled-icons/entypo-social/LinkedinWithCircle';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/assets/ben_logo_white.png';

export const Footer = () => {
    return (
        <Wrapper>
            <Column>
                <Link passHref href="/">
                    <Logo>
                        <Image src={logo} alt="logo" width={40} height={40} layout="fixed" />
                    </Logo>
                </Link>
                <Text>© 2021 — 2022</Text>
                <Text>benmcl@shaw.ca</Text>
            </Column>

            <Social>
                {/* <TwitterIcon />
                <LinkedInIcon />
                <InstagramIcon />
                <Hr /> */}
                <Link href="https://apps.apple.com/us/app/shophopper/id1604915084">
                    <a target="_blank" rel="noopener noreferrer">
                        <AppleIcon />
                    </a>
                </Link>
                <Link href="https://play.google.com/store/apps/details?id=com.shophopper.app">
                    <a target="_blank" rel="noopener noreferrer">
                        <GooglePlayIcon />
                    </a>
                </Link>
                <Link href="https://github.com/BenMcLoughlin">
                    <a target="_blank" rel="noopener noreferrer">
                        <GithubIcon />
                    </a>
                </Link>
                <Link href="https://github.com/BenMcLoughlin">
                    <a target="_blank" rel="noopener noreferrer">
                        <LinkedinIcon />
                    </a>
                </Link>
            </Social>
        </Wrapper>
    );
};

// ---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
    min-height: 380px;
    display: flex;
    background: ${(p) => p.theme.color.grey.dark};
    color: ${(p) => p.theme.color.grey.lightest};
    justify-content: space-around;
    padding: 80px;
`;
// @media (max-width: 900px) {
//     width: 100%;
//     flex-direction: column;
//     align-items: center;
//     gap: 40px;
// }
const AppleIcon = styled(Apple)`
    height: 34px;
    width: 34px;
    color: ${(p) => p.theme.color.grey.lightest};
    cursor: pointer;
`;
const GooglePlayIcon = styled(GooglePlay)`
    height: 34px;
    width: 34px;
    color: ${(p) => p.theme.color.grey.lightest};
    cursor: pointer;
`;

const GithubIcon = styled(Github)`
    height: 34px;
    width: 34px;
    color: ${(p) => p.theme.color.grey.lightest};
    cursor: pointer;
`;

const LinkedinIcon = styled(LinkedinWithCircle)`
    height: 35px;
    width: 35px;
    color: ${(p) => p.theme.color.grey.lightest};
    cursor: pointer;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    width: ${(p) => p.width || '120px'};
    gap: 20px;
    align-items: flex-start;
`;
// @media (max-width: 900px) {
//     width: 100%;
//     flex-direction: column;
//     align-items: center;
//     gap: 20px;
// }
const Social = styled.div`
    width: 220px;
    justify-content: center;
    display: flex;
    justify-content: space-around;
`;

const Text = styled.div`
    font-family: 'Lato', sans-serif;
    font-size: 14px;
    display: flex;
    font-weight: 300;
    justify-content: center;
    cursor: pointer;
`;
const Logo = styled.div`
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    position: relative;
    cursor: pointer;
`;
