/* eslint-disable react/prop-types */
import React, { useState, useEffect, Children, cloneElement } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { useWindowSize } from '../../utils';

export function Carousel(props) {
    const { children } = props;
    const [selectedIndex, setCurrentIndex] = useState(0);

    const [size] = useWindowSize();

    useEffect(() => {
        if (children[selectedIndex]?.props?.hasOwnProperty('onMouseOver')) {
            children[selectedIndex]?.props?.onMouseOver();
        }
    }, [selectedIndex]);

    const modules = size > 768 ? [Pagination, Navigation, Autoplay] : [Autoplay];

    return (
        <Wrapper {...props}>
            <Swiper
                pagination={true}
                navigation={true}
                autoplay={{ delay: 3000 }}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
                onSlideChange={(e) => setCurrentIndex(e.realIndex)}>
                {Children.map(children, (child, index) => {
                    return (
                        child &&
                        cloneElement(
                            <SwiperSlide>
                                <Content>{child}</Content>
                            </SwiperSlide>
                        )
                    );
                })}
            </Swiper>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    width: ${(p) => p.width || '100%'};
    flex-direction: row;
    align-items: center;
    align-content: center;
    position: relative;
    z-index: 1;
    @media (max-width: 900px) {
        width: 100%;
    }
`;

const Content = styled.div`
    width: 60%;
    display: flex;
    justify-content: center;
    padding-bottom: 70px;
    @media (max-width: 900px) {
        width: 80%;
    }
`;
