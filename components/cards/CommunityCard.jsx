import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { Text } from '../html';
import { LinkExternal } from '@styled-icons/octicons/LinkExternal';

export const CommunityCard = ({ imageSrc, text, link }) => {
    return (
        <Link href={link}>
            <a target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <Wrapper>
                    <LinkIcon />
                    <Image alt="profile" src={imageSrc} width={70} height={70} layout="fixed" />
                    <Hr />
                    <Text>{text} </Text>
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
    padding: 10px;
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

const Hr = styled.div`
    width: 80%;
    align-items: center;
    height: 1px;
    margin: 20px auto;
    border-bottom: 1px solid ${(p) => p.theme.color.grey.medium};
`;
const LinkIcon = styled(LinkExternal)`
    height: 30px;
    width: 30px;
    position: absolute;
    top: 10px;
    right: 10px;
    color: ${(p) => p.theme.color.brand.primary};
`;
