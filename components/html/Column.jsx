import React from 'react';
import styled from 'styled-components';
import { StyledWrapper } from './StyledWrapper';

export const Column = (props) => {
    const { children } = props;

    return <Wrapper {...props}>{children}</Wrapper>;
};

//  ----------------------------STYLES-------------------------------------------//

const Wrapper = styled(StyledWrapper)`
    align-items: center;
    align-content: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;

    position: relative;
`;
// @media (max-width: 900px) {
//     width: 100%;
//     margin: 0 auto;
// }
