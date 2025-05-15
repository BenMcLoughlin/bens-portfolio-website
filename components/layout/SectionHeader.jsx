import React, { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import * as Scroll from 'react-scroll';
import { useWindowSize } from '../../utils/hooks/useWindowSize';
import { Row, Text, Column } from '../html';
import { theme } from '../../styles/theme';

export const SectionHeader = (props) => {
    const { number, text, title, noBottomBorder, stat1, sectionTheme } = props;
    const ScrollLink = Scroll.Link;
    const [width, height] = useWindowSize();

    const [menuOpen, setMenuOpen] = useState(false);

    const contrastColor = sectionTheme === 'dark' ? theme.color.grey.lightest : theme.color.brand.primary;

    return (
        <Wrapper menuOpen={menuOpen} {...props} contrastColor={contrastColor}>
            <TopBar contrastColor={contrastColor}>
                <Square contrastColor={contrastColor} />
                <Number>
                    <Text mobile_width="100%" fontWeight={200} color={contrastColor}>
                        {number}
                    </Text>
                    <Text mobile_width="100%" fontWeight={600} color={contrastColor}>
                        / 05
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
                <Text fontSize={14} width="20%" mobile_width="100%" textAlign="left" color={contrastColor}>
                    {text}
                </Text>
                <Hr contrastColor={contrastColor} />
                <Title contrastColor={contrastColor} color={contrastColor}>
                    {title}
                </Title>
                {width > 768 && stat1 && (
                    <Column alignItems="center" width={140} justifyContent="space-around">
                        <Text fontSize={40} width="100%" textAlign="left" color="white" mobile_width="90%">
                            7.9k
                        </Text>
                        <RotatedLine contrastColor={contrastColor} />
                        <Text fontSize={40} width="100%" textAlign="right" color={contrastColor}>
                            10k
                        </Text>
                    </Column>
                )}
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
    border-bottom: 1px solid ${(p) => (p.noBottomBorder ? 'none' : p.contrastColor)};
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
    border-bottom: 1px solid ${(p) => p.contrastColor};
    border-top: 1px solid ${(p) => p.contrastColor};
    background: transparent;
`;

const Hr = styled.div`
    width: 1px;
    align-items: center;
    height: 300px;
    margin-top: -50px;
    border-right: 1px solid ${(p) => p.contrastColor};
    @media (max-width: 768px) {
        height: 30px;
        width: 100%;
        border-right: none;
        border-bottom: 1px solid ${(p) => p.contrastColor};
    }
`;
const Square = styled.div`
    height: 50px;
    width: 30px;
    background: ${(p) => p.theme.color.brand.tertiary};
    border-bottom: 1px solid ${(p) => p.contrastColor};
    border-top: 1px solid ${(p) => p.contrastColor};
`;
const Title = styled.div`
    font-size: 50px;
    font-weight: 900;
    width: 40%;
    color: ${(p) => p.contrastColor};
    @media (max-width: 768px) {
        font-size: 30px;
        width: 100%;
    }
`;

const Number = styled.div`
    width: 50px;
    display: flex;
    justify-content: space-around;
`;

const RotatedLine = styled.div`
    position: absolute;
    top: 70px;
    right: 0;
    height: 1px;
    width: 100%;
    transform: rotate(135deg);
    background: ${(p) => p.contrastColor};
    @media (max-width: 768px) {
        flex-direction: column;
        width: 70%;
    }
`;
