import React from 'react';
import styled from 'styled-components';
import { StyledWrapper } from './StyledWrapper';

export const Text = (props) => {
    const { children } = props;

    return <Wrapper {...props}>{children}</Wrapper>;
};

//  ----------------------------STYLES-------------------------------------------//

const Wrapper = styled(StyledWrapper)`
    font-size: 16px;
    line-height: 140%;
    font-weight: ${p => p.fontWeight || 300};
    letter-spacing: 0px;
    color: ${(p) => p.theme.color.brand.primary};
    font-family: 'Lato', sans-serif;
    @media (max-width: 768px) {
        font-size: 14px;
    }
`;
