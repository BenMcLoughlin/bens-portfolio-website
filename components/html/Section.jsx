import React from 'react';
import styled from 'styled-components';
import { StyledWrapper } from './StyledWrapper';

export const Section = (props) => {
    const { children } = props;

    return <Wrapper {...props}>{children}</Wrapper>;
};

//  ----------------------------STYLES-------------------------------------------//

const Wrapper = styled(StyledWrapper)`
    align-items: center;
    align-content: center;
    background: ${(p) =>
        p.backgroundColor || p.background === 'secondary' ? p.theme.color.background.secondary : 'transparent'};
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    width: 100%;
    position: relative;
    padding-top: 45px;
    padding-right: 10%;
    padding-left: 10%;
    padding-bottom: 65px;
    text-align: center;
    margin: 0 auto;

    @media (max-width: 1000px) {
        padding-top: 15px;
        padding-right: 5%;
        padding-left: 5%;
        padding-bottom: 25px;
    }
    @media (max-width: 768px) {
        padding-top: 15px;
        padding-right: 2%;
        padding-left: 2%;
        padding-bottom: 25px;
    }
`;
