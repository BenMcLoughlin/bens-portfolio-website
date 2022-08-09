/* eslint-disable */
import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { drawBarChart } from './drawBarChart';
import { formatChartData, useWindowSize } from '../../utils';
import chartData from '../../data/tymeData2018.json';
import { Text, Row, Column } from '../html';
import { RowSingleSelect } from '../buttons';

export const Chart = ({ year, title }) => {
    const [total, setTotal] = useState(0);
    //  const [width, setWidth] = useState(0);
    const [selectedYear, setSelectedYear] = useState(2019);
    const canvasRef = useRef(null);
    const [width, height] = useWindowSize();

    useEffect(() => {
        const { data, total } = formatChartData(chartData, selectedYear);

        drawBarChart(data, 300, width * 0.9, 'chart');

        setTotal(total.toFixed());
    }, [selectedYear, width]);

    return (
        <Wrapper>
            <Column marginLeft="10%" mobile_marginLeft="0%" alignItems="flex-start">
                <RowSingleSelect
                    width="100%"
                    options={[2018, 2019, 2020, 2021, 2022]}
                    handleChange={(year) => setSelectedYear(year)}
                    selected={selectedYear}
                />
                <Text marginLeft="3%" fontSize={20}>
                    {total.toLocaleString()} Hours Coding
                </Text>
            </Column>

            <Canvas id="chart" ref={canvasRef} />
        </Wrapper>
    );
};

//---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 10px;
    flex-direction: column;
    align-items: flex-start;
    background: yellow;
`;

const Canvas = styled.div`
  width: 100%;
  height 100%;
  position: relative;

`;
