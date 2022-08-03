import React, { useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { Button } from '../buttons/Button';
import ben_profile_photo from '../../public/assets/ben_profile_photo.png';
import Image from 'next/image';
import Head from 'next/head';
import * as Scroll from 'react-scroll';
import { useWindowSize } from '../../utils';

export const Header = () => {
    const ScrollLink = Scroll.Link;
    const [width, height] = useWindowSize();

    return (
        <Wrapper>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link
                    href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;1,300;1,400;1,700&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <Left>
                <Logo>
                    <Image src={ben_profile_photo} alt="logo" width={50} height={50} layout="fixed" />
                </Logo>
            </Left>
            <Right>
                <Buttons>
                    <ScrollLink activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={500}>
                        <Button title="Get In Touch" size={14} onClick={() => null} />
                    </ScrollLink>
                    {width > 768 && (
                        <Link href="https://github.com/BenMcLoughlin/bens-portfolio-website" passHref>
                            <a target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                <Button title="View This Repo" icon="github" size={14} onClick={() => null} />
                            </a>
                        </Link>
                    )}
                </Buttons>
            </Right>
        </Wrapper>
    );
};

// ---------------------------STYLES-------------------------------------------//

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
`;
const Left = styled.div`
    width: 30%;
    display: flex;
    justify-content: left;
`;
const Logo = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: flex-start;
    position: relative;
`;
const Buttons = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: -15px;
    width: 40%;
    align-items: center;
    @media (max-width: 768px) {
        width: 100%;
    }
    @media (max-width: 400px) {
        flex-direction: column;
        gap: 1px;
    }
`;

const Right = styled.div`
    width: 70%;
    display: flex;
    align-items: center;
    flex-wrap: wrap-reverse;
    justify-content: flex-end;
    gap: 30px;
    padding-right: 20px;
`;
