/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { Github } from '@styled-icons/bootstrap/Github';

export const Button = ({ title = '', onClick, onSubmit = null, icon, background = 'primary', type, href }) => {
    const isLinkButton = href?.length > 0;
    return (
        <>
            {isLinkButton ? (
                <a href={href} style={{ textDecoration: 'none' }} onClick={onClick}>
                    <Wrapper type={type} background={background}>
                        <Title>{title}</Title>
                    </Wrapper>
                </a>
            ) : (
                <Wrapper
                    type={type}
                    background={background}
                    onClick={(e) => {
                        null;
                    }}
                    onSubmit={onSubmit && onSubmit}>
                    {icon === 'github' && <GithubIcon />}
                    <Title>{title}</Title>
                </Wrapper>
            )}
        </>
    );
};

// ---------------------------STYLES-------------------------------------------//

const Wrapper = styled.button`
    height: 45px;
    width: 140px;
    cursor: pointer;
    position: relative;
    display: flex;
    align-content: center;
    border-radius: 6px;
    padding: 0 20px 0 20px;
    justify-content: space-around;
    border: 1px solid ${(p) => (p.background === 'transparent' ? 'grey' : 'white')};
    align-items: center;
    opacity: 1;
    margin-top: 14px;
    padding-left: 14px;
    padding-right: 14px;
    background: ${(p) => (p.background === 'transparent' ? 'transparent' : p.theme.color.brand[p.background])};
    color: ${(p) => (p.background === 'transparent' ? p.theme.color.grey.dark : 'white')};
    text-decoration: none;
<<<<<<< HEAD
    underline: none;
    color: white;
    &:active {
        text-decoration: none;
    }
=======
>>>>>>> 8074f6530018d028604ef08479e5f0488bfa0d12
    &:hover {
        background: ${(p) => p.background};
    }
    z-index: 3;
    transition: all 0.6s ease;
`;

const Title = styled.div`
    font-family: 'Lato', sans-serif;
    font-size: 14px;
    font-weight: 400;
<<<<<<< HEAD
    &:visited {
        color: red;
    }
=======
>>>>>>> 8074f6530018d028604ef08479e5f0488bfa0d12
`;

const GithubIcon = styled(Github)`
    height: 20px;
    width: 20px;
    color: ${(p) => p.theme.color.grey.lightest};
    cursor: pointer;
`;
