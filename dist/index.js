'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var PrismReactRenderer = require('prism-react-renderer');
var PrismReactRenderer__default = _interopDefault(PrismReactRenderer);
var lodashEs = require('lodash-es');
var styledNormalize = require('styled-normalize');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

const createClassName = (classNames) => {
    return classNames.filter((item) => !!item).join(" ");
};

const ElementStyledForComponent = (component) => styled__default(component) `
    ${(props) => props.bgColor && styled.css `{ background-color : ${props.bgColor}; }`}
    ${(props) => props.textColor && styled.css `{ color : ${props.textColor}; }`}
    ${(props) => props.borderColor && styled.css `{ border : 2px solid ${props.borderColor}; }`}
    ${(props) => props.fillColor && styled.css `{ fill : ${props.fillColor}; }`}
    ${(props) => props.strokeColor && styled.css `{ stroke : ${props.strokeColor}; }`}
`;
const Element = (_a) => {
    var { as: Component, className, size, fullWidth, fullHeight, bgColor, textColor, borderColor, fillColor, strokeColor, hideOnMobile, showOnlyOnMobile, hideOnTabPT, showOnlyOnTabPT, hideOnTabLS, showOnlyOnTabLS, hideOnDesktop, showOnlyOnDesktop, marginTop, marginRight, marginBottom, marginLeft, margin, paddingTop, paddingRight, paddingBottom, paddingLeft, padding } = _a, props = __rest(_a, ["as", "className", "size", "fullWidth", "fullHeight", "bgColor", "textColor", "borderColor", "fillColor", "strokeColor", "hideOnMobile", "showOnlyOnMobile", "hideOnTabPT", "showOnlyOnTabPT", "hideOnTabLS", "showOnlyOnTabLS", "hideOnDesktop", "showOnlyOnDesktop", "marginTop", "marginRight", "marginBottom", "marginLeft", "margin", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "padding"]);
    const ComponentStyled = ElementStyledForComponent(Component);
    return (React.createElement(ComponentStyled, Object.assign({}, props, { className: createClassName([
            className,
            size && `size-${size}`,
            fullWidth && "full-width",
            fullHeight && "full-height",
            hideOnMobile && "hide-on-mobile",
            showOnlyOnMobile && "show-only-on-mobile",
            showOnlyOnTabPT && "hide-on-tab-pt",
            showOnlyOnTabPT && "show-only-on-tab-pt",
            showOnlyOnTabLS && "hide-on-tab-ls",
            showOnlyOnTabLS && "show-only-on-tab-ls",
            hideOnDesktop && "hide-on-desktop",
            showOnlyOnDesktop && "show-only-on-desktop",
            marginTop && `margin-top-${marginTop}`,
            marginRight && `margin-right-${marginRight}`,
            marginBottom && `margin-bottom-${marginBottom}`,
            marginLeft && `margin-left-${marginLeft}`,
            margin && `margin-all-${margin}`,
            paddingTop && `padding-top-${paddingTop}`,
            paddingRight && `padding-right-${paddingRight}`,
            paddingBottom && `padding-bottom-${paddingBottom}`,
            paddingLeft && `padding-left-${paddingLeft}`,
            padding && `padding-all-${padding}`,
        ]) })));
};

const RowStyled = styled__default.div `
    display               : grid;
    width                 : 100%;
    grid-gap              : 16px;
    grid-template-columns : repeat(24, 1fr);
    margin-bottom         : 4vh;

    @media all and (max-width : 720px) {
        & { grid-gap : 8px; }
    }

    &.huge-gutters   { grid-gap : $measureFixed*4; }
    &.large-gutters  { grid-gap : $measureFixed*3; }
    &.medium-gutters { grid-gap : $measureFixed*2; }
    &.small-gutters  { grid-gap : $measureFixed; }
    &.tiny-gutters   { grid-gap : $measureFixed/2; }
    &.no-gutters     { grid-gap : 0; }

    &.side-padding-tiny {
        padding-left  : 4vw;
        padding-right : 4vw;
    }

    &.side-padding-small {
        padding-left  : 8vw;
        padding-right : 8vw;
    }

    &.side-padding-medium {
        padding-left  : 12vw;
        padding-right : 12vw;
    }

    &.side-padding-large {
        padding-left  : 18vw;
        padding-right : 18vw;
    }

    &.side-padding-huge {
        padding-left  : 24vw;
        padding-right : 24vw;
    }

    @media all and (max-width : 600px) {
        *[class*="side-padding-"] {
            padding-left  : 6vw;
            padding-right : 6vw;
        }
    }
`;

const Row = (_a) => {
    var { sidePadding, className, gutters, retainLayoutOnTabLS, retainLayoutOnTabPT, retainLayoutOnMobile, retainLayoutAlways } = _a, props = __rest(_a, ["sidePadding", "className", "gutters", "retainLayoutOnTabLS", "retainLayoutOnTabPT", "retainLayoutOnMobile", "retainLayoutAlways"]);
    const classNames = [className];
    if (sidePadding) {
        classNames.push(`side-padding-${sidePadding}`);
    }
    if (["tiny", "small", "large", "huge"].includes(gutters)) {
        classNames.push(`${gutters}-gutters`);
    }
    else if (gutters == "none") {
        classNames.push("no-gutters");
    }
    else {
        classNames.push("medium-gutters");
    }
    if (retainLayoutOnTabLS) {
        classNames.push("retain-layout-on-tab-ls");
    }
    if (retainLayoutOnTabPT) {
        classNames.push("retain-layout-on-tab-pt");
    }
    if (retainLayoutOnMobile) {
        classNames.push("retain-layout-on-mobile");
    }
    if (retainLayoutAlways) {
        classNames.push("retain-layout-on-tab-ls retain-layout-on-tab-pt retain-layout-on-mobile");
    }
    return (React.createElement(Element, Object.assign({ as: RowStyled, className: createClassName(classNames) }, props)));
};

