import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import { CheckCircle } from '@styled-icons/bootstrap/CheckCircle';
import { CloseCircle } from '@styled-icons/evaicons-solid/CloseCircle';

export const Toast = ({ text = '', type = 'success', className }) => {
    const [appear, setAppear] = useState(false);

    useEffect(() => {
        setAppear(true);

        setTimeout(() => {
            setAppear(false);
        }, 4000);
    }, []);
    console.log('Hello from Toast');
    return (
        <div className={className}>
            {appear && (
                <TransitionIn in={appear} mountOnEnter unmountOnExit timeout={1000} classNames="transition-back">
                    <Wrapper length={text.length}>
                        <Bar type={type} />
                        <IconWrapper type={type}>{type === 'success' ? <CheckCircle /> : <CloseCircle />}</IconWrapper>
                        <Text>{text}</Text>
                        <IconWrapper>
                            <CloseCircle
                                style={{ color: 'grey', cursor: 'pointer' }}
                                onClick={() => {
                                    setAppear(false);
                                }}
                            />
                        </IconWrapper>
                    </Wrapper>
                </TransitionIn>
            )}
        </div>
    );
};

export const Wrapper = styled.div`
    border: 1px solid grey;
    width: 350px;
    height: 50px;
    background: white;
    position: fixed;
    top: 0px;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 20px;
    gap: 20px;
    overflow: hidden;
    -webkit-box-shadow: 0px 11px 19px -6px #c4c4c4;
    box-shadow: 0px 11px 19px -6px #c4c4c4;
    z-index: 10000;
    @media (max-width: 600px) {
        width: 270px;
    }
`;

export const Bar = styled.div`
    height: 100%;
    width: 5px;
    color: #fff;
    background: ${(p) => (p.type === 'success' ? '#4ba489' : '#E18D7A')};
    cursor: pointer;
    transition: all 0.15s;
`;

const IconWrapper = styled.div`
    height: 20px;
    width: 20px;
    color: ${(p) => (p.type === 'success' ? '#4ba489' : '#E18D7A')};
    cursor: pointer;
    z-index: 5;
`;

export const Text = styled.div`
    font-weight: normal;
    padding-right: 22px;
    font-size: 14px;
`;

const fadeInRight = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(20%, 0, 0);
  }
  30% {
    opacity: 0;
    transform: translate3d(20%, 0, 0);
  }
  100% {opacity: 1;
        transform: 
        translate3d(0, 0, 0);
  }
`;

const fadeOut = keyframes`
  0% { opacity: 1;}
  30% { opacity: 0;}
  100% {opacity: 0;}
`;

const fadeInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(-20%, 0, 0);
  }

  30% {
    opacity: 0;
    transform: translate3d(-20%, 0, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const TransitionIn = styled(CSSTransition)`
    &.transition-forward-enter-active {
        animation-name: ${fadeInLeft};
        animation-duration: 1s;
    }
    &.transition-back-enter-active {
        animation-name: ${fadeInRight};
        animation-duration: 1s;
    }
    &.transition-forward-exit-active,
    &.transition-back-exit-active {
        animation-name: ${fadeOut};
        animation-duration: 1.1s;
    }
`;
