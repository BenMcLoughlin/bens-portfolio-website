import * as d3 from 'd3';
import { asCssId } from '../../utils';

const styles = {
    wrapper: `
display: flex;
flex-direction: column;    
height: 60px;
width: 220px;
display: flex;
background: #72706E;
border-radius: 10px;

align-items: center;
align-content: center;
position: relative;
padding: 10px;
`,
    period: `

      display: flex;
      opacity: 1;
      color: white;
      font-size: 14px;
      font-weight: bold;
`,
    value: `
      display: flex;
      opacity: 1;
      color: white;
      font-size: 14px;
`,
    arrow: `
      position: absolute;
      bottom: -10px;
      left: 55;
      height: 20px;
       width: 20px;
       background: #72706E;
       transform:rotate(45deg);
`
};

export const attachTooltip = (graph, xScale, yScale, graphHeight, chartId) => {
    const tooltip = d3
        .select(`#${chartId}`)
        .append('div')
        .style('opacity', 0)
        .style('position', 'absolute')
        .style('top', 0)
        .style('left', 0)
        .style('background', 'none');

    d3.selectAll(`.${chartId}Rect`)
        .on('mouseover', (e, hovered, i) => {
            const value = hovered[1] - hovered[0];

            const task =
                Object.entries(hovered.data).find(
                    ([k, v]) => typeof v === 'number' && v.toFixed() === value.toFixed()
                )?.[0] || 'bottom';

            console.log('/attachTooltip.js - hovered: ', hovered);
            tooltip
                .transition()
                .duration(200)
                .style('top', `${yScale(hovered[1]) - 15}px`)
                .style('left', `${xScale(hovered.data.period) + xScale.bandwidth()}px`)
                .style('opacity', 1)
                .style('pointer-events', 'none');

            tooltip.html(
                `
                                        <div style="${styles.wrapper}">
                                             <div style="${styles.period}">
                                             ${task}
                                             </div>
                                             <div style="${styles.value}">
                                             ${value.toFixed()}
                                             </div>
                                             <div style="${styles.arrow}"/>
                                        </div>
                                        `
            );

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
};