const PortionStyled = styled__default.div `
    &.\\31 { grid-column : span 1; }

    &.one-twelfth,
    &.\\32 { grid-column : span 2; }

    &.one-eighth,
    &.\\33 { grid-column : span 3; }

    &.one-sixth,
    &.\\34 { grid-column : span 4; }

    &.\\35 { grid-column : span 5; }

    &.one-fourth,
    &.\\36 { grid-column : span 6; }

    &.\\37 { grid-column : span 7; }

    &.one-third,
    &.\\38 { grid-column : span 8; }

    &.\\39 { grid-column : span 9; }

    &.five-twelfth,
    &.\\31 0 { grid-column : span 10; }

    &.\\31 1 { grid-column : span 11; }

    &.half,
    &.\\31 2 { grid-column : span 12; }

    &.\\31 3 { grid-column : span 13; }

    &.seven-twelfth,
    &.\\31 4 { grid-column : span 14; }

    &.\\31 5 { grid-column : span 15; }

    &.two-third,
    &.\\31 6 { grid-column : span 16; }

    &.\\31 7 { grid-column : span 17; }

    &.three-fourth,
    &.\\31 8 { grid-column : span 18; }

    &.\\31 9 { grid-column : span 19; }

    &.five-sixth,
    &.\\32 0 { grid-column : span 20; }

    &.seven-eighth,
    &.\\32 1 { grid-column : span 21; }

    &.eleven-twelfth,
    &.\\32 2 { grid-column : span 22; }

    &.\\32 3 { grid-column : span 23; }

    &.whole,
    &.\\32 4 { grid-column : span 24; }

    @media all and (max-width : 600px) {

        .row:not(.retain-layout-on-mobile) > &:not([class*='on-mobile']) { grid-column : span 24; }

        &.\\31 -on-mobile { grid-column : span 1; }

        &.one-twelfth-on-mobile,
        &.\\32 -on-mobile { grid-column : span 2; }

        &.one-eighth-on-mobile,
        &.\\33 -on-mobile { grid-column : span 3; }

        &.one-sixth-on-mobile,
        &.\\34 -on-mobile { grid-column : span 4; }

        &.\\35 -on-mobile { grid-column : span 5; }

        &.one-fourth-on-mobile,
        &.\\36 -on-mobile { grid-column : span 6; }

        &.\\37 -on-mobile { grid-column : span 7; }

        &.one-third-on-mobile,
        &.\\38 -on-mobile { grid-column : span 8; }

        &.\\39 -on-mobile { grid-column : span 9; }

        &.five-twelfth-on-mobile,
        &.\\31 0-on-mobile { grid-column : span 10; }

        &.\\31 1-on-mobile { grid-column : span 11; }

        &.half-on-mobile,
        &.\\31 2-on-mobile { grid-column : span 12; }

        &.\\31 3-on-mobile { grid-column : span 13; }

        &.seven-twelfth-on-mobile,
        &.\\31 4-on-mobile { grid-column : span 14; }

        &.\\31 5-on-mobile { grid-column : span 15; }

        &.two-third-on-mobile,
        &.\\31 6-on-mobile { grid-column : span 16; }

        &.\\31 7-on-mobile { grid-column : span 17; }

        &.three-fourth-on-mobile,
        &.\\31 8-on-mobile { grid-column : span 18; }

        &.\\31 9-on-mobile { grid-column : span 19; }

        &.five-sixth-on-mobile,
        &.\\32 0-on-mobile { grid-column : span 20; }

        &.seven-eighth-on-mobile,
        &.\\32 1-on-mobile { grid-column : span 21; }

        &.eleven-twelfth-on-mobile,
        &.\\32 2-on-mobile { grid-column : span 22; }

        &.\\32 3-on-mobile { grid-column : span 23; }

        &.whole-on-mobile,
        &.\\32 4-on-mobile { grid-column : span 24; }
    }

    @media all and (min-width : 601px) and (max-width : 900px) {
        .row:not(.retain-layout-on-tab-pt) > &:not([class*='on-tab-pt']) { grid-column : span 24; }

        &.\\31 -on-tab-pt { grid-column : span 1; }

        &.one-twelfth-on-tab-pt,
        &.\\32 -on-tab-pt { grid-column : span 2; }

        &.one-eighth-on-tab-pt,
        &.\\33 -on-tab-pt { grid-column : span 3; }

        &.one-sixth-on-tab-pt,
        &.\\34 -on-tab-pt { grid-column : span 4; }

        &.\\35 -on-tab-pt { grid-column : span 5; }

        &.one-fourth-on-tab-pt,
        &.\\36 -on-tab-pt { grid-column : span 6; }

        &.\\37 -on-tab-pt { grid-column : span 7; }

        &.one-third-on-tab-pt,
        &.\\38 -on-tab-pt { grid-column : span 8; }

        &.\\39 -on-tab-pt { grid-column : span 9; }

        &.five-twelfth-on-tab-pt,
        &.\\31 0-on-tab-pt { grid-column : span 10; }

        &.\\31 1-on-tab-pt { grid-column : span 11; }

        &.half-on-tab-pt,
        &.\\31 2-on-tab-pt { grid-column : span 12; }

        &.\\31 3-on-tab-pt { grid-column : span 13; }

        &.seven-twelfth-on-tab-pt,
        &.\\31 4-on-tab-pt { grid-column : span 14; }

        &.\\31 5-on-tab-pt { grid-column : span 15; }

        &.two-third-on-tab-pt,
        &.\\31 6-on-tab-pt { grid-column : span 16; }

        &.\\31 7-on-tab-pt { grid-column : span 17; }

        &.three-fourth-on-tab-pt,
        &.\\31 8-on-tab-pt { grid-column : span 18; }

        &.\\31 9-on-tab-pt { grid-column : span 19; }

        &.five-sixth-on-tab-pt,
        &.\\32 0-on-tab-pt { grid-column : span 20; }

        &.seven-eighth-on-tab-pt,
        &.\\32 1-on-tab-pt { grid-column : span 21; }

        &.eleven-twelfth-on-tab-pt,
        &.\\32 2-on-tab-pt { grid-column : span 22; }

        &.\\32 3-on-tab-pt { grid-column : span 23; }

        &.whole-on-tab-pt,
        &.\\32 4-on-tab-pt { grid-column : span 24; }
    }

    @media all and (min-width : 901px) and (max-width : 1200px) {
        /* .row:not(.retain-layout-on-tab-ls) > &:not([class*='on-tab-ls']) { grid-column : span 24; } */

        &.\\31 -on-tab-ls { grid-column : span 1; }

        &.one-twelfth-on-tab-ls,
        &.\\32 -on-tab-ls { grid-column : span 2; }

        &.one-eighth-on-tab-ls,
        &.\\33 -on-tab-ls { grid-column : span 3; }

        &.one-sixth-on-tab-ls,
        &.\\34 -on-tab-ls { grid-column : span 4; }

        &.\\35 -on-tab-ls { grid-column : span 5; }

        &.one-fourth-on-tab-ls,
        &.\\36 -on-tab-ls { grid-column : span 6; }

        &.\\37 -on-tab-ls { grid-column : span 7; }

        &.one-third-on-tab-ls,
        &.\\38 -on-tab-ls { grid-column : span 8; }

        &.\\39 -on-tab-ls { grid-column : span 9; }

        &.five-twelfth-on-tab-ls,
        &.\\31 0-on-tab-ls { grid-column : span 10; }

        &.\\31 1-on-tab-ls { grid-column : span 11; }

        &.half-on-tab-ls,
        &.\\31 2-on-tab-ls { grid-column : span 12; }

        &.\\31 3-on-tab-ls { grid-column : span 13; }

        &.seven-twelfth-on-tab-ls,
        &.\\31 4-on-tab-ls { grid-column : span 14; }

        &.\\31 5-on-tab-ls { grid-column : span 15; }

        &.two-third-on-tab-ls,
        &.\\31 6-on-tab-ls { grid-column : span 16; }

        &.\\31 7-on-tab-ls { grid-column : span 17; }

        &.three-fourth-on-tab-ls,
        &.\\31 8-on-tab-ls { grid-column : span 18; }

        &.\\31 9-on-tab-ls { grid-column : span 19; }

        &.five-sixth-on-tab-ls,
        &.\\32 0-on-tab-ls { grid-column : span 20; }

        &.seven-eighth-on-tab-ls,
        &.\\32 1-on-tab-ls { grid-column : span 21; }

        &.eleven-twelfth-on-tab-ls,
        &.\\32 2-on-tab-ls { grid-column : span 22; }

        &.\\32 3-on-tab-ls { grid-column : span 23; }

        &.whole-on-tab-ls,
        &.\\32 4-on-tab-ls { grid-column : span 24; }
    }
`;

const Portion = (_a) => {
    var { desktopSpan, mobileSpan, tabLSSpan, tabPTSpan, className } = _a, props = __rest(_a, ["desktopSpan", "mobileSpan", "tabLSSpan", "tabPTSpan", "className"]);
    const classNames = [className];
    if (desktopSpan || tabLSSpan || tabPTSpan || mobileSpan) {
        if (desktopSpan) {
            classNames.push(`${desktopSpan}`);
        }
        if (tabLSSpan) {
            classNames.push(`${tabLSSpan}-on-tab-ls`);
        }
        if (tabPTSpan) {
            classNames.push(`${tabPTSpan}-on-tab-pt`);
        }
        if (mobileSpan) {
            classNames.push(`${mobileSpan}-on-mobile`);
        }
    }
    else {
        classNames.push("whole");
    }
    return React.createElement(Element, Object.assign({ as: PortionStyled, className: createClassName(classNames) }, props));
};

const Heading = (_a) => {
    var { as, weight, className } = _a, props = __rest(_a, ["as", "weight", "className"]);
    const classNames = [className];
    if (weight) {
        classNames.push(`weight-${weight}`);
    }
    return React.createElement(Element, Object.assign({ as: as, className: createClassName(classNames) }, props));
};

const Text = (_a) => {
    var { weight, size, className } = _a, props = __rest(_a, ["weight", "size", "className"]);
    const classNames = [className];
    if (weight) {
        classNames.push(`weight-${weight}`);
    }
    if (size) {
        classNames.push(`text-${size}`);
    }
    return (React.createElement(Element, Object.assign({ as: "p", className: createClassName(classNames) }, props)));
};

const SidebarItemIconStyled = styled__default.div `
    align-self   : center;
    justify-self : center;
    display      : grid;
    width        : 16px;
    height       : 16px;
`;

const SidebarItemIcon = (props) => (React.createElement(Element, Object.assign({ as: SidebarItemIconStyled }, props)));

const SidebarItemTextStyled = styled__default.p `
    font-weight : 600;
    margin      : 0;
    line-height : 1;
`;

const SidebarItemText = (_a) => {
    var { linkText } = _a, props = __rest(_a, ["linkText"]);
    return (React.createElement(Element, Object.assign({ as: SidebarItemTextStyled }, props), linkText));
};

const SidebarItemStyled = styled__default.div `
    display               : grid;
    align-items           : center;
    grid-template-columns : 48px 1fr;
    grid-template-rows    : 40px;
    margin                : 4px 0;

    .sidebar-sublink { font-weight : 400 !important; }

    &.has-alert {
        position : relative;
        width    : fit-content;
    }

    &.has-alert::after {
        display          : block;
        content          : "";
        position         : absolute;
        top              : calc(50% - 3px);
        right            : -12px;
        height           : 8px;
        width            : 8px;
        border-radius    : 50%;
        background-color : $colorRed-70;
    }

    &.bottom-section {
        display          : grid;
        align-self       : end;
        position         : fixed;
        bottom           : 0;
        width            : 240px;
        border-top       : 1px solid rgba($colorSlate-10, 1);
        background-color : white;
        margin           : 0;
        padding          : 4px;
    }

    .sidebar-wrapper.collapsed {
        &:not(.bottom-section) {
            margin-left : 0;
            position    : relative;
        }

        &:hover .sidebar-icon + .sidebar-text {
            display          : flex;
            position         : fixed;
            background-color : $colorHue;
            left             : 40px;
            align-self       : center;
            border-radius    : 4px;
            margin-top       : 8px;
            padding          : 4px 8px;
            color            : $colorWhite;
            font-size        : 88%;
            box-shadow: 0 4px 16px -2px rgba(0, 0, 0, 0.24);
        }

        details > summary::after { display : none; }

        .bottom-section {
            width        : 48px;
            padding-left : 0;
        }
    }
`;

const SidebarItem = (props) => (React.createElement(Element, Object.assign({ as: SidebarItemStyled }, props)));

const SidebarHeaderStyled = styled__default.div `
    display         : flex;
    width           : 100%;
    height          : 80px;
    align-content   : center;
    align-items     : center;
    justify-content : center;

    * { line-height : 1; }

    .header-logo { display : block; }
    .header-icon { display : none; }
`;

