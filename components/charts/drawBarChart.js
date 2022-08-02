import * as d3 from 'd3';
import { attachTooltip } from './attachTooltip';
import { asCssId } from '../../utils';

export function drawBarChart(data, height, width, chartId) {
    const sideMargin = width > 500 ? 150 : 5;
    const margin = { top: 20, right: sideMargin, bottom: 50, left: sideMargin };
    const graphHeight = height - margin.top - margin.bottom;
    const graphWidth = width - margin.left - margin.right;
    // console.log('/drawBarChart.js - dada: ', data);
    const chartName = 'barChart';
    function update() {
        d3.select(`#${chartId}`).selectAll('*').remove();

        const svg = d3.select(`#${chartId}`).append('svg').attr('width', width).attr('height', height);

        const graph = svg
            .append('g')
            .attr('class', chartName)
            .attr('transform', `translate(${margin.left}, ${margin.top})`);

        const max = 200;

        const yScale = d3.scaleLinear().range([graphHeight, 0]).domain([0, height]);

        const xScale = d3
            .scaleBand()
            .domain(data.map((d) => d.period))
            .range([0, graphWidth])
            .paddingInner(0.1)
            .paddingOuter(0.1);

        const firstExample = Object.keys(data[0]);

        const stackedKeys = [];

        data.map((d) => Object.keys(d).forEach((key) => !stackedKeys.includes(key) && stackedKeys.push(key)));

        const colors = [
            '#B0CFE3',
            '#FEDE76',
            '#4BB9D0',
            '#81CCAF',
            '#78b7bb',
            '#D4D4D4',
            '#b8d496',
            '#a4d7e1',
            '#F7CDAB',
            '#6f9998',
            '#D8BABB',
            '#f1e9dd',
            '#e4f6b0',
            '#cadde2',
            '#c8bcbc',
            '#ac92a6',
            '#ff9a5b',
            '#d4a0a7',
            '#bbd8cf',
            '#e86f68',
            '#66cdaa',
            '#e2d9b3',
            '#72929B',
            '#f5aaaa',
            '#cadde2',
            '#9fb1b9',
            '#ffc383',
            '#81d2cb',
            '#D4D4D4',
            '#96ceb4',
            '#ffdc73',
            '#e1e2d3',
            '#ffe0c0',
            '#a1cfce',
            '#c6d5ad',
            '#008080',
            '#f08080',
            '#576675',
            '#ffe4e1',
            '#fcbf93',
            '#e5b5d4',
            '#88a99d'
        ];

        const stack = d3.stack().keys(stackedKeys).offset(d3.stackOffsetDiverging);

        const series = stack(data);

        const stacks = graph.append('g').selectAll('g').data(series);

        const rects = stacks
            .enter()
            .append('g')
            .attr('fill', (d, i) => colors[i])

            .attr('id', (d, i) => asCssId(d.key))
            .selectAll('rect')
            .data((d) => d);

        rects
            .enter()
            .append('rect')
            .attr('class', (d) => {
                return `${chartId}Rect`;
            })
            .attr('cursor', `pointer`)
            .attr('stroke-width', 4)

            .attr('x', (d) => xScale(d.data.period))
            .attr('width', xScale.bandwidth())
            .attr('height', 0)
            .attr('y', (d, i, a) => graphHeight)
            .merge(rects)
            .transition()
            .duration(900)
            .attr('height', (d) => {
                let bottom = d[0] === null ? 0 : d[0];
                return graphHeight - yScale(d[1] - bottom);
            })
            .attr('y', (d, i, a) => yScale(d[1]));

        const axis = graph
            .append('g')
            .attr('class', 'axis')
            .call(d3.axisBottom(xScale))
            .attr('transform', `translate(0 ${graphHeight})`);

        attachTooltip(graph, xScale, yScale, graphHeight, chartId, graphWidth);
    }

    update();
}
