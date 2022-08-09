import * as d3 from 'd3';
import { attachTooltip } from './attachTooltip';
import { asCssId } from '../../utils';
import { chartColors } from '../../styles/chartColors';

export function drawBarChart(data, height, width, chartId) {
    const sideMargin = width > 500 ? 150 : 5;
    const margin = { top: 20, right: sideMargin, bottom: 50, left: sideMargin };
    const graphHeight = height - margin.top - margin.bottom;
    const graphWidth = width - margin.left - margin.right;

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

        const stackedKeys = [];

        data.map((d) => Object.keys(d).forEach((key) => !stackedKeys.includes(key) && stackedKeys.push(key)));

        const stack = d3.stack().keys(stackedKeys).offset(d3.stackOffsetDiverging);

        const series = stack(data);

        const stacks = graph.append('g').selectAll('g').data(series);

        const rects = stacks
            .enter()
            .append('g')
            .attr('fill', (d, i) => chartColors[d.key])

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

        graph
            .append('g')
            .attr('class', 'axis')
            .call(d3.axisBottom(xScale))
            .attr('transform', `translate(0 ${graphHeight})`);

        attachTooltip(graph, xScale, yScale, graphHeight, chartId, graphWidth);
    }

    update();
}