const SidebarHeader = (props) => (React.createElement(Element, Object.assign({ as: SidebarHeaderStyled }, props)));

const SidebarSublinkGroupStyled = styled__default.div `
    margin           : 0;
    background-color : rgba($colorSlate-10, 0.64);
    box-shadow       : inset 0 2px 2px -2px rgba(0, 0, 0, 0.16);

    a.active { display : block; }

    .sidebar-sublink {
        color       : rgba($colorShade, 1);
        font-weight : 400;
        margin      : 4px 0 0 24px;
    }
`;

const SidebarSublinkGroup = (props) => (React.createElement(Element, Object.assign({ as: SidebarSublinkGroupStyled }, props)));

const SidebarWrapperStyled = styled__default.div `
    display          : flex;
    position         : fixed;
    top              : 0;
    left             : 0;
    bottom           : 0;
    flex-direction   : column;
    width            : 240px;
    min-height       : 100vh;
    overflow-y       : auto;
    transition       : all 0.4s ease-in-out;
    background-color : $sideBarBG;
    box-shadow       : 2px 0 8px -4px rgba(0, 0, 0, 0.16);
    z-index          : 10000;

    .sidebar-section {
        padding        : 12px 24px;
        display        : flex;
        flex-direction : column;
    }

    a.active {
        display          : block;
        background-color : rgba($colorHue, 0.16);
        border-left      : 4px solid $colorHue;
    }

    @media (max-width : 900px) {
        left    : -300px;
        z-index : 4000;
    }

    /*  COLLAPSED  */
    &.collapsed {
        width      : 48px;
        overflow-x : hidden;
        overflow-y : scroll;

        .header-logo { display : none; }

        .header-icon {
            display : block;
            width   : 32px;
            height  : 32px;
        }
    }

    * { user-select : none; }

    /*  For Open and Collapse gorups  */
    details       { position : relative; }
    details:hover { cursor : pointer; }

    details > summary::after {
        display      : inline-block;
        position     : absolute;
        width        : 8px;
        height       : 8px;
        top          : 20px;
        right        : 18px;
        content      : "";
        border-style : solid;
        border-width : 0 2px 2px 0;
        transform    : rotate(45deg);
        color        : $colorSlate-40;
        transition   : all 0.2s;
        cursor       : pointer;
    }

    details[open] > summary::after {
        transform : rotate(225deg);
        top       : 22px;
    }

    details[open] > summary:hover::after { color : $colorSlate-40; }

    /* details a & {
        grid-template-rows: 24px;
    } */

    &.collapsed {
        ${SidebarItemTextStyled} {
            display  : none;
            position : absolute;
        }

        ${SidebarItemTextStyled}:not(.bottom-section) {
            margin-left : 0;
            position    : relative;
        }

        ${SidebarItemTextStyled}:hover ${SidebarItemIconStyled} + ${SidebarItemTextStyled} {
            display          : flex;
            position         : fixed;
            background-color : $colorHue;
            left             : 40px;
            align-self       : center;
            border-radius    : 4px;
            margin-top       : 8px;
            padding          : 4px 8px;
            color            : $colorWhite;
            font-size        : 88%;
            box-shadow: 0 4px 16px -2px rgba(0, 0, 0, 0.24);
        }

        details > summary::after { display : none; }

        .bottom-section {
            width        : 48px;
            padding-left : 0;
        }
    }
`;

const SidebarWrapper = (_a) => {
    var { collapsed, className } = _a, props = __rest(_a, ["collapsed", "className"]);
    const classNames = [className];
    if (collapsed) {
        classNames.push("collapsed");
    }
    return (React.createElement(Element, Object.assign({ as: SidebarWrapperStyled, className: createClassName(classNames) }, props)));
};

const ContentWrapperStyled = styled__default.div `
    display        : flex;
    flex-direction : column;
    width          : 100%;
    transition     : all 0.4s ease-in-out;

    ${SidebarWrapperStyled} + & {
        width       : calc(100% - 240px);
        margin-left : 240px;
    }

    ${SidebarWrapperStyled}.collapsed + & {
        width       : calc(100% - 48px);
        margin-left : 48px;
    }

    @media (max-width : 900px) {
        ${SidebarWrapperStyled} + & {
            width       : 100%;
            margin-left : 0;
        }
    }
`;

const ContentWrapper = (props) => (React.createElement(Element, Object.assign({ as: ContentWrapperStyled }, props)));

const HRStyled = styled__default.hr `
    border           : 0;
    height           : 1px;
    margin           : 4vmax auto;
    width            : 100%;
    background-color : $colorSlate-20;

    &.thick { height : 4px; }
    &.slim  { height : 2px; }

    &.side-margin-tiny   { width: calc(100% - 8vw); }
    &.side-margin-small  { width: calc(100% - 16vw); }
    &.side-margin-medium { width: calc(100% - 24vw); }
    &.side-margin-large  { width: calc(100% - 36vw); }
    &.side-margin-huge   { width: calc(100% - 48vw); }

    @media all and (max-width : 600px) {
        hr[class*="side-margin-"] {
            width: calc(100% - 12vw);
        }
    }
`;

const HRule = (_a) => {
    var { sideMargin, className, thick, slim } = _a, props = __rest(_a, ["sideMargin", "className", "thick", "slim"]);
    const classNames = [className];
    if (sideMargin) {
        classNames.push(`side-margin-${sideMargin}`);
    }
    if (thick) {
        classNames.push("thick");
    }
    if (slim) {
        classNames.push("slim");
    }
    return (React.createElement(Element, Object.assign({ as: HRStyled, className: createClassName(classNames) }, props)));
};

const ButtonStyled = styled__default.button `
    position            : relative;
    display             : inline-flex;
    cursor              : pointer;
    padding             : 12px 24px;
    font-family         : $fontSans;
    font-weight         : bold;
    font-size           : 92%;
    text-align          : center;
    justify-content     : center;
    align-self          : flex-start;
    text-decoration     : none;
    line-height         : 1;
    transition          : all 0.2s;
    background-position : center;

    &:active {
        box-shadow : none;
        opacity    : 0.72;
    }

    /*  Button with a multi-colour background  */
    &.bg-gradient {
        background : -webkit-linear-gradient(-45deg, $buttonGradientStartColour 0%, $buttonGradientEndColour 100%);
        background :    -moz-linear-gradient(-45deg, $buttonGradientStartColour 0%, $buttonGradientEndColour 100%);
        background :         linear-gradient(135deg, $buttonGradientStartColour 0%, $buttonGradientEndColour 100%);
    }

    /*  A round button  */
    &.shape-circular {
        width         : 64px;
        height        : 64px;
        padding       : 0;
        border-radius : 50%;
    }

    &.shape-circular img {
        position : absolute;
        margin   : auto;
        left     : 0;
        top      : 0;
        bottom   : 0;
        right    : 0;
    }

    &[class*="border"] { border-width : 1px; }

    &.with-loader {
        color          : transparent !important;
        box-shadow     : none;
        user-select    : none;
        pointer-events : none;
    }

    &.with-loader::after {
        display            : block;
        position           : absolute;
        margin             : auto;
        left               : 0;
        top                : 0;
        bottom             : 0;
        right              : 0;
        height             : 16px;
        width              : 16px;
        border             : 3px solid $spinnerBorder;
        border-radius      : 50%;
        border-top-color   : transparent;
        border-right-color : transparent;
        content            : "";
        -webkit-animation  : spinner 400ms infinite linear;
        animation          : spinner 400ms infinite linear;
    }

    &.size-tiny.with-loader::after,
    &.size-small.with-loader::after {
        display            : block;
        position           : absolute;
        margin             : auto;
        left               : 0;
        top                : 0;
        bottom             : 0;
        right              : 0;
        height             : 8px;
        width              : 8px;
        border             : 2px solid $colorWhite;
        border-radius      : 50%;
        border-top-color   : transparent;
        border-right-color : transparent;
        content            : "";
        -webkit-animation  : spinner 400ms infinite linear;
        animation          : spinner 400ms infinite linear;
    }

    /*  Animation for loader  */
    @-webkit-keyframes spinner {
        from {
            -webkit-transform : rotate(0deg);
        }
        to {
            -webkit-transform : rotate(359deg);
        }
    }

    @keyframes spinner {
        from {
            transform : rotate(0deg);
        }
        to {
            transform : rotate(359deg);
        }
    }

    &[disabled] {
        box-shadow     : none;
        user-select    : none;
        pointer-events : none;
        opacity        : 0.32;
        filter         : grayscale(100%);
    }

    /*  Different sized buttons  */
    &.size-tiny {
        padding   : 4px 8px;
        font-size : $baseFontSize*pow($scaleFactor, -2);
    }

    &.size-small {
        padding   : 8px 16px;
        font-size : $baseFontSize*pow($scaleFactor, -1);
    }

    &.size-large {
        padding   : 16px 32px;
        font-size : $baseFontSize*pow($scaleFactor, 2);
    }

    &.size-huge {
        padding   : 24px 40px;
        font-size : $baseFontSize*pow($scaleFactor, 4);
    }

    &.button-plain { background : transparent; }

    &.with-delete::after {
        display     : inline-flex;
        position    : absolute;
        cursor      : pointer;
        right       : 8px;
        content     : "\00d7";
        font-size   : 20px;
        line-height : 0;
        align-self  : center;
    }

    &.with-delete,
    &.size-tiny.with-delete,
    &.size-small.with-delete { padding-right : 32px !important; }

    &.size-large.with-delete { padding-right : 40px !important; }

    &.size-huge.with-delete { padding-right : 48px !important; }

    &.size-large.with-delete::after,
    &.size-huge.with-delete::after {
        font-size : 24px;
        right     : 16px;
    }

    & + & { margin-right : 8px; }

    & + &:nth-child(2) { margin-left : 8px; }
`;

