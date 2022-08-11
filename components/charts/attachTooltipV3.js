import * as d3 from 'd3';
import { asCssId } from '../../utils';

export const attachTooltip = (graph, xScale, yScale, graphHeight, chartId, graphWidth) => {
    const tooltip = d3
        .select(`#${chartId}`)
        .append('div')
        .style('opacity', 0)
        .style('position', 'absolute')
        .style('top', 0)
        .style('left', 0)
        .style('background', 'none');

    let value = 0;
    let totalValue = 0;
    let topValue = 0;
    let x = 0;
    let y = 0;
    let task = '';
    let text = '';
    let total = '';
    let d = {};

    d3.selectAll(`.${chartId}Rect`)
        .on('mouseover', (e, hovered, i) => {
            value = hovered[1] - hovered[0];
            console.log('/attachTooltip.js - hovered: ', hovered);
            task =
                Object.entries(hovered.data).find(
                    ([k, v]) => typeof v === 'number' && v.toFixed() === value.toFixed()
                )?.[0] || 'bottom';

            totalValue = Object.entries(hovered.data).reduce((acc, [k, v]) => {
                return typeof v === 'number' ? acc + v : acc;
            }, 0);

            text = `${task} - ${value.toFixed()} hrs`;

            total = `${hovered.data.period} - ${totalValue.toFixed()} hrs`;

            d = hovered;
            topValue = d[1] > 0 ? d[1] : d[0];

            x = Math.min(xScale(hovered.data.period) + graphWidth * 0.04, graphWidth * 0.86);
            y = yScale(topValue * 1.2);

            addLineAndCircle();

            label(text)
                .attr('id', 'showsOnMouseOver')
                .attr('transform', `translate(${x * 1.05} ${y})`);

            label(total)
                .attr('id', 'showsOnMouseOver')
                .attr('transform', `translate(${xScale(hovered.data.period)} ${0})`);

            d3.selectAll(`#${asCssId(task)}`).attr('opacity', '0.6');
        })
        .on('mouseout', (e, hovered, i, n) => {
            const value = hovered[1] - hovered[0];

            const task =
                Object.entries(hovered.data).find(
                    ([k, v]) => typeof v === 'number' && v.toFixed() === value.toFixed()
                )?.[0] || 'bottom';

            d3.selectAll('#showsOnMouseOver').remove();
            d3.selectAll(`#${asCssId(task)}`).attr('opacity', '1');
            d3.selectAll(`line`).remove();
        });

    d3.selectAll(`#showsOnMouseOver`).on('mouseover', (e, hovered, i) => {
        addLineAndCircle();

        label(text)
            .attr('id', 'showsOnMouseOver')
            .attr('transform', `translate(${x * 1.05} ${y})`);

        label(total)
            .attr('id', 'showsOnMouseOver')
            .attr('transform', `translate(${xScale(hovered.data.period)} ${0})`);

        d3.selectAll(`#${asCssId(task)}`).attr('opacity', '0.6');
    });

    function label(text) {
        const label = graph.append('g');

        label
            .append('rect')
            .attr('height', '30px')
            .attr('width', `${3 + text.length * 10}px`)
            .attr('rx', `5px`)
            .attr('ry', `5px`)
            .attr('fill', '#72706E')
            .attr('stroke-width', 2)
            .attr('opacity', 0.6);

        label
            .append('text')
            .attr('r', 155)
            .attr('height', '15px')
            .attr('width', '3rem')
            .attr('font-size', '15px')
            .attr('margin-left', '2rem')
            .text(text)
            .attr('fill', 'white')
            .attr('x', '15px')
            .attr('y', '20px');

        return label;
    }

    function addLineAndCircle() {
        graph
            .append('line')
            .attr('id', `showsOnMouseOver`)
            .attr('x1', xScale(d.data.period) + graphWidth * 0.04)
            .attr('x2', xScale(d.data.period) + graphWidth * 0.04)
            .attr('y1', '30px')
            .attr('y2', graphHeight)
            .attr('stroke-width', 2)
            .attr('stroke', '#72929B')
            .attr('stroke-dasharray', '5')
            .attr('stroke-linecap', 'round')
            .attr('id', 'areaLineRect');

        graph
            .append('circle')
            .attr('id', `showsOnMouseOver`)
            .attr('r', 5)
            .attr('cx', xScale(d.data.period) + graphWidth * 0.04)
            .attr('cy', yScale(d[1]))
            .attr('fill', 'white')
            .attr('stroke-width', 2)
            .attr('stroke', '#72929B');
    }
};
