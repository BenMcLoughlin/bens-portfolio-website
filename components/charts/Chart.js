/* eslint-disable */
import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { drawBarChart } from './drawBarChart';
import { formatChartData, useWindowSize } from '../../utils';
import chartData from '../../data/tymeData2018.json';
import { Text, Row, Column } from '../html';
import { RowSingleSelect } from '../buttons';
import { chartColors } from '../../styles/chartColors';

export const Chart = ({ year, title }) => {
    const [total, setTotal] = useState(0);
    //  const [width, setWidth] = useState(0);
    const [selectedYear, setSelectedYear] = useState(2019);
    const [tasks, setTasks] = useState({});
    const canvasRef = useRef(null);
    const [width, height] = useWindowSize();

    useEffect(() => {
        const { data, total, tasks } = formatChartData(chartData, selectedYear);
        const chartHeight = width > 768 ? 300 : 250;
        setTasks(tasks);
        setTotal(total);
        drawBarChart(data, chartHeight, width * 0.8, 'chart');

        setTotal(total.toFixed());
    }, [selectedYear, width]);

    return (
        <Wrapper>
            {width > 768 && (
                <Row alignContent="center" marginLeft="12%" mobile_marginLeft="2%">
                    <YearCell>
                        <Year fontSize={25}>{selectedYear}</Year>
                        <Hr />
                        <Hours fontSize={14}>{total} hrs</Hours>
                    </YearCell>
                    <Vr />
                    {Object.entries(tasks)
                        .slice(0, 4)
                        .map(([task, value]) => (
                            <Cell>
                                <Task>{task}</Task>
                                <Hr />
                                <Circle color={chartColors[task]} />
                                <Hours>{value.toFixed()} hrs</Hours>
                            </Cell>
                        ))}
                </Row>
            )}

            <Canvas id="chart" ref={canvasRef} />
            <Column width="100%" alignItems="center">
                <RowSingleSelect
                    width="100%"
                    options={[2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025]}
                    handleChange={(year) => setSelectedYear(year)}
                    selected={selectedYear}
                />
            </Column>
        </Wrapper>
    );
};

//---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 10px;
    height: 400px;
    flex-direction: column;
    align-items: flex-start;
    @media (max-width: 768px) {
        height: 300px;
    }
`;

const Canvas = styled.div`
  width: 100%;
  height 100%;
  position: relative;

`;

const YearCell = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 5px;
    min-width: 70px;
`;

const Hours = styled.div`
    font-size: 12px;
    color: ${(p) => p.theme.color.grey.lightest};
`;

const Year = styled.div`
    font-size: 20px;
    color: ${(p) => p.theme.color.grey.lightest};
    font-weight: bold;
`;

const Task = styled.div`
    font-size: 14px;
    color: ${(p) => p.theme.color.grey.lightest};
`;

const Cell = styled.div`
    min-width: 70px;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    gap: 5px;
    position: relative;
`;

const Circle = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 100%;
    position: absolute;
    background: ${(p) => p.color};
    bottom: 2px;
    left: 2px;
`;

const Hr = styled.div`
    height: 1px;
    width: 100%;
    background: ${(p) => p.theme.color.border.light}};
`;

const Vr = styled.div`
    height: 100%;
    width: 1px;
    background: ${(p) => p.theme.color.border.light};
`;
