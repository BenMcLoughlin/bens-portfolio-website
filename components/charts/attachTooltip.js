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
    let lineIsHovered = false;


    d3.selectAll(`.${chartId}Rect`)
        .on('mouseover', (e, hovered, i) => {
            value = hovered[1] - hovered[0];
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

            x = Math.min(xScale(d.data.period), graphWidth * 0.86);
            y = yScale(Math.max(topValue * 1.4, 70));

            lineIsHovered = false;
            graph
                .append('line')
                .attr('id', `showsOnMouseOver`)
                .attr('x1', xScale(d.data.period))
                .attr('x2', xScale(d.data.period))
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
                .attr('cx', xScale(d.data.period))
                .attr('cy', yScale(d[1]))
                .attr('fill', 'white')
                .attr('stroke-width', 2)
                .attr('stroke', '#72929B');

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

            console.log('/attachTooltip.js - lineIsHovered: ', lineIsHovered);

            if (!lineIsHovered) {
                d3.selectAll('#showsOnMouseOver').remove();
            }

            d3.selectAll(`#${asCssId(task)}`).attr('opacity', '1');
            d3.selectAll(`line`).remove();
        });

    function label(text) {
        const label = graph.append('g');

        label
            .append('rect')
            .attr('id', `${chartId}Rect`)
            .attr('height', '30px')
            .attr('width', `${3 + text.length * 10}px`)
            .attr('rx', `5px`)
            .attr('ry', `5px`)
            .attr('fill', '#72706E')
            .attr('stroke-width', 2)
            .attr('opacity', 0.6);

        label
            .append('text')
            .attr('id', `${chartId}Rect`)
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
};
