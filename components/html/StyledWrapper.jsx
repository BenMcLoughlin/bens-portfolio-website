import React from 'react';
import styled from 'styled-components';

export const StyledWrapper = (props) => {
    const { children } = props;

    return <Wrapper {...props}>{children}</Wrapper>;
};

//  ----------------------------STYLES-------------------------------------------//

const withPx = (value) => (typeof value === 'string' ? value : `${value}px`);

const Wrapper = styled.div`
    align-content: ${(p) => withPx(p.alignContent)}!important;
    align-items: ${(p) => withPx(p.alignItems)}!important;
    align-self: ${(p) => withPx(p.alignSelf)}!important;
    background: ${(p) => p.background}!important;
    border: ${(p) => p.border}!important;
    border-bottom: ${(p) => withPx(p.borderBottom)}!important;
    border-left: ${(p) => withPx(p.borderLeft)}!important;
    border-right: ${(p) => withPx(p.borderRight)}!important;
    border-top: ${(p) => withPx(p.borderTop)}!important;
    color: ${(p) => withPx(p.color)}!important;
    cursor: ${(p) => withPx(p.cursor)}!important;
    flex-direction: ${(p) => p.flexDirection}!important;
    font-size: ${(p) => withPx(p.fontSize)}!important;
    font-style: ${(p) => withPx(p.fontStyle)}!important;
    font-weight: ${(p) => withPx(p.fontWeight)}!important;
    flex-wrap: ${(p) => withPx(p.flexWrap)}!important;
    grid-area: ${(p) => p.gridArea}!important;
    gap: ${(p) => withPx(p.gap)}!important;
    justify-content: ${(p) => p.justifyContent}!important;
    height: ${(p) => withPx(p.height)}!important;
    left: ${(p) => withPx(p.left)}!important;
    letter-spacing: ${(p) => withPx(p.letterSpacing)}!important;
    line-height: ${(p) => withPx(p.lineHeight)}!important;
    max-height: ${(p) => withPx(p.maxHeight)}!important;
    margin: ${(p) => withPx(p.margin)}!important;
    margin-bottom: ${(p) => withPx(p.marginBottom)}!important;
    margin-left: ${(p) => withPx(p.marginLeft)}!important;
    margin-right: ${(p) => withPx(p.marginRight)}!important;
    margin-top: ${(p) => withPx(p.marginTop)}!important;
    overflow: ${(p) => p.overflow}!important;
    opacity: ${(p) => p.opacity}!important;
    position: ${(p) => withPx(p.position)}!important;
    padding: ${(p) => withPx(p.padding)}!important;
    padding-bottom: ${(p) => withPx(p.paddingBottom)}!important;
    padding-left: ${(p) => withPx(p.paddingLeft)}!important;
    padding-right: ${(p) => withPx(p.paddingRight)}!important;
    padding-top: ${(p) => withPx(p.paddingTop)}!important;
    text-align: ${(p) => withPx(p.textAlign)}!important;
    text-decoration: ${(p) => withPx(p.textDecoration)}!important;
    text-indent: ${(p) => withPx(p.textIndent)}!important;
    text-transform: ${(p) => withPx(p.textTransform)}!important;
    top: ${(p) => withPx(p.top)}!important;
    vertical-align: ${(p) => withPx(p.verticalAlign)}!important;
    visibility: ${(p) => p.visibility}!important;
    width: ${(p) => withPx(p.width)}!important;
    z-index: ${(p) => withPx(p.zIndex)}!important;
    @media (max-width: 768px) {
        align-content: ${(p) => withPx(p.mobile_alignContent)}!important;
        align-items: ${(p) => withPx(p.mobile_alignItems)}!important;
        align-self: ${(p) => withPx(p.mobile_alignSelf)}!important;
        background: ${(p) => p.mobile_background}!important;
        border: ${(p) => p.mobile_border}!important;
        border-bottom: ${(p) => withPx(p.mobile_borderBottom)}!important;
        border-left: ${(p) => withPx(p.mobile_borderLeft)}!important;
        border-right: ${(p) => withPx(p.mobile_borderRight)}!important;
        border-top: ${(p) => withPx(p.mobile_borderTop)}!important;
        color: ${(p) => withPx(p.mobile_color)}!important;
        cursor: ${(p) => withPx(p.mobile_cursor)}!important;
        flex-direction: ${(p) => p.mobile_flexDirection}!important;
        font-size: ${(p) => withPx(p.mobile_fontSize)}!important;
        font-weight: ${(p) => withPx(p.mobile_fontWeight)}!important;
        grid-area: ${(p) => p.mobile_gridArea}!important;
        gap: ${(p) => withPx(p.mobile_gap)}!important;
        justify-content: ${(p) => p.mobile_justifyContent}!important;
        height: ${(p) => withPx(p.mobile_height)}!important;
        left: ${(p) => withPx(p.mobile_left)}!important;
        letter-spacing: ${(p) => withPx(p.mobile_letterSpacing)}!important;
        line-height: ${(p) => withPx(p.mobile_lineHeight)}!important;
        max-height: ${(p) => withPx(p.mobile_maxHeight)}!important;
        margin: ${(p) => withPx(p.mobile_margin)}!important;
        margin-bottom: ${(p) => withPx(p.mobile_marginBottom)}!important;
        margin-left: ${(p) => withPx(p.mobile_marginLeft)}!important;
        margin-right: ${(p) => withPx(p.mobile_marginRight)}!important;
        margin-top: ${(p) => withPx(p.mobile_marginTop)}!important;
        overflow: ${(p) => p.mobile_overflow}!important;
        opacity: ${(p) => p.mobile_opacity}!important;
        position: ${(p) => withPx(p.mobile_position)}!important;
        padding: ${(p) => withPx(p.mobile_padding)}!important;
        padding-bottom: ${(p) => withPx(p.mobile_paddingBottom)}!important;
        padding-left: ${(p) => withPx(p.mobile_paddingLeft)}!important;
        padding-right: ${(p) => withPx(p.mobile_paddingRight)}!important;
        padding-top: ${(p) => withPx(p.mobile_paddingTop)}!important;
        text-align: ${(p) => withPx(p.mobile_textAlign)}!important;
        text-decoration: ${(p) => withPx(p.mobile_textDecoration)}!important;
        text-indent: ${(p) => withPx(p.mobile_textIndent)}!important;
        text-transform: ${(p) => withPx(p.mobile_textTransform)}!important;
        top: ${(p) => withPx(p.mobile_top)}!important;
        vertical-align: ${(p) => withPx(p.mobile_verticalAlign)}!important;
        visibility: ${(p) => p.mobile_visibility}!important;
        width: ${(p) => withPx(p.mobile_width)}!important;
        z-index: ${(p) => withPx(p.mobile_zIndex)}!important;
    }
`;
