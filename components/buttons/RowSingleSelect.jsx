import React, { useState } from 'react';
import styled from 'styled-components';

export const RowSingleSelect = ({ options, selected, handleChange }) => {
    const { length } = options;
    const positionIndex = options.findIndex((d) => d === selected);
    return (
        <Wrapper>
            <Options length={length}>
                {options.map((option, i) => (
                    <Option
                        id={`option_${i + 1}`}
                        key={i}
                        className={'enablesTransition'}
                        onClick={() => handleChange(option)}
                        selected={option === selected}>
                        {option}
                    </Option>
                ))}
                <Pill selected={selected} positionIndex={positionIndex}></Pill>
            </Options>
        </Wrapper>
    );
};

//---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
    height: 30px;
`;

const Option = styled.div`
    position: relative;
    width: 70px;
    min-height: 20px;
    transition: all 0.5s ease;
    text-align: center;
    z-index: 1;
    margin: 0px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(p) => (p.selected ? 'white' : 'black')};
    @media (max-width: 768px) {
        width: 55px;
    }
`;
const Options = styled.div`
    display: flex;
    margin: 0px;
    padding: 0px;
    flex-direction: row;
    position: relative;
`;

const Pill = styled.div`
        position: absolute;
        min-width: 60px;
        height: 30px;
        top: -3px;
        left: 5px;
        background-color: ${(p) => p.theme.color.brand.primary};
        transform: ${(props) => `translate(${props.positionIndex * 70}px, 0)`};
        transition: all .3s ease;
        border-radius: 5px;
        animation: 0.2s cubic-bezier(0.645, 0.045, 0.355, 1) 0s 1 normal forwards running fmdUjs;
        @media (max-width: 768px) {
            transform: ${(props) => `translate(${props.positionIndex * 55}px, 0)`};
            left: 0px;
            min-width: 55px;
        }
   
}
`;
