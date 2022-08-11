import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { Text } from '../html';
import { LinkExternal } from '@styled-icons/octicons/LinkExternal';

export const CommunityCard = ({ imageSrc, text, title, link }) => {
    return (
        <Link href={link}>
            <a target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <Wrapper>
                    <TopColor />
                    <LinkIcon />
                    <Title>{title}</Title>
                    <LogoImageWrapper>
                        <Image alt="profile" src={imageSrc} width={70} height={70} layout="fixed" />
                    </LogoImageWrapper>

                    <Text fontSize={14} marginTop="30px" padding={15} textAlign="left">
                        {text}{' '}
                    </Text>
                </Wrapper>
            </a>
        </Link>
    );
};

//  ----------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
    width: 200px;
    height: 250px;
    border-radius: 10px;
    background: ${(p) => p.theme.color.grey.lightest};
    box-shadow: 0px 15px 20px 4px rgba(0, 0, 0, 0.17);
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: pointer;
    transition: all 0.4s ease;
    &:hover {
        box-shadow: 0px 25px 30px 14px rgba(0, 0, 0, 0.17);

        margin-top: -10px;
    }
`;

const TopColor = styled.div`
    height: 60px;
    width: 100%;
    border-radius: 10px 10px 0px 0px;
    background: ${(p) => p.theme.color.brand.secondary};
`;

const LinkIcon = styled(LinkExternal)`
    height: 30px;
    width: 30px;
    position: absolute;
    bottom: 10px;
    right: 10px;
    color: ${(p) => p.theme.color.brand.primary};
`;

const LogoImageWrapper = styled.div`
    height: 76px;
    width: 76px;
    position: absolute;
    top: 10px;
    border-radius: 50%;
    left: 10px;
    border: 3px solid white;
    color: ${(p) => p.theme.color.brand.primary};
`;
const Title = styled.div`
    position: absolute;
    top: 20px;
    width: 55%;
    text-align: center;
    font-size: 14px;
    font-weight: bold;
    right: 10px;
    color: white;
`;
