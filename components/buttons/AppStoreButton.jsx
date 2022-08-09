/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import apple_app_store from '../../public/assets/apple_app_store.png';
import google_play_store from '../../public/assets/google_play_store.png';

export const AppStoreButton = ({ store }) => {
    const [link, setLink] = useState('https://apps.apple.com/us/app/shophopper/id1604915084');
    const [buttonImage, setButtonImage] = useState(apple_app_store);

    useEffect(() => {
        if (store === 'google') {
            setLink('https://play.google.com/store/apps/details?id=com.shophopper.app');
            setButtonImage(google_play_store);
        }
    }, []);

    return (
        <Wrapper>
            <LinkWrapper href={link} passHref>
                <a target="_blank" rel="noopener noreferrer">
                    <Image src={buttonImage} width={store === 'apple' ? 122 : 127} height={37} placeholder="blur" />
                </a>
            </LinkWrapper>
        </Wrapper>
    );
};

// ---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
    justify-content: space-around;
    background: black;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    cursor: pointer;
    padding: 4px;
    background: none;
`;
const LinkWrapper = styled(Link)`
    height: 100%;
    width: 100%;
`;
