/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

export const FormText = ({ handleChange, value = '', label = '', handleErrors, type, setErrors, errorMsg, fields }) => {
    const [blurred, setBlurred] = useState(false);
    const [wasValid, setWasValid] = useState('');
    const [error, setError] = useState(false);

    const isValidEmail = (val) =>
        !/.+@.+\..+/.test(val) ? setError('Please provide a valid email address.') : setError('');

    useEffect(() => {
        if (label === 'Email' && value.length > 2 && (blurred || wasValid)) {
            isValidEmail(value);
        }
    }, [value, handleErrors, blurred, error, wasValid]);

    return (
        <Wrapper>
            <Input
                id={label}
                name={label}
                type={type}
                value={value}
                onChange={(e) => handleChange(e)}
                placeholder={''}
                onBlur={() => setBlurred(true)}
            />
            <Label textValue={value} htmlFor={label}>
                <LabelText>{label}</LabelText>
            </Label>
            <Error error={error}>{error}</Error>
        </Wrapper>
    );
};

// ---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
    position: relative;
    height: 85px;
    width: 45%;
    @media (max-width: 768px) {
        width: 100%;
    }
`;

const Input = styled.input`
    position: absolute;
    border: none;
    width: 100%;
    top: 5px;
    height: 65px;
    padding: 5px 0 5px 20px;
    font-size: 18px;
    position: relative;
    background: transparent;
    border: none;
    color: #2e3339;
    border-bottom: 1px solid ${(props) => props.theme.color.brand.primary};
    z-index: 2;
    &:focus {
        outline: none;
        border-bottom: 1px solid ${(props) => props.theme.color.brand.primary};
        color: ${(props) => props.theme.color.grey.dark};
        font-size: 18px;
    }
`;

// @media (max-width: 900px) {
//      width: 270px;
//  }
const moveLabelUp = `
    top: -3px;
    font-size: 14px;
    left 27px;
    height: 10px;
    font-weight: bold;
    width: auto;
    padding: 0px;
`;

const Label = styled.label`
    width: 20px;
    position: absolute;
    top: 18px;
    z-index: 2;
    left 30px;
    cursor: text;
    display: flex;
    font-size: 18px;
    justify-content: center;
    width: auto;
    padding: 5px;
    align-items: center;
    color:  ${(props) => props.theme.color.brand.primary};
        ${Input}:focus ~ & {
    ${moveLabelUp}
    

  };
  ${(props) => props.textValue.toString().length > 0 && moveLabelUp};
  transition: all .5s ease;
`;

const LabelText = styled.div`
    z-index: 2;
    width: auto;
    margin-bottom: 10px; ;
`;

const Error = styled.div`
    width: 30%;
    border-radius: 7px;
    margin: 0 auto;
    margin-top: -2px;
    padding: 10px;
    text-align: center;
    color: ${(p) => (p.error ? '#F73D28' : 'none')};
    font-weight: bold;
    z-index: 3;
    position: relative;
    font-size: 14;
    transition: all 0.4s ease;
    @media (max-width: 768px) {
        flex-direction: column;
        width: 80%;
    }
`;