const Button = (_a) => {
    var { value, size, shape, shadow, border, className, isLoading, hasDelete } = _a, props = __rest(_a, ["value", "size", "shape", "shadow", "border", "className", "isLoading", "hasDelete"]);
    const classNames = [className];
    if (className) {
        classNames.push(className);
    }
    if (size) {
        classNames.push(`size-${size}`);
    }
    if (shape) {
        classNames.push(`shape-${shape}`);
    }
    if (shadow) {
        classNames.push(`shadow-${shadow}`);
    }
    if (border) {
        classNames.push(`border-${border}`);
    }
    if (isLoading) {
        classNames.push("with-loader");
    }
    if (hasDelete) {
        classNames.push("with-delete");
    }
    return (React.createElement(Element, Object.assign({ as: ButtonStyled, className: createClassName(classNames) }, props), value));
};

const InputFieldStyled = styled__default.input `
    position         : relative;
    width            : 100%;
    flex             : 1 1 auto;
    font-family      : $fontSans;
    background-color : $inputBG-DefaultColor;
    border           : 1px solid $inputBorder-DefaultColor;
    border-radius    : 4px;
    padding          : 12px;

    &:active,
    &:focus {
        background-color : $inputBG-FocusColor;
        border           : 2px solid $inputBorder-FocusColor;
        padding          : 11px;
    }

    &:read-only {
        background-color : $inputBG-ReadOnlyColor;
        color            : $inputReadOnlyTextDefaultColor;
    }

    &:read-only:focus { border : 2px solid $inputBG-ReadOnlyColor; }

    &[type=password] { letter-spacing : 4px; }

    //  LEFT AND  RIGHT ICONS  ====================================================
    &.with-icon-left  { padding-left : 40px; }
    &.with-icon-right { padding-right : 40px; }

    span.icon-left,
    span.icon-right {
        position : absolute;
        bottom   : 12px;
        width    : 24px;
        height   : 24px;
    }

    span.icon-left svg,
    span.icon-right svg {
        fill       : $inputIconFillColor;
        transition : all 0.2s;
        width      : 24px;
        height     : 24px;
    }

    span.icon-left { left : 8px; }

    span.icon-right {
        right   : 8px;
        opacity : 0.24;
    }

    &.with-icon-left:focus ~ span.icon-left svg { fill : $inputFocusIconFillColor; }

    //  Grey check mark
    &.validate-this {
        padding-right       : 40px;
        background-image    : url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+ICA8cG9seWxpbmUgcG9pbnRzPSIzLjUgMTIuNSA4LjUgMTcuNSAyMC41IDUuNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZTJlMmUyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIvPjwvc3ZnPg==);
        background-repeat   : no-repeat;
        background-position : right 12px top 56%;
        background-size     : 24px;

        &:focus {
            background-position : right 11px top 56%;
        }
    }

    &.validate-this ~ span.icon-right { display : none; }

    //  Green check mark
    &.validate-this:valid:not(:placeholder-shown) {
        background-image : url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+ICA8cG9seWxpbmUgcG9pbnRzPSIzLjUgMTIuNSA4LjUgMTcuNSAyMC41IDUuNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMGVjMDVjIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIvPjwvc3ZnPg==);
    }

    //  Red check mark
    &:invalid:not(:focus):not(:placeholder-shown) {
        border              : 1px solid $inputBorder-InvalidColor;
        background-color    : rgba($colorRed, 0.24);
        background-image    : url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+ICA8bGluZSB4MT0iNi41IiB5MT0iMTcuNSIgeDI9IjE4LjUiIHkyPSI1LjUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2VmNDM0MyIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4gIDxsaW5lIHgxPSI2LjUiIHkxPSI1LjUiIHgyPSIxOC41IiB5Mj0iMTcuNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZWY0MzQzIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIvPjwvc3ZnPg==);
        background-repeat   : no-repeat;
        background-position : 98%;
        background-size     : 24px;
    }
`;

const FormItemStyled = styled__default.div `
    display        : flex;
    position       : relative;
    width          : 100%;
    flex-direction : column;
    align-items    : center;
    flex-wrap      : wrap;

    ${(props) => props.isAnswers && styled.css `
        * { margin-bottom: 8px; }
    `}

    > label {
        position      : relative;
        display       : flex;
        flex          : 1 0 100%;
        align-self    : flex-start;
        margin-bottom : 4px;
        color         : $colorShade;
        order         : -1;
        flex-wrap     : wrap;
    }

    ${InputFieldStyled} {
        &:focus ~ label { font-weight : bold; }

        &:required ~ label::before {
            position  : absolute;
            top       : -4px;
            bottom    : 0;
            left      : -14px;
            margin    : auto;
            content   : " *";
            font-size : 120%;
            color     : $colorRed;
        }

        &:focus ~ label > span.ff-input-help,
        &:active ~ label > span.ff-input-help {
            display : inline-flex;
        }

        &:not(:focus):not(:placeholder-shown) ~ label > span.ff-input-help {
            color : $inputHelpTextDefaultColor;
        }

        &:invalid:focus:not(:placeholder-shown) ~ label > span.ff-input-error,
        &:invalid:not(:focus):not(:placeholder-shown) ~ label > span.ff-input-error {
            display : inline-flex;
            color   : $inputHelpTextErrorColor;
        }
    }

    label span {
        font-size   : 80%;
        font-weight : normal;
        color       : $inputHelpTextDefaultColor;
        display     : none;
        align-self  : center;
        transition  : opacity 0.2s;
    }

    label > span::before { content : "\0000a0\2022\0000a0"; }
`;

const FormWrapperStyled = styled__default.form `
    display        : flex;
    position       : relative;
    width          : 100%;
    flex-direction : column;

    & > ${FormItemStyled} { margin-bottom : 24px; }
`;

const FormWrapper = (props) => {
    return (React.createElement(Element, Object.assign({ as: FormWrapperStyled }, props)));
};

const FormItem = (props) => (React.createElement(Element, Object.assign({ as: FormItemStyled }, props)));

const FormItemGroupStyled = styled__default.div `
    display        : flex;
    flex-direction : row;
    flex-wrap      : wrap;
    width          : 100%;

    input { align-self : flex-end; }

    & > .ff-form-unit {
        flex           : 1 1 0;
        flex-direction : row;
        margin-bottom  : 24px;
    }

    & > label {
        flex : 1 1 100%;
        order: -1;
    }

    & > .ff-form-unit:not(:last-of-type) { margin-right : 24px; }

    @media screen and (max-width: 520px) {
        &:not(.retain-layout) > .ff-form-unit {
            flex          : 1 1 auto;
            margin-right  : 0 !important;
        }

        &:not(.retain-layout) > .ff-form-unit:not(:last-child) { margin-bottom : 16px; }
    }

    & > .ff-form-question {
        flex       : 1 0 0;
        align-self : flex-start;
    }

    & > .ff-form-answers { flex : 3 1 0; }

    /* .ff-form .ff-form-unit, */
    /* .ff-form .ff-input-group { margin-bottom : 40px; } */

    /* .ff-input-group > .ff-form-unit, */
    /* .ff-form > .ff-input-group:last-of-type:not(:only-of-type) { margin-bottom : 0; } */
`;

const FormItemGroup = (props) => (React.createElement(Element, Object.assign({ as: FormItemGroupStyled }, props)));

const FormItemJointGroupStyled = styled__default.div `
    display        : flex;
    flex-direction : row;
    flex-wrap      : wrap;
    width          : 100%;

    & > input {
        flex           : 1 1 0;
        flex-direction : row;
        margin-bottom  : 24px;
    }

    & .unit-prefix,
    & .unit-prefix select {
        border-top-right-radius    : 0;
        border-bottom-right-radius : 0;
    }

    & .unit-suffix,
    & .unit-suffix select {
        border-top-left-radius    : 0;
        border-bottom-left-radius : 0;
    }

    & *:not(.unit-prefix):not(.unit-suffix) { border-radius: 0 !important; }
`;

const FormItemJointGroup = (props) => (React.createElement(Element, Object.assign({ as: FormItemJointGroupStyled }, props)));

const InputLabel = (_a) => {
    var { label, helpText, errorText } = _a, props = __rest(_a, ["label", "helpText", "errorText"]);
    return (React.createElement(Element, Object.assign({ as: "label" }, props),
        label,
        helpText && helpText.length > 0 && (React.createElement("span", { className: "ff-input-help" }, helpText)),
        errorText && errorText.length > 0 && (React.createElement("span", { className: "ff-input-error" }, errorText))));
};

