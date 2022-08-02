import React from 'react';
import styled from 'styled-components';
import { StyledWrapper } from './StyledWrapper';

export const Row = (props) => {
    const { children } = props;

    return <Wrapper {...props}>{children}</Wrapper>;
};

//  ----------------------------STYLES-------------------------------------------//

const Wrapper = styled(StyledWrapper)`
    align-items: center;
    align-content: center;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex: 1;
    flex-wrap: wrap;
    gap: 20px;
    position: relative;
    @media (max-width: 768px) {
        flex-direction: column;
        width: 100%;
        margin: 0 auto;
    }
`;
