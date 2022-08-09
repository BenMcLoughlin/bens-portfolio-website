import React, { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { Button } from '../buttons/Button';
import ben_profile_photo from '../../public/assets/ben_profile_photo.png';
import Image from 'next/image';
import Head from 'next/head';
import { Text } from '../';
import * as Scroll from 'react-scroll';
import { Github } from '@styled-icons/bootstrap/Github';
import { LinkedinWithCircle } from '@styled-icons/entypo-social/LinkedinWithCircle';
import { Menu } from '@styled-icons/evaicons-solid/Menu';
import { useWindowSize } from '../../utils/hooks/useWindowSize';

export const Header = () => {
    const ScrollLink = Scroll.Link;
    const [width, height] = useWindowSize();

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Wrapper menuOpen={menuOpen}>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link
                    href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
                    rel="stylesheet"
                />
                <style>
                    @import
                    url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
                </style>
            </Head>
            {(width > 768 || menuOpen) && (
                <>
                    <Left>
                        <Text paddingRight={5} fontSize={20}>
                            Ben
                        </Text>
                        <Text fontWeight={800} fontSize={20}>
                            McLoughlin
                        </Text>
                    </Left>
                    <Right>
                        <ClickText>Projects</ClickText>
                        <HR />
                        <ClickText>Community</ClickText>
                        <HR />
                        <ClickText>Contact</ClickText>
                    </Right>
                    <Social>
                        <Link href="https://github.com/BenMcLoughlin" onClick={() => _logClick('app_store')}>
                            <a target="_blank" rel="noopener noreferrer">
                                <GithubIcon />
                            </a>
                        </Link>
                        <Link href="https://github.com/BenMcLoughlin" onClick={() => _logClick('app_store')}>
                            <a target="_blank" rel="noopener noreferrer">
                                <LinkedinIcon />
                            </a>
                        </Link>
                    </Social>
                </>
            )}
            {width < 768 && <MenuIcon onClick={() => setMenuOpen(!menuOpen)} />}
        </Wrapper>
    );
};

// ---------------------------STYLES-------------------------------------------//

const menuOpen = `
height: 400px;
flex-direction: column;
align-items: flex-start;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding-left: 30px;
    width: 100%;
    align-items: center;
    justify-content: space-around;
    height: 65px;
    z-index: 5;
    -webkit-box-shadow: 0px 0px 6px 3px rgba(0, 0, 0, 0.25);
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.25);
    border-bottom: 1px solid ${(p) => p.theme.color.border.medium};
    ${(p) => p.menuOpen && menuOpen};
    transition: all 0.3s ease;
`;
const Left = styled.div`
    width: 20%;
    display: flex;
    justify-content: left;
    border-right: 1px solid ${(p) => p.theme.color.border.medium};
    @media (max-width: 768px) {
        margin-top: 30px;
        border-right: none;
        border-bottom: 1px solid ${(p) => p.theme.color.border.medium};
    }
`;
const ClickText = styled.div`
    font-weight: bold;
`;

const HR = styled.div`
    height: 20px;
    width: 2px;
    background: grey;
    @media (max-width: 768px) {
        width: 20px;
        height: 2px;
    }
`;

const Social = styled.div`
    width: 10%;
    justify-content: center;
    display: flex;
    gap: 10px;
    justify-content: space-around;
`;

const Right = styled.div`
    width: 40%;

    display: flex;
    align-items: center;
    flex-wrap: wrap-reverse;
    justify-content: space-around;
    gap: 30px;
    padding-right: 20px;
    @media (max-width: 1100px) {
        width: 60%;
    }
    @media (max-width: 768px) {
        align-items: flex-end;
        flex-direction: column;
    }
`;
const GithubIcon = styled(Github)`
    height: 29px;
    width: 29px;
    color: ${(p) => p.theme.color.grey.dark};
    cursor: pointer;
`;
const MenuIcon = styled(Menu)`
    height: 35px;
    width: 35px;
    color: ${(p) => p.theme.color.grey.dark};
    cursor: pointer;
    position: absolute;
    top: 10px;
    left: 10px;
`;

const LinkedinIcon = styled(LinkedinWithCircle)`
    height: 30px;
    width: 30px;
    color: ${(p) => p.theme.color.grey.dark};
    cursor: pointer;
`;