const BaseInputComponent = (_a) => {
    var { as: Component, className, label, helpText, errorText, iconLeft, iconRight, validateThis } = _a, inputProps = __rest(_a, ["as", "className", "label", "helpText", "errorText", "iconLeft", "iconRight", "validateThis"]);
    const classNames = [className];
    if (iconLeft) {
        classNames.push("with-icon-left");
    }
    if (iconRight) {
        classNames.push("with-icon-right");
    }
    if (validateThis) {
        classNames.push("validate-this");
    }
    return (React.createElement(FormItem, null,
        React.createElement(Element, Object.assign({ as: Component, className: createClassName(classNames) }, inputProps)),
        iconLeft && React.createElement("span", { className: "icon-left" }, iconLeft),
        iconRight && React.createElement("span", { className: "icon-right" }, iconRight),
        label && (React.createElement(InputLabel, { label: label, helpText: helpText, errorText: errorText, htmlFor: inputProps.id }))));
};

const InputField = (props) => {
    return (React.createElement(BaseInputComponent, Object.assign({ as: InputFieldStyled, placeholder: " " }, props)));
};

const TextareaStyled = styled__default(InputFieldStyled) `
    max-width : 100%;
    min-width : 100%;
    resize    : vertical;
`;

const Textarea = (props) => {
    return (React.createElement(BaseInputComponent, Object.assign({ as: TextareaStyled }, props)));
};

const SelectWrapperStyled = styled__default.div `
    position   : relative;
    width      : max-content;
    align-self : flex-start;

    &::after {
        position       : absolute;
        display        : block;
        content        : "\2303";
        top            : calc(50% - 18px);
        right          : 12px;
        font-size      : 24px;
        color          : $colorHue;
        line-height    : 1.2;
        border-color   : $colorHue;
        z-index        : 500;
        pointer-events : none;
        transform      : rotate(180deg);
    }
`;
const SelectStyled = styled__default.div `
    display          : flex;
    height           : 100%;
    padding          : 12px 48px 12px 8px;
    background-color : $inputBG-DefaultColor;
    border           : none;
    border-radius    : 4px;
    font-family      : $fontSans;
    align-items      : center;
    border           : 1px solid #c5ccd3;
    width            : 100%;
`;

const Select = (_a) => {
    var { fullWidth, className, options } = _a, props = __rest(_a, ["fullWidth", "className", "options"]);
    return (React.createElement(Element, { as: SelectWrapperStyled, fullWidth: fullWidth, className: className },
        React.createElement(Element, Object.assign({ as: SelectStyled }, props))));
};

const FileUpload = (props) => {
    return (React.createElement(InputField, Object.assign({ type: "file" }, props)));
};

const RadioButtonStyled = styled__default.div `
    input[type="radio"] { display : none; }

    display      : inline-block;
    margin-right : 24px;


    /* The grey outer circle */
    label::before {
        width         : 16px;
        height        : 16px;
        top           : 4px;
        left          : 0;
        border-radius : 50%;
    }

    /* The white inner circle */
    label::after {
        opacity       : 0;
        left          : 4px;
        top           : 8px;
        width         : 8px;
        height        : 8px;
        background    : $colorWhite;
        border-radius : 50%;
    }

    &:only-of-type { margin-right : 0; }

    label {
        display        : inline-block;
        position       : relative;
        font-family    : $fontSans;
        color          : $colorShade;
        cursor         : pointer;
        vertical-align : middle;
        line-height    : 1.1;
        padding-left : 24px;

        &::before,
        &::after {
            display    : inline-block;
            position   : absolute;
            content    : "";
            transition : all 0.1s ease-out;
        }
    }

    /* The grey square */
    input[type="radio"]:disabled + label::before,
    label::before {
        user-select    : none;
        pointer-events : none;
        background     : $colorGrey-20;
        box-shadow     : 0 2px 8px -2px hsla(0, 0, 0, 0.24) inset;
    }

    &:hover label::before { background : $colorGrey-30; }

    /* The grey square */
    label::after { opacity : 0; }

    input[type="radio"]:checked    + label::before { background : $colorHue; }

    input[type="radio"]:checked    + label::after { opacity : 1; }

    input[type="radio"]:disabled            + label,
    input[type="radio"]:disabled:checked    + label  {
        pointer-events : none;
        cursor         : default;
        opacity        : 0.24;
    }
`;

const RadioButton = (_a) => {
    var { onClick } = _a, props = __rest(_a, ["onClick"]);
    return (React.createElement(Element, { as: RadioButtonStyled, onClick: onClick },
        React.createElement(BaseInputComponent, Object.assign({ as: "input", type: "radio" }, props))));
};

const SharedStyling = styled.css `
    display        : inline-flex;
    flex-direction : row;
    align-items    : center;
    margin-right   : 24px;

    &:only-of-type { margin-right : 0; }

    label {
        display     : inline-flex;
        position    : relative;
        font-family : $fontSans;
        color       : $colorShade;
        cursor      : pointer;
        line-height : 1;
        user-select : none;

        &::before, &::after {
            display    : inline-flex;
            content    : "";
            transition : all 0.1s ease-out;
        }
    }

    //  The grey square
    label::before,
    input[type="checkbox"]:disabled + label::before {
        user-select    : none;
        pointer-events : none;
        background     : $colorGrey-20;
        box-shadow     : 0 2px 4px -2px hsla(0, 0, 0, 0.24) inset;
    }

    &:hover label::before { background : $colorGrey-30; }

    //  The grey square
    label::after { opacity : 0; }

    input[type="checkbox"]:checked + label::before { background : $colorHue; }

    input[type="checkbox"]:disabled + label,
    input[type="checkbox"]:disabled:checked + label {
        pointer-events : none;
        cursor         : default;
        opacity        : 0.24;
    }
`;
const CheckBoxStyled = styled__default.div `
    //  CHECKBOX, SWITCH and RADIO BUTTONS  =======================================
    input[type="checkbox"] { display : none; }

    //  CHECKBOX  =================================================================
    //  The grey square
    label::before {
        position      : absolute;
        height        : 16px;
        width         : 16px;
        top           : 0;
        left          : 0;
        border-radius : 4px;
    }

    //  The white tick inside
    label::after {
        position      : absolute;
        height        : 6px;
        width         : 12px;
        left          : 2px;
        top           : 4px;
        border-left   : 2px solid $colorWhite;
        border-bottom : 2px solid $colorWhite;
        transform     : rotate(-45deg);
    }

    ${SharedStyling}

    label { padding-left : 24px; }
    input[type="checkbox"]:checked + label::after { opacity : 1; }
`;
const SwitchStyled = styled__default.div `
    //  CHECKBOX, SWITCH and RADIO BUTTONS  =======================================
    input[type="checkbox"] { display : none; }

    //  TOGGLE SWITCH  ============================================================
    //  The grey oblong
    label::before {
        position      : absolute;
        top           : 2px;
        left          : 0;
        width         : 24px;
        height        : 12px;
        border-radius : 8px;
        margin-right  : 4px;
    }

    //  The white inner circle
    label::after {
        position      : absolute;
        display       : inline-block;
        width         : 8px;
        height        : 8px;
        left          : 2px;
        top           : 4px;
        background    : $colorWhite;
        border-radius : 50%;
        content       : '';
        transition    : all 0.1s ease-out;
        box-shadow    : 0 2px 4px -2px hsla(0, 0, 0, 0.6);
    }

    input[type="checkbox"]:checked + label::after { left : 14px; }

    ${SharedStyling}

    label { padding-left : 32px; }
`;

const CheckBox = (props) => {
    return (React.createElement(Element, { as: CheckBoxStyled },
        React.createElement(BaseInputComponent, Object.assign({ as: "input", type: "checkbox" }, props))));
};

const Switch = (props) => {
    return (React.createElement(Element, { as: SwitchStyled },
        React.createElement(BaseInputComponent, Object.assign({ as: "input", type: "checkbox" }, props))));
};

const CardStyled = styled__default.div `
    position         : relative;
    width            : 100%;
    height           : auto;
    border           : 1px solid hsla(0, 0%, 0%, 0.04);
    background-color : ${(props) => props.theme.card.bg};

    &.padding-all-tiny   { padding : 8px; }
    &.padding-all-small  { padding : 16px; }
    &.padding-all-medium { padding : 24px; }
    &.padding-all-large  { padding : 32px; }
    &.padding-all-huge   { padding : 48px; }

    @media all and (max-width : 600px) {
        &[class*="padding"] { padding : 4vmin; }
    }
`;

const Card = (_a) => {
    var { shadow, shape, className } = _a, props = __rest(_a, ["shadow", "shape", "className"]);
    const classNames = [className];
    if (shape) {
        classNames.push(`shape-${shape}`);
    }
    if (shadow) {
        classNames.push(`shadow-${shadow}`);
    }
    return (React.createElement(Element, Object.assign({ as: CardStyled, className: createClassName(classNames) }, props)));
};

const InfoPanelStyled = styled__default.div `
    display          : flex;
    position         : fixed;
    top              : 0;
    right            : -42vw;
    bottom           : 0;
    padding          : 2vw;
    flex-direction   : column;
    max-width        : 40vw;
    width            : auto;
    min-height       : 100vh;
    overflow-y       : auto;
    transition       : all 0.4s ease-in-out;
    background-color : ${(props) => props.theme.infoPanel.bg};
    box-shadow       : 4px 0 24px -16px rgba(0, 0, 0, 0.24);
    z-index          : 10000;
    border-left      : 1px solid ${(props) => props.theme.infoPanel.border};

    &.open { right : 0; }

    &.tiny   { width : 6vw; }
    &.small  { width : 12vw; }
    &.medium { width : 24vw; }
    &.large  { width : 32vw; }
    &.huge   { width : 40vw; }
`;

