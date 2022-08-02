import React from 'react';
import styled from 'styled-components';
import { StyledWrapper } from './StyledWrapper';

export const Div = (props) => {
    const { children } = props;

    return <Wrapper {...props}>{children}</Wrapper>;
};

//  ----------------------------STYLES-------------------------------------------//

const Wrapper = styled(StyledWrapper)`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 20px;
    position: relative;
`;

