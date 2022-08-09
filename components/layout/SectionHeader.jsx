import React, { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import * as Scroll from 'react-scroll';
import { useWindowSize } from '../../utils/hooks/useWindowSize';
import { Row, Text } from '../html';
import { theme } from '../../styles/theme';

export const SectionHeader = (props) => {
    const { number, text, title } = props;
    const ScrollLink = Scroll.Link;
    const [width, height] = useWindowSize();

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Wrapper menuOpen={menuOpen} {...props}>
            <TopBar>
                <Square />
                <Number>
                    <Text mobile_width="100%" fontWeight={200}>
                        {number}
                    </Text>
                    <Text mobile_width="100%" fontWeight={600} color={'#C4C4C4'}>
                        /05
                    </Text>
                </Number>
            </TopBar>
            <Row
                padding={0}
                justifyContent="flex-start"
                mobile_justifyContent="space-around"
                alignItems="center"
                width="100%"
                mobile_flexDirection="column-reverse">
                <Text width="20%" mobile_width="100%" textAlign="left">
                    {text}
                </Text>
                <Hr />
                <Title>{title}</Title>
                <Stats />
            </Row>
        </Wrapper>
    );
};

// ---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
    height: 300px;
    width: 100%;
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    padding-bottom: 15px;

    position: relative;
    border-bottom: 1px solid ${(p) => p.theme.color.border.medium};
    @media (max-width: 768px) {
        width: 90%;
        height: 220px;
        justify-content: center;
    }
`;
const TopBar = styled.div`
    width: 100%;
    align-items: center;
    height: 50px;
    display: flex;
    justify-content: flex-start;
    gap: 10px;
    border-bottom: 1px solid ${(p) => p.theme.color.border.medium};
    border-top: 1px solid ${(p) => p.theme.color.border.medium};
    background: transparent;
`;

const Hr = styled.div`
    width: 1px;
    align-items: center;
    height: 300px;
    margin-top: -50px;
    border-right: 1px solid ${(p) => p.theme.color.border.medium};
    @media (max-width: 768px) {
        height: 30px;
        width: 100%;
        border-right: none;
        border-bottom: 1px solid ${(p) => p.theme.color.border.medium};
    }
`;
const Square = styled.div`
    height: 50px;
    width: 30px;
    background: ${(p) => p.theme.color.brand.tertiary};
    border-bottom: 1px solid ${(p) => p.theme.color.border.medium};
    border-top: 1px solid ${(p) => p.theme.color.border.medium};
`;
const Title = styled.div`
    font-size: 50px;
    font-weight: 900;
    width: 40%;
    color: ${(p) => p.theme.color.text.primary};
    @media (max-width: 768px) {
        font-size: 30px;
        width: 100%;
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