const InfoPanel = (_a) => {
    var { open, width, className } = _a, props = __rest(_a, ["open", "width", "className"]);
    const classNames = [className];
    if (open) {
        classNames.push("open");
    }
    if (width) {
        classNames.push(width);
    }
    return React.createElement(Element, Object.assign({ as: InfoPanelStyled, className: createClassName(classNames) }, props));
};

//  NOTIFICATIONS WRAPPER  ====================================================
const NotificationsWrapperStyled = styled__default.div `
    position   : fixed;
    top        : 0;
    display    : flex;
    width      : 400px;
    height     : 100%;
    z-index    : 50000;
    padding    : 4vh 2vw;
    overflow-y : scroll;

    &.left  { left : 0; }
    &.right { right : 0; }

    &.top    { flex-direction: column; }
    &.bottom { flex-direction: column-reverse; }
`;
//  NOTIFICATIONS ITEM  =======================================================
const NotificationsItemStyled = styled__default.div `
    position         : relative;
    display          : flex;
    width            : 100%;
    height           : auto;
    padding          : 16px;
    background-color : $colorGrey-10;
    box-shadow       : 0 8px 24px -8px rgba(0, 0, 0, 0.32);
    border-radius    : 4px;
    border           : 1px solid hsla(0, 0%, 0%, 0.04);
    transition       : all 0.4s;
    margin           : 8px 0;

    &::before {
        position      : absolute;
        left          : 0;
        top           : 0;
        width         : 8px;
        height        : 100%;
        content       : "";
        border-radius : 4px 0 0 4px;
    }

    &.info::before    { background-color : $colorBlue-60; }
    &.warning::before { background-color : $colorAmber; }
    &.error::before   { background-color : $colorRed-90; }
    &.success::before { background-color : $colorGreen-90; }

    & .notification-content {
        color       : $colorShade;
        font-size   : 14px;
        line-height : 1.1;
        word-break  : break-word;
        margin      : 0 8px;
    }

    &.dismissible .notification-content {
        margin   : 0 24px 0 8px;
        overflow : scroll;
    }

    & .dismiss-button {
        position : absolute;
        top      : 6px;
        right    : 8px;
        width    : 16px;
        height   : 16px;
        opacity  : 0.24;
        cursor   : pointer;
    }

    & .dismiss-button:hover { opacity: 1; }

    & .dismiss-button:before {
        content     : "\d7";
        font-size   : 24px;
        line-height : 0;
    }

    & p { margin-bottom : 0; }

    .ff-notification-wrapper.top {
        &:first-child { margin-top : 0; }
        &:last-child  { margin-bottom : 0; }
    }

    .ff-notification-wrapper.bottom {
        &:first-child { margin-bottom: 0; }
        &:last-child  { margin-top: 0; }
    }
`;

const NotificationWrapper = (_a) => {
    var { position, anchor, className } = _a, props = __rest(_a, ["position", "anchor", "className"]);
    const classNames = [className];
    if (position) {
        classNames.push(position);
    }
    if (anchor) {
        classNames.push(anchor);
    }
    return (React.createElement(Element, Object.assign({ as: NotificationsWrapperStyled, className: createClassName(classNames) }, props)));
};

const NotificationItem = (_a) => {
    var { type, children, isDismissible, className } = _a, props = __rest(_a, ["type", "children", "isDismissible", "className"]);
    const classNames = [className, "ff-notification"];
    if (type) {
        classNames.push(type);
    }
    if (isDismissible) {
        classNames.push("dismissible");
    }
    return (React.createElement(Element, Object.assign({ as: NotificationsItemStyled, className: createClassName(classNames) }, props),
        React.createElement("div", { className: "notification-content" }, children),
        isDismissible && (React.createElement("div", { className: "dismiss-button" }))));
};

const BreadcrumbWrapperStyled = styled__default.nav `
    display          : flex;
    flex-direction   : row;
    flex-wrap        : wrap;
    align-items      : flex-start;
    padding          : 8px 24px;
    background-color : ${(props) => props.theme.breadcrumb.wrapper.bg};
    box-shadow       : 0 1px 1px -1px rgba(0, 0, 0, 0.08);
`;
const BreadcrumbItemStyled = styled__default.div `
    display      : inline-flex;
    margin-right : 20px;
    position     : relative;
    font-size    : 14px;
    color        : rgba($colorShade, 0.6);

    &::after {
        position : absolute;
        content  : "/";
        right    : -14px;
        color    : ${(props) => props.theme.breadcrumb.item.separator};
    }

    &:last-child,
    &:last-child a { color : rgba($colorShade, 1); }

    &:not(:last-child),
    &:not(:last-child) a { color : rgba($colorShade, 0.64); }

    &:last-child::after { content : ""; }
`;

const BreadcrumbWrapper = (props) => {
    return (React.createElement(Element, Object.assign({ as: BreadcrumbWrapperStyled }, props)));
};

const BreadcrumbItem = (_a) => {
    var props = __rest(_a, []);
    return (React.createElement(Element, Object.assign({ as: BreadcrumbItemStyled }, props)));
};

//  Plain table  ==============================================================
const TableStyled = styled__default.table `
    background-color : $tableBG;
    color            : $tableTextColor;

    &.bordered-rows td,
    &.bordered-rows th {
        border              : 0 solid $tableBorderColor;
        border-bottom-width : 1px;
    }

    &.bordered-columns td,
    &.bordered-columns th {
        border             : 0 solid $tableBorderColor;
        border-right-width : 1px;
    }

    &.bordered-all td,
    &.bordered-all th { border : 1px solid $tableBorderColor; }


    &.padding-all-tiny  th,
    &.padding-all-tiny  td  { padding : 4px 8px; }

    &.padding-all-small th,
    &.padding-all-small td  { padding : 8px 16px; }

    &.padding-all-small th,
    &.padding-all-small td  { padding : 16px 24px; }

    &.padding-all-large th,
    &.padding-all-large td  { padding : 24px 32px; }

    &.padding-all-huge  th,
    &.padding-all-huge  td  { padding : 32px 40px; }


    &.striped thead tr { background-color : $tableStripedHeaderBG; }

    &.striped tbody tr:not(.is-selected):nth-child(even) { background-color : $tableStripedCellBG; }

    &.hoverable tbody tr:hover {
        background-color : $tableHoverableBG !important;
        color            : $tableHoverableTextColor;
        transition       : all 0.2s;
        cursor           : pointer;
    }
`;

const Table = (_a) => {
    var { bordersFor, isStriped, isHoverable, isFullWidth, className } = _a, props = __rest(_a, ["bordersFor", "isStriped", "isHoverable", "isFullWidth", "className"]);
    const classNames = [className];
    if (bordersFor) {
        classNames.push(`bordered-${bordersFor}`);
    }
    if (isStriped) {
        classNames.push("striped");
    }
    if (isHoverable) {
        classNames.push("hoverable");
    }
    if (isFullWidth) {
        classNames.push("full-width");
    }
    return React.createElement(Element, Object.assign({ as: TableStyled, className: createClassName(classNames) }, props));
};

const CodeBlock = (_a) => {
    var { ref, source, theme } = _a, props = __rest(_a, ["ref", "source", "theme"]);
    let prismTheme = undefined;
    if (theme && theme.code && theme.code.prism && Object.keys(theme.code.prism).length !== 0) {
        prismTheme = theme.code.prism;
    }
    return (React.createElement(PrismReactRenderer__default, Object.assign({}, PrismReactRenderer.defaultProps, { code: typeof source === "object" ? JSON.stringify(source, null, 2) : source, language: "json", theme: prismTheme }, props), ({ className, style, tokens, getLineProps, getTokenProps }) => (React.createElement("pre", { className: className, style: style },
        React.createElement("code", null, tokens.map((line, i) => (React.createElement("div", Object.assign({}, getLineProps({ line, key: i })), line.map((token, key) => (React.createElement("span", Object.assign({}, getTokenProps({ token, key })))))))))))));
};

