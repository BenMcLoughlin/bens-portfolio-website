import React from 'react';
import styled from 'styled-components';

export const ArrowStack = () => {
    return (
        <Wrapper>
            <CustomRow>
                <Arrow />
            </CustomRow>
            <CustomRow>
                <Arrow color="#E18D7A" />
                <Arrow />
            </CustomRow>
            <CustomRow>
                <Arrow />
                <Arrow />
            </CustomRow>
            <CustomRow>
                <Arrow />
                <Arrow />
                <Arrow />
                <Arrow />
            </CustomRow>
        </Wrapper>
    );
};

//  ----------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    position: absolute;
    top: 170px;
    right: 30px;
    height: 100%;
    gap: 10px;
    @media (max-width: 768px) {
        top: 260px;
        width: 220px;
    }
`;

const Arrow = styled.div`
    background: ${(p) => p.color || p.theme.color.brand.primary};
    height: 80px;
    width: 50px;
    transform: rotate(-45deg);
    clip-path: polygon(0 0, 50% 30%, 100% 0, 100% 65%, 50% 100%, 0 70%);
    @media (max-width: 768px) {
        opacity: 0.3;
        height: 48px;
        width: 30px;
    }
`;

const CustomRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
    align-content: flex-end;
    gap: 28px;
    align-items: flex-end;
`;
