import styled from "styled-components";

import { HeadingProps, TextProps } from  "./constants"

export const HeadingStyled = styled.h1`
    body {
        font-family      : $fontSans;
        font-size        : $bodyFontSize;
        line-height      : $bodyLineHeight;
        color            : $bodyFontColor;
        word-wrap        : normal;
        text-rendering   : optimizeLegibility;
        background-color : $bodyBgColor;
    }

    h1, h2, h3, h4, h5, h6 {
        font-weight : $headingFontWeight;
        margin      : 0;
    }

    h1 { line-height : 1; }
    h2, h3, h4, h5, h6 { line-height : $headingLineHeight; }

    h1 { font-size : $baseFontSize*pow($scaleFactor, 8); }
    h2 { font-size : $baseFontSize*pow($scaleFactor, 6); }
    h3 { font-size : $baseFontSize*pow($scaleFactor, 4); }
    h4 { font-size : $baseFontSize*pow($scaleFactor, 3); }
    h5 { font-size : $baseFontSize*pow($scaleFactor, 2); }
    h6 { font-size : $baseFontSize*pow($scaleFactor, 1); }

    @media all and (max-width : 720px) {
        h1 { font-size : 40px; }
        h2 { font-size : 46px; }
        h3 { font-size : 32px; }
        h4 { font-size : 28px; }
        h5 { font-size : 24px; }
        h6 { font-size : 20px; }
        p  { font-size : 14px; }

        h1, h2, h3, h4, h5, h6 { word-wrap : break-word; }
    }

    a {
        cursor      : pointer;
        color       : $linkColor;
        font-weight : bold;
        transition  : all 0.2s;
    }

    a:not(.ff-button):not(.ff-pill):not(.header-links a):hover { color : $linkHoverColor; }

    a:active { opacity: 0.72; }
`

export const TextStyled = styled.p`
    p {
        color       : $bodyFontColor;
        font-size   : $bodyFontSize;
        line-height : $bodyLineHeight;
        margin-top  : 0;
    }

    &.text-bold,
    b, strong { font-weight : bold; }

    &.text-italic,
    i, em     { font-style : italic; }

    &.font-sans  { font-family : $fontSans; }
    &.font-serif { font-family : $fontSerif; }
    &.font-mono  { font-family : $fontMono; }

    &.text-tiny   { font-size : $baseFontSize*pow($scaleFactor,-2); }
    &.text-small  { font-size : $baseFontSize*pow($scaleFactor,-1); }
    &.text-medium { font-size : $baseFontSize*pow($scaleFactor, 0); }
    &.text-large  { font-size : $baseFontSize*pow($scaleFactor, 2); }
    &.text-huge   { font-size : $baseFontSize*pow($scaleFactor, 4); }

    &.text-centre,
    &.text-center { text-align : center; }
    &.text-right  { text-align : right; }
    &.text-left   { text-align : left; }

    &.weight-100 { font-weight : 100 }
    &.weight-200 { font-weight : 200 }
    &.weight-300 { font-weight : 300 }
    &.weight-400 { font-weight : 400 }
    &.weight-500 { font-weight : 500 }
    &.weight-600 { font-weight : 600 }
    &.weight-700 { font-weight : 700 }
    &.weight-800 { font-weight : 800 }
    &.weight-900 { font-weight : 900 }

    &.no-line-height { line-height : 0; }
`