const baseColors = {
    "black": "hsl(   0,   0%,   0%)",
    "white": "hsl(   0,   0%, 100%)",
    "red": "hsl(   0,  84%,  60%)",
    "red90": "hsl(   0,  84%,  64%)",
    "red80": "hsl(   0,  84%,  68%)",
    "red70": "hsl(   0,  84%,  72%)",
    "red60": "hsl(   0,  84%,  76%)",
    "red50": "hsl(   0,  84%,  80%)",
    "red40": "hsl(   0,  84%,  84%)",
    "red30": "hsl(   0,  84%,  88%)",
    "red20": "hsl(   0,  84%,  92%)",
    "red10": "hsl(   0,  84%,  96%)",
    "salmon": "hsl(   9, 100%,  69%)",
    "salmon90": "hsl(   9, 100%,  72%)",
    "salmon80": "hsl(   9, 100%,  75%)",
    "salmon70": "hsl(   9, 100%,  79%)",
    "salmon60": "hsl(   9, 100%,  81%)",
    "salmon50": "hsl(   9, 100%,  84%)",
    "salmon40": "hsl(   9, 100%,  87%)",
    "salmon30": "hsl(   9, 100%,  91%)",
    "salmon20": "hsl(   9, 100%,  94%)",
    "salmon10": "hsl(   9, 100%,  97%)",
    "orange": "hsl(  32,  92%,  56%)",
    "orange90": "hsl(  32,  92%,  60%)",
    "orange80": "hsl(  32,  92%,  64%)",
    "orange70": "hsl(  32,  92%,  68%)",
    "orange60": "hsl(  32,  92%,  72%)",
    "orange50": "hsl(  32,  92%,  76%)",
    "orange40": "hsl(  32,  92%,  80%)",
    "orange30": "hsl(  32,  92%,  84%)",
    "orange20": "hsl(  32,  92%,  88%)",
    "orange10": "hsl(  32,  92%,  92%)",
    "amber": "hsl(  39,  97%,  61%)",
    "amber90": "hsl(  39,  97%,  65%)",
    "amber80": "hsl(  39,  96%,  69%)",
    "amber70": "hsl(  40,  96%,  72%)",
    "amber60": "hsl(  39,  97%,  76%)",
    "amber50": "hsl(  39,  96%,  80%)",
    "amber40": "hsl(  40,  95%,  84%)",
    "amber30": "hsl(  39,  97%,  88%)",
    "amber20": "hsl(  40,  95%,  92%)",
    "amber10": "hsl(  41,  90%,  96%)",
    "yellow": "hsl(  50, 100%,  52%)",
    "yellow90": "hsl(  50, 100%,  57%)",
    "yellow80": "hsl(  50, 100%,  62%)",
    "yellow70": "hsl(  50, 100%,  67%)",
    "yellow60": "hsl(  50, 100%,  72%)",
    "yellow50": "hsl(  50, 100%,  77%)",
    "yellow40": "hsl(  50, 100%,  82%)",
    "yellow30": "hsl(  50, 100%,  87%)",
    "yellow20": "hsl(  50, 100%,  92%)",
    "yellow10": "hsl(  50, 100%,  97%)",
    "pistachio": "hsl(  78,  54%,  52%)",
    "pistachio90": "hsl(  78,  54%,  57%)",
    "pistachio80": "hsl(  78,  54%,  62%)",
    "pistachio70": "hsl(  78,  54%,  67%)",
    "pistachio60": "hsl(  78,  54%,  72%)",
    "pistachio50": "hsl(  78,  54%,  77%)",
    "pistachio40": "hsl(  78,  54%,  82%)",
    "pistachio30": "hsl(  78,  54%,  87%)",
    "pistachio20": "hsl(  78,  54%,  92%)",
    "pistachio10": "hsl(  78,  54%,  97%)",
    "green": "hsl( 148,  50%,  42%)",
    "green90": "hsl( 148,  39%,  48%)",
    "green80": "hsl( 148,  36%,  54%)",
    "green70": "hsl( 148,  36%,  59%)",
    "green60": "hsl( 148,  36%,  65%)",
    "green50": "hsl( 148,  36%,  71%)",
    "green40": "hsl( 148,  36%,  77%)",
    "green30": "hsl( 148,  36%,  82%)",
    "green20": "hsl( 148,  37%,  88%)",
    "green10": "hsl( 148,  35%,  94%)",
    "teal": "hsl( 174,  62%,  48%)",
    "teal90": "hsl( 174,  58%,  53%)",
    "teal80": "hsl( 174,  58%,  58%)",
    "teal70": "hsl( 174,  57%,  63%)",
    "teal60": "hsl( 174,  58%,  69%)",
    "teal50": "hsl( 174,  58%,  74%)",
    "teal40": "hsl( 174,  57%,  79%)",
    "teal30": "hsl( 173,  58%,  84%)",
    "teal20": "hsl( 174,  56%,  89%)",
    "teal10": "hsl( 172,  56%,  95%)",
    "cyan": "hsl( 176,  78%,  55%)",
    "cyan90": "hsl( 176,  77%,  59%)",
    "cyan80": "hsl( 176,  77%,  64%)",
    "cyan70": "hsl( 176,  77%,  68%)",
    "cyan60": "hsl( 176,  77%,  73%)",
    "cyan50": "hsl( 176,  78%,  77%)",
    "cyan40": "hsl( 176,  77%,  82%)",
    "cyan30": "hsl( 176,  77%,  86%)",
    "cyan20": "hsl( 177,  75%,  91%)",
    "cyan10": "hsl( 177,  75%,  95%)",
    "sky": "hsl( 194,  97%,  72%)",
    "sky90": "hsl( 194,  97%,  75%)",
    "sky80": "hsl( 194,  97%,  77%)",
    "sky70": "hsl( 194,  96%,  80%)",
    "sky60": "hsl( 194,  95%,  83%)",
    "sky50": "hsl( 194,  97%,  86%)",
    "sky40": "hsl( 194,  97%,  89%)",
    "sky30": "hsl( 194,  95%,  91%)",
    "sky20": "hsl( 193,  93%,  94%)",
    "sky10": "hsl( 193,  88%,  97%)",
    "blue": "hsl( 212, 100%,  42%)",
    "blue90": "hsl( 212, 100%,  48%)",
    "blue80": "hsl( 212, 100%,  54%)",
    "blue70": "hsl( 212, 100%,  59%)",
    "blue60": "hsl( 212, 100%,  65%)",
    "blue50": "hsl( 212, 100%,  71%)",
    "blue40": "hsl( 212, 100%,  77%)",
    "blue30": "hsl( 212, 100%,  83%)",
    "blue20": "hsl( 212, 100%,  89%)",
    "blue10": "hsl( 212, 100%,  95%)",
    "indigo": "hsl( 237,  66%,  53%)",
    "indigo90": "hsl( 237,  66%,  57%)",
    "indigo80": "hsl( 237,  66%,  62%)",
    "indigo70": "hsl( 237,  66%,  67%)",
    "indigo60": "hsl( 237,  66%,  72%)",
    "indigo50": "hsl( 237,  65%,  76%)",
    "indigo40": "hsl( 237,  65%,  81%)",
    "indigo30": "hsl( 237,  64%,  86%)",
    "indigo20": "hsl( 238,  63%,  90%)",
    "indigo10": "hsl( 240,  60%,  95%)",
    "violet": "hsl( 258,  55%,  58%)",
    "violet90": "hsl( 259,  55%,  62%)",
    "violet80": "hsl( 259,  55%,  66%)",
    "violet70": "hsl( 259,  55%,  70%)",
    "violet60": "hsl( 259,  55%,  75%)",
    "violet50": "hsl( 258,  55%,  79%)",
    "violet40": "hsl( 259,  54%,  83%)",
    "violet30": "hsl( 259,  54%,  87%)",
    "violet20": "hsl( 260,  55%,  91%)",
    "violet10": "hsl( 260,  55%,  96%)",
    "purple": "hsl( 311,  47%,  55%)",
    "purple90": "hsl( 311,  47%,  60%)",
    "purple80": "hsl( 311,  47%,  64%)",
    "purple70": "hsl( 311,  47%,  69%)",
    "purple60": "hsl( 311,  47%,  73%)",
    "purple50": "hsl( 311,  47%,  78%)",
    "purple40": "hsl( 311,  47%,  82%)",
    "purple30": "hsl( 311,  48%,  86%)",
    "purple20": "hsl( 311,  48%,  91%)",
    "purple10": "hsl( 311,  48%,  95%)",
    "pink": "hsl( 336,  96%,  72%)",
    "pink90": "hsl( 336,  95%,  75%)",
    "pink80": "hsl( 336,  95%,  78%)",
    "pink70": "hsl( 336,  94%,  80%)",
    "pink60": "hsl( 336,  95%,  83%)",
    "pink50": "hsl( 336,  94%,  86%)",
    "pink40": "hsl( 336,  93%,  89%)",
    "pink30": "hsl( 337,  95%,  92%)",
    "pink20": "hsl( 336,  93%,  94%)",
    "pink10": "hsl( 337,  87%,  97%)",
    "crimson": "hsl( 340,  64%,  42%)",
    "crimson90": "hsl( 340,  64%,  48%)",
    "crimson80": "hsl( 340,  64%,  54%)",
    "crimson70": "hsl( 340,  64%,  59%)",
    "crimson60": "hsl( 340,  64%,  65%)",
    "crimson50": "hsl( 340,  64%,  71%)",
    "crimson40": "hsl( 340,  64%,  77%)",
    "crimson30": "hsl( 340,  64%,  82%)",
    "crimson20": "hsl( 340,  64%,  88%)",
    "crimson10": "hsl( 340,  64%,  94%)",
    "brown": "hsl(  24,  34%,  42%)",
    "brown90": "hsl(  24,  27%,  48%)",
    "brown80": "hsl(  24,  25%,  54%)",
    "brown70": "hsl(  24,  25%,  60%)",
    "brown60": "hsl(  24,  25%,  65%)",
    "brown50": "hsl(  24,  25%,  71%)",
    "brown40": "hsl(  24,  25%,  77%)",
    "brown30": "hsl(  23,  26%,  83%)",
    "brown20": "hsl(  24,  25%,  88%)",
    "brown10": "hsl(  22,  27%,  94%)",
    "slate": "hsl( 209,  12%,  50%)",
    "slate90": "hsl( 210,  12%,  55%)",
    "slate80": "hsl( 209,  12%,  60%)",
    "slate70": "hsl( 207,  12%,  65%)",
    "slate60": "hsl( 210,  12%,  70%)",
    "slate50": "hsl( 210,  12%,  75%)",
    "slate40": "hsl( 208,  13%,  80%)",
    "slate30": "hsl( 213,  12%,  85%)",
    "slate20": "hsl( 210,  12%,  90%)",
    "slate10": "hsl( 200,  11%,  95%)",
    "grey": "hsl(   0,   0%,  34%)",
    "grey90": "hsl(   0,   0%,  41%)",
    "grey80": "hsl(   0,   0%,  48%)",
    "grey70": "hsl(   0,   0%,  55%)",
    "grey60": "hsl(   0,   0%,  62%)",
    "grey50": "hsl(   0,   0%,  69%)",
    "grey40": "hsl(   0,   0%,  76%)",
    "grey30": "hsl(   0,   0%,  83%)",
    "grey20": "hsl(   0,   0%,  90%)",
    "grey10": "hsl(   0,   0%,  97%)",
};

