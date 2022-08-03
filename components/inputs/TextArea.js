/* eslint-disable react/display-name */
import React, { forwardRef, useState } from 'react';
import TextAreaAutoSize from 'react-textarea-autosize';
import styled, { css } from 'styled-components';
import { startCase } from '../../utils';

export const TextArea = forwardRef(({ className, invalid, value, label, onChange, ...textareaProps }, ref) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <StyledTextArea className={className} invalid={invalid}>
            <Label textValue={value} htmlFor={label}>
                <LabelText>{startCase(label)}</LabelText>
            </Label>
            <TextAreaAutoSize
                {...textareaProps}
                onChange={(event) => onChange(event)}
                inputRef={ref || undefined}
                id={label}
            />
        </StyledTextArea>
    );
});

export const StyledTextArea = styled.div`
    display: inline-block;
    position: relative;
    width: 100%;
    textarea {
        overflow-y: hidden;
        width: 100%;
        padding: 8px 12px 9px;
        border-radius: 7px;
        border: 1px solid ${(props) => props.theme.color.brand.primary};
        font-size: 18px;
        &:focus {
            outline: none;
            background: #fff;

            box-shadow: 0 0 0 1px grey;
        }
        ${(props) =>
            props.invalid &&
            css`
                &,
                &:focus {
                    outline: none;
                    border: 1px solid red;
                }
            `}
    }
`;

const Label = styled.label`
    width: 20px;
    position: absolute;
    top: 25px;
    z-index: 2;
    left 30px;
    cursor: text;
    display: flex;
    font-size: 18px;
    justify-content: center;
    padding: 5px;
    align-items: center;
    color:  ${(props) => props.theme.color.brand.primary};
    transition: all .5s ease;
    top: -12px;
    font-size: 14px;
    left 27px;
    height: 10px;
    font-weight: bold;
    width: auto;
    padding: 5px;
    background: white;
`;

const LabelText = styled.div`
    background: white;
    z-index: 2;
    width: auto;
    margin-bottom: 12px;
`;