const mainColors = {
    hue: baseColors.amber,
    tint: baseColors.indigo90,
    shade: baseColors.grey,
    analogue: baseColors.indigo50,
    accent: baseColors.green80,
};
const RFTheme = {
    mainColors,
    body: {
        bg: baseColors.white
    },
    //  TEXT  /////////////////////////////////////////////////////////////////
    text: {
        size: {
            default: 1,
            multiplier: 1.24,
        },
        paras: {
            color: baseColors.grey,
            weight: 400,
            lineHeight: 1.64,
        },
        headings: {
            color: baseColors.grey,
            weight: 600,
            lineHeight: 1.24
        },
        links: {
            default: baseColors.blue90,
            onHover: baseColors.blue60
        },
        selection: {
            bg: mainColors.hue,
            text: baseColors.white
        }
    },
    //  CARD  /////////////////////////////////////////////////////////////////
    card: {
        bg: baseColors.white,
        border: baseColors.slate10
    },
    //  INFO PANEL  ///////////////////////////////////////////////////////////
    infoPanel: {
        bg: baseColors.white,
        border: baseColors.slate20
    },
    //  BREADCRUMBS  ///////////////////////////////////////////////////////////
    breadcrumb: {
        wrapper: {
            bg: baseColors.white,
        },
        item: {
            text: mainColors.shade,
            separator: baseColors.slate40
        }
    },
    //  CODE  /////////////////////////////////////////////////////////////////
    code: {
        inline: {
            bg: baseColors.slate10,
            text: baseColors.blue70
        },
        block: {
            bg: baseColors.slate10,
            text: baseColors.blue70
        },
        prism: {}
    },
    //  INPUT  ////////////////////////////////////////////////////////////////
    input: {
        default: {
            bg: baseColors.white,
            border: baseColors.slate40,
            label: mainColors.shade,
            text: mainColors.shade
        },
        onFocus: {
            bg: baseColors.white,
            border: mainColors.hue,
            text: mainColors.shade,
            helptext: mainColors.shade,
        },
        isValid: {
            bg: baseColors.white,
            border: baseColors.green80,
            label: mainColors.shade
        },
        isInvalid: {
            bg: baseColors.red10,
            border: baseColors.green80,
            label: mainColors.shade
        }
    },
    //  SIDEBAR  //////////////////////////////////////////////////////////////
    sidebar: {
        header: baseColors.white,
        body: baseColors.white,
        separator: baseColors.slate20,
        links: {
            bg: baseColors.white,
            text: baseColors.white,
            bgOnHover: baseColors.slate20,
            textOnHover: baseColors.slate20,
            isSelected: {
                bg: mainColors.hue,
                text: baseColors.white,
            }
        },
        icons: {
            type: "stroke",
        },
        isCollapsed: {
            label: {
                text: mainColors.shade,
                bg: mainColors.hue
            }
        }
    }
};

const GlobalStyled = styled.createGlobalStyle `
    ${styledNormalize.normalize}

    /*  Colour of highlight and text colour
    - for Firefox browsers  */
    ::-moz-selection {
        background : $textHighlightBG;
        color      : $textHighlightColor;
    }
    //  Same thing - for Webkit browsers
    ::selection {
        background : $textHighlightBG;
        color      : $textHighlightColor;
    }


    // Layout
    html,
    body {
        display        : flex;
        min-height     : 100vh;
        flex-direction : column;
    }

    main   { flex : 1 0 auto; }
    footer { flex-shrink : 0; }

    // Responsive Classes
    //  Desktop  ==================================================================
    .show-only-on-mobile  { display : none !important; }
    .show-only-on-tab-pt  { display : none !important; }
    .show-only-on-tab-ls  { display : none !important; }
    .show-only-on-desktop { display : block !important; }

    .hide-on-desktop     { display : none !important; }


    //  Mobile  ===================================================================
    @media all and (max-width : 600px) {
        .show-only-on-desktop { display : none !important; }
        .hide-on-mobile       { display : none !important; }
        .show-only-on-mobile  { display : block !important; }

        .center-on-mobile,
        .centre-on-mobile { text-align : center !important; }
    }


    //  Tablet portrait  ==========================================================
    @media all and (min-width : 601px) and (max-width : 900px) {
        .show-only-on-desktop { display : none !important; }
        .hide-on-tab-pt       { display : none !important; }
        .show-only-on-tab-pt  { display : block !important; }

        .center-on-tab-pt,
        .centre-on-tab-pt { text-align : center !important; }
    }


    //  Tablet landscape  =========================================================
    @media all and (min-width : 901px) and (max-width : 1200px) {
        .show-only-on-desktop { display : none !important; }
        .hide-on-tab-ls       { display : none !important; }
        .show-only-on-tab-ls  { display : block !important; }

        .center-on-tab-ls,
        .centre-on-tab-ls { text-align : center !important; }
    }


    body {
        font-family      : ${(props) => props.theme};
        font-size        : ${(props) => props.theme.body}em;
        line-height      : ${(props) => props.theme.text.paras.lineHeight};
        color            : ${(props) => props.theme.text.paras.color};
        word-wrap        : normal;
        text-rendering   : optimizeLegibility;
        background-color : ${(props) => props.theme.body.bg};
    }

    h1, h2, h3, h4, h5, h6 {
        font-weight : ${(props) => props.theme.text.headings.weight};
        margin      : 0;
    }

    h1, h2, h3, h4, h5, h6 { line-height : ${(props) => props.theme.text.headings.lineHeight}; }

    h1 { font-size : ${(props) => props.theme.text.size.default * Math.pow(props.theme.text.size.multiplier, 8)}em; }
    h2 { font-size : ${(props) => props.theme.text.size.default * Math.pow(props.theme.text.size.multiplier, 6)}em; }
    h3 { font-size : ${(props) => props.theme.text.size.default * Math.pow(props.theme.text.size.multiplier, 4)}em; }
    h4 { font-size : ${(props) => props.theme.text.size.default * Math.pow(props.theme.text.size.multiplier, 3)}em; }
    h5 { font-size : ${(props) => props.theme.text.size.default * Math.pow(props.theme.text.size.multiplier, 2)}em; }
    h6 { font-size : ${(props) => props.theme.text.size.default * Math.pow(props.theme.text.size.multiplier, 1)}em; }

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
        color       : ${(props) => props.theme.text.links.default};
        font-weight : bold;
        transition  : all 0.2s;
    }

    a:not(.ff-button):not(.ff-pill):not(.header-links a):hover { color : ${(props) => props.theme.text.links.onHover}; }

    a:active { opacity: 0.72; }
`;

const ThemeProvider = (_a) => {
    var { theme, children } = _a, props = __rest(_a, ["theme", "children"]);
    return (React.createElement(Element, Object.assign({ as: styled.ThemeProvider, theme: lodashEs.merge(RFTheme, theme) }, props),
        React.createElement(GlobalStyled, null),
        children));
};

exports.BreadcrumbItem = BreadcrumbItem;
exports.BreadcrumbWrapper = BreadcrumbWrapper;
exports.Button = Button;
exports.Card = Card;
exports.CheckBox = CheckBox;
exports.CodeBlock = CodeBlock;
exports.ContentWrapper = ContentWrapper;
exports.Element = Element;
exports.FileUpload = FileUpload;
exports.FormItem = FormItem;
exports.FormItemGroup = FormItemGroup;
exports.FormItemJointGroup = FormItemJointGroup;
exports.FormWrapper = FormWrapper;
exports.HRule = HRule;
exports.Heading = Heading;
exports.InfoPanel = InfoPanel;
exports.InputField = InputField;
exports.InputLabel = InputLabel;
exports.NotificationItem = NotificationItem;
exports.NotificationWrapper = NotificationWrapper;
exports.Portion = Portion;
exports.RadioButton = RadioButton;
exports.Row = Row;
exports.Select = Select;
exports.SidebarHeader = SidebarHeader;
exports.SidebarItem = SidebarItem;
exports.SidebarItemIcon = SidebarItemIcon;
exports.SidebarItemText = SidebarItemText;
exports.SidebarSublinkGroup = SidebarSublinkGroup;
exports.SidebarWrapper = SidebarWrapper;
exports.Switch = Switch;
exports.Table = Table;
exports.Text = Text;
exports.Textarea = Textarea;
exports.ThemeProvider = ThemeProvider;
exports.baseColors = baseColors;
//# sourceMappingURL=index.js.map
