import { createGlobalStyle } from "styled-components";

import { normalize } from "styled-normalize";

import { GlobalStyledProps } from "./constants";

export const GlobalStyled = createGlobalStyle`
    ${normalize}

    /*  Colour of highlight and text colour
    - for Firefox browsers  */
    ::-moz-selection {
        background : $textHighlightBG;
        color      : $textHighlightColor;
    }
     /* Same thing - for Webkit browsers */
    ::selection {
        background : $textHighlightBG;
        color      : $textHighlightColor;
    }

    /* Layout */
    html,
    body {
        display        : flex;
        min-height     : 100vh;
        flex-direction : column;
    }

    main   { flex : 1 0 auto; }
    footer { flex-shrink : 0; }

    /* Responsive classes  ================================================  */
    /* Desktop   */
    .show-only-on-mobile  { display : none !important; }
    .show-only-on-tab-pt  { display : none !important; }
    .show-only-on-tab-ls  { display : none !important; }
    .show-only-on-desktop { display : block !important; }

    .hide-on-desktop     { display : none !important; }

     /* Mobile  */
    @media all and (max-width : 600px) {
        .show-only-on-desktop { display : none !important; }
        .hide-on-mobile       { display : none !important; }
        .show-only-on-mobile  { display : block !important; }

        .center-on-mobile,
        .centre-on-mobile { text-align : center !important; }
    }

     /* Tablet portrait  */
    @media all and (min-width : 601px) and (max-width : 900px) {
        .show-only-on-desktop { display : none !important; }
        .hide-on-tab-pt       { display : none !important; }
        .show-only-on-tab-pt  { display : block !important; }

        .center-on-tab-pt,
        .centre-on-tab-pt { text-align : center !important; }
    }

     /* Tablet landscape  */
    @media all and (min-width : 901px) and (max-width : 1200px) {
        .show-only-on-desktop { display : none !important; }
        .hide-on-tab-ls       { display : none !important; }
        .show-only-on-tab-ls  { display : block !important; }

        .center-on-tab-ls,
        .centre-on-tab-ls { text-align : center !important; }
    }

    /*  Responsive classes  ===============================================  */
    body {
        font-family      : ${(props: GlobalStyledProps) => props.theme};
        font-size        : ${(props: GlobalStyledProps) => props.theme.body}em;
        line-height      : ${(props: GlobalStyledProps) => props.theme.text.paras.lineHeight};
        color            : ${(props: GlobalStyledProps) => props.theme.text.paras.color};
        word-wrap        : normal;
        text-rendering   : optimizeLegibility;
        background-color : ${(props: GlobalStyledProps) => props.theme.body.bg};
    }

    h1, h2, h3, h4, h5, h6 {
        font-weight : ${(props: GlobalStyledProps) => props.theme.text.headings.weight};
        margin      : 0;
    }

    h1, h2, h3, h4, h5, h6 { line-height : ${(props: GlobalStyledProps) => props.theme.text.headings.lineHeight}; }

    h1 { font-size : ${(props: GlobalStyledProps) => props.theme.text.size.default * Math.pow(props.theme.text.size.multiplier, 8) }em; }
    h2 { font-size : ${(props: GlobalStyledProps) => props.theme.text.size.default * Math.pow(props.theme.text.size.multiplier, 6) }em; }
    h3 { font-size : ${(props: GlobalStyledProps) => props.theme.text.size.default * Math.pow(props.theme.text.size.multiplier, 4) }em; }
    h4 { font-size : ${(props: GlobalStyledProps) => props.theme.text.size.default * Math.pow(props.theme.text.size.multiplier, 3) }em; }
    h5 { font-size : ${(props: GlobalStyledProps) => props.theme.text.size.default * Math.pow(props.theme.text.size.multiplier, 2) }em; }
    h6 { font-size : ${(props: GlobalStyledProps) => props.theme.text.size.default * Math.pow(props.theme.text.size.multiplier, 1) }em; }

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
        color       : ${(props: GlobalStyledProps) => props.theme.text.links.default};
        font-weight : bold;
        transition  : all 0.2s;
    }

    a:not(.ff-button):not(.ff-pill):not(.header-links a):hover { color : ${(props: GlobalStyledProps) => props.theme.text.links.onHover}; }

    a:active { opacity: 0.72; }


    /*  RESET  ============================================================  */
    /*  Consider removing this if you have
    a zillion elements in your page  */
    *,
    *:before,
    *:after { box-sizing : border-box; }

    *:focus { outline : 0; }

    /* This affects all type scale values */
    html { font-size : $baseFontSize; }

    body {
        -moz-osx-font-smoothing : grayscale;
        -webkit-font-smoothing : antialiased;
    }

    /* Basics */
    body, button, input, select, textarea {
        font-family : BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Ubuntu", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
    }

    img {
        display : block;
        width   : 100%;
    }

    a { text-decoration : none; }

    button {
        border  : 0;
        outline : 0;
    }

    /* Input fields */
    ::-webkit-input-placeholder { opacity : 0.5; }
    ::-moz-placeholder { opacity : 0.5; }

    input { outline : none; }

    input[type="number"] {
        -webkit-appearance : none;
        -moz-appearance : none;
    }

    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
        margin             : 0;
        -webkit-appearance : none;
        -moz-appearance    : none;
    }

    /* input:-webkit-autofill { box-shadow : 0 0 0 5000px white inset; } */
    /* input:-webkit-autofill { box-shadow : 0 1px 2px hsla( 0, 100%, 0, .08) inset; } */

    /* :-webkit-autofill, */
    /* :-webkit-autofill:hover, */
    /* :-webkit-autofill:focus { box-shadow : 0 0 0 5000px white inset; } */

    input[type="date"]::-webkit-inner-spin-button { display : none; }

    input[type="date"]::-webkit-calendar-picker-indicator { opacity : 0; }

    progress[value],
    progress::-webkit-progress-value,
    progress[value]::-webkit-progress-bar {
        border             : none;
        -webkit-appearance : none;
        -moz-appearance    : none;
    }

    *:disabled {
        user-select    : none;
        pointer-events : none;
    }

    /* Option select */
    select {
        border-radius      : 0;
        -webkit-appearance : none;
        -moz-appearance : none;
    }


    /* List items */
    ul, li {
        margin     : 0;
        padding    : 0;
        list-style : none;
    }

    /* Details and Summary */
    ::-webkit-details-marker { display : none; }

    details > summary:first-of-type { list-style-type : none; }

    /* Code */
    pre, code {
        margin    : 0;
        max-width : 100%;
    }

    /* Tables */
    table { border-collapse : collapse; }

    th {
        font-weight : unset;
        text-align  : unset;
    }

    /* Reset for custom element */
    .ff-pill,
    .ff-button { user-select : none; }

    .ff-button:not([class*='border']) { border : none; }


    .show-this    { display : block !important; }
    .show-inline  { display : inline-block !important; }
    /* .show-nothing { display : none !important; }   Element isn't rendered at all */

    /* .hide-this { visibility : hidden !important; }   Element is merely invisible */

    .full-width  { width  : 100% !important; }
    .full-height { height : 100% !important; }

    @media all and (max-width : 600px) {
        .full-width-on-mobile { width : 100% !important; }
        .full-height-on-mobile { height : 100% !important; }
    }

    @media all and (min-width : 601px) and (max-width : 900px) {
        .full-width-on-tab-pt { width : 100% !important; }
        .full-height-on-tab-pt { height : 100% !important; }
    }

    @media all and (min-width : 901px) and (max-width : 1200px) {
        .full-width-on-tab-ls { width : 100% !important; }
        .full-height-on-tab-ls { height : 100% !important; }
    }

    .pull-left  { margin-right : auto !important; }
    .pull-right { margin-left : auto !important; }
    .clear-both { clear : both; }

    .no-border { border: none !important; }

      /* For when you want things bang in the centre */
      /* of both axes. Apply to parent. */
    .totally-centre-items,
    .totally-center-items {
        display         : flex !important;
        align-items     : center;
        justify-content : center;
    }

      /* For when you want child elements vertically in  */
      /* the middle. Apply to parent */
    .vertically-centre-items,
    .vertically-center-items {
        display     : flex !important;
        align-items : center !important;
    }

      /* Parent div needs to be a flex element */
    .vertically-centre-this,
    .vertically-center-this {
        align-self : center;
    }

      /* Parent div needs a set width */
    .horizontally-centre-this,
    .horizontally-center-this {
        position : relative;
        display  : block;
        margin   : 0 auto;
    }

    .push-to-ends { justify-content : space-between; }


      /* BOX MODEL HELPERS  ======================================================== */

      /* Margins for all occasions */
    .margin-all-none         { margin : 0 !important; }
    .margin-all-fixed        { margin : $measureFixed; }
    .margin-all-fixed-3x     { margin : $measureFixed*03; }
    .margin-all-tiny         { margin : $measureDynamic*01; }
    .margin-all-small        { margin : $measureDynamic*02; }
    .margin-all-medium       { margin : $measureDynamic*04; }
    .margin-all-large        { margin : $measureDynamic*08; }
    .margin-all-huge         { margin : $measureDynamic*12; }

    .margin-top-none         { margin-top : 0 !important; }
    .margin-top-fixed        { margin-top : $measureFixed; }
    .margin-top-fixed-3x     { margin-top : $measureFixed*03; }
    .margin-top-tiny         { margin-top : $measureDynamic*01; }
    .margin-top-small        { margin-top : $measureDynamic*02; }
    .margin-top-medium       { margin-top : $measureDynamic*04; }
    .margin-top-large        { margin-top : $measureDynamic*08; }
    .margin-top-huge         { margin-top : $measureDynamic*12; }

    .margin-right-none       { margin-right : 0 !important; }
    .margin-right-fixed      { margin-right : $measureFixed; }
    .margin-right-fixed-3x   { margin-right : $measureFixed*03; }
    .margin-right-tiny       { margin-right : $measureDynamic*01; }
    .margin-right-small      { margin-right : $measureDynamic*02; }
    .margin-right-medium     { margin-right : $measureDynamic*04; }
    .margin-right-large      { margin-right : $measureDynamic*08; }
    .margin-right-huge       { margin-right : $measureDynamic*12; }

    .margin-bottom-none      { margin-bottom : 0 !important; }
    .margin-bottom-fixed     { margin-bottom : $measureFixed; }
    .margin-bottom-fixed-3x  { margin-bottom : $measureFixed*03; }
    .margin-bottom-tiny      { margin-bottom : $measureDynamic*01; }
    .margin-bottom-small     { margin-bottom : $measureDynamic*02; }
    .margin-bottom-medium    { margin-bottom : $measureDynamic*04; }
    .margin-bottom-large     { margin-bottom : $measureDynamic*08; }
    .margin-bottom-huge      { margin-bottom : $measureDynamic*12; }

    .margin-left-none        { margin-left : 0 !important; }
    .margin-left-fixed       { margin-left : $measureFixed; }
    .margin-left-fixed-3x    { margin-left : $measureFixed*03; }
    .margin-left-tiny        { margin-left : $measureDynamic*01; }
    .margin-left-small       { margin-left : $measureDynamic*02; }
    .margin-left-medium      { margin-left : $measureDynamic*04; }
    .margin-left-large       { margin-left : $measureDynamic*08; }
    .margin-left-huge        { margin-left : $measureDynamic*12; }

      /* Paddings for all occasions */
    .padding-all-none        { padding : 0 !important; }
    .padding-all-fixed       { padding : $measureFixed; }
    .padding-all-fixed-3x    { padding : $measureFixed*03; }
    .padding-all-tiny        { padding : $measureDynamic*01; }
    .padding-all-small       { padding : $measureDynamic*02; }
    .padding-all-medium      { padding : $measureDynamic*04; }
    .padding-all-large       { padding : $measureDynamic*08; }
    .padding-all-huge        { padding : $measureDynamic*12; }

    .padding-top-none        { padding-top : 0 !important; }
    .padding-top-fixed       { padding-top : $measureFixed; }
    .padding-top-fixed-3x    { padding-top : $measureFixed*03; }
    .padding-top-tiny        { padding-top : $measureDynamic*01; }
    .padding-top-small       { padding-top : $measureDynamic*02; }
    .padding-top-medium      { padding-top : $measureDynamic*04; }
    .padding-top-large       { padding-top : $measureDynamic*08; }
    .padding-top-huge        { padding-top : $measureDynamic*12; }

    .padding-right-none      { padding-right : 0 !important; }
    .padding-right-fixed     { padding-right : $measureFixed; }
    .padding-right-fixed-3x  { padding-right : $measureFixed*03; }
    .padding-right-tiny      { padding-right : $measureDynamic*01; }
    .padding-right-small     { padding-right : $measureDynamic*02; }
    .padding-right-medium    { padding-right : $measureDynamic*04; }
    .padding-right-large     { padding-right : $measureDynamic*08; }
    .padding-right-huge      { padding-right : $measureDynamic*12; }

    .padding-bottom-none     { padding-bottom : 0 !important; }
    .padding-bottom-fixed    { padding-bottom : $measureFixed; }
    .padding-bottom-fixed-3x { padding-bottom : $measureFixed*03; }
    .padding-bottom-tiny     { padding-bottom : $measureDynamic*01; }
    .padding-bottom-small    { padding-bottom : $measureDynamic*02; }
    .padding-bottom-medium   { padding-bottom : $measureDynamic*04; }
    .padding-bottom-large    { padding-bottom : $measureDynamic*08; }
    .padding-bottom-huge     { padding-bottom : $measureDynamic*12; }

    .padding-left-none       { padding-left : 0 !important; }
    .padding-left-fixed      { padding-left : $measureFixed; }
    .padding-left-fixed-3x   { padding-left : $measureFixed*03; }
    .padding-left-tiny       { padding-left : $measureDynamic*01; }
    .padding-left-small      { padding-left : $measureDynamic*02; }
    .padding-left-medium     { padding-left : $measureDynamic*04; }
    .padding-left-large      { padding-left : $measureDynamic*08; }
    .padding-left-huge       { padding-left : $measureDynamic*12; }

      /* For a bit of empty space */
    .spacer-huge {
        display : block;
        width   : 100%;
        height  : 48vmin;
        clear   : both;
    }

    .spacer-large {
        display : block;
        width   : 100%;
        height  : 32vmin;
        clear   : both;
    }

    .spacer-medium {
        display : block;
        width   : 100%;
        height  : 16vmin;
        clear   : both;
    }

    .spacer-small {
        display : block;
        width   : 100%;
        height  : 8vmin;
        clear   : both;
    }

    .spacer-tiny {
        display : block;
        width   : 100%;
        height  : 4vmin;
        clear   : both;
    }

      /* For images and tiles */
    .shape-rounded  { border-radius : $measureFixed; }
    .shape-curved   { border-radius : $measureFixed*5000; }
    .shape-circular { border-radius : 50%; }

      /* Shadows for any element */
    .shadow-hard { box-shadow : 0 $measureFixed/2 $measureFixed   -2px hsla(0, 0, 0, 0.24); }
    .shadow-soft { box-shadow : 0 $measureFixed*2 $measureFixed*4 -8px hsla(0, 0, 0, 0.32); }
    .shadow-mild { box-shadow : 0 $measureFixed/4 $measureFixed/4 -2px hsla(0, 0, 0, 0.24); }
    .no-shadow   { box-shadow : none !important; }


    /* == OPACITY ============================================================== */
    .opacity-00  { opacity: 0.00; }
    .opacity-10  { opacity: 0.10; }
    .opacity-20  { opacity: 0.20; }
    .opacity-30  { opacity: 0.30; }
    .opacity-40  { opacity: 0.40; }
    .opacity-50  { opacity: 0.50; }
    .opacity-60  { opacity: 0.60; }
    .opacity-70  { opacity: 0.70; }
    .opacity-80  { opacity: 0.80; }
    .opacity-90  { opacity: 0.90; }
    .opacity-100 { opacity: 1.00; }


    /* == ICONS ================================================================ */
    .icon-tiny   { width : $measureFixed*2; }
    .icon-small  { width : $measureFixed*3; }
    .icon-medium { width : $measureFixed*4; }
    .icon-large  { width : $measureFixed*6; }
    .icon-huge   { width : $measureFixed*8; }

    /*  COLOURS  ==========================================================  */
    .bg-hue             { background-color : $colorHue; }
    .bg-tint            { background-color : $colorTint; }
    .bg-analogue        { background-color : $colorAnalogue; }
    .bg-shade           { background-color : $colorShade; }
    .bg-accent          { background-color : $colorAccent; }

    .bg-white           { background-color : $colorWhite; }
    .bg-black           { background-color : $colorBlack; }

    .bg-grey            { background-color : $colorGrey; }
    .bg-grey-90         { background-color : $colorGrey-90; }
    .bg-grey-80         { background-color : $colorGrey-80; }
    .bg-grey-70         { background-color : $colorGrey-70; }
    .bg-grey-60         { background-color : $colorGrey-60; }
    .bg-grey-50         { background-color : $colorGrey-50; }
    .bg-grey-40         { background-color : $colorGrey-40; }
    .bg-grey-30         { background-color : $colorGrey-30; }
    .bg-grey-20         { background-color : $colorGrey-20; }
    .bg-grey-10         { background-color : $colorGrey-10; }

    .bg-slate           { background-color : $colorSlate; }
    .bg-slate-90        { background-color : $colorSlate-90; }
    .bg-slate-80        { background-color : $colorSlate-80; }
    .bg-slate-70        { background-color : $colorSlate-70; }
    .bg-slate-60        { background-color : $colorSlate-60; }
    .bg-slate-50        { background-color : $colorSlate-50; }
    .bg-slate-40        { background-color : $colorSlate-40; }
    .bg-slate-30        { background-color : $colorSlate-30; }
    .bg-slate-20        { background-color : $colorSlate-20; }
    .bg-slate-10        { background-color : $colorSlate-10; }

    .bg-red             { background-color : $colorRed; }
    .bg-red-90          { background-color : $colorRed-90; }
    .bg-red-80          { background-color : $colorRed-80; }
    .bg-red-70          { background-color : $colorRed-70; }
    .bg-red-60          { background-color : $colorRed-60; }
    .bg-red-50          { background-color : $colorRed-50; }
    .bg-red-40          { background-color : $colorRed-40; }
    .bg-red-30          { background-color : $colorRed-30; }
    .bg-red-20          { background-color : $colorRed-20; }
    .bg-red-10          { background-color : $colorRed-10; }

    .bg-orange          { background-color : $colorOrange; }
    .bg-orange-90       { background-color : $colorOrange-90; }
    .bg-orange-80       { background-color : $colorOrange-80; }
    .bg-orange-70       { background-color : $colorOrange-70; }
    .bg-orange-60       { background-color : $colorOrange-60; }
    .bg-orange-50       { background-color : $colorOrange-50; }
    .bg-orange-40       { background-color : $colorOrange-40; }
    .bg-orange-30       { background-color : $colorOrange-30; }
    .bg-orange-20       { background-color : $colorOrange-20; }
    .bg-orange-10       { background-color : $colorOrange-10; }

    .bg-amber           { background-color : $colorAmber; }
    .bg-amber-90        { background-color : $colorAmber-90; }
    .bg-amber-80        { background-color : $colorAmber-80; }
    .bg-amber-70        { background-color : $colorAmber-70; }
    .bg-amber-60        { background-color : $colorAmber-60; }
    .bg-amber-50        { background-color : $colorAmber-50; }
    .bg-amber-40        { background-color : $colorAmber-40; }
    .bg-amber-30        { background-color : $colorAmber-30; }
    .bg-amber-20        { background-color : $colorAmber-20; }
    .bg-amber-10        { background-color : $colorAmber-10; }

    .bg-yellow          { background-color : $colorYellow; }
    .bg-yellow-90       { background-color : $colorYellow-90; }
    .bg-yellow-80       { background-color : $colorYellow-80; }
    .bg-yellow-70       { background-color : $colorYellow-70; }
    .bg-yellow-60       { background-color : $colorYellow-60; }
    .bg-yellow-50       { background-color : $colorYellow-50; }
    .bg-yellow-40       { background-color : $colorYellow-40; }
    .bg-yellow-30       { background-color : $colorYellow-30; }
    .bg-yellow-20       { background-color : $colorYellow-20; }
    .bg-yellow-10       { background-color : $colorYellow-10; }

    .bg-pistachio       { background-color : $colorPistachio; }
    .bg-pistachio-90    { background-color : $colorPistachio-90; }
    .bg-pistachio-80    { background-color : $colorPistachio-80; }
    .bg-pistachio-70    { background-color : $colorPistachio-70; }
    .bg-pistachio-60    { background-color : $colorPistachio-60; }
    .bg-pistachio-50    { background-color : $colorPistachio-50; }
    .bg-pistachio-40    { background-color : $colorPistachio-40; }
    .bg-pistachio-30    { background-color : $colorPistachio-30; }
    .bg-pistachio-20    { background-color : $colorPistachio-20; }
    .bg-pistachio-10    { background-color : $colorPistachio-10; }

    .bg-green           { background-color : $colorGreen; }
    .bg-green-90        { background-color : $colorGreen-90; }
    .bg-green-80        { background-color : $colorGreen-80; }
    .bg-green-70        { background-color : $colorGreen-70; }
    .bg-green-60        { background-color : $colorGreen-60; }
    .bg-green-50        { background-color : $colorGreen-50; }
    .bg-green-40        { background-color : $colorGreen-40; }
    .bg-green-30        { background-color : $colorGreen-30; }
    .bg-green-20        { background-color : $colorGreen-20; }
    .bg-green-10        { background-color : $colorGreen-10; }

    .bg-teal            { background-color : $colorTeal; }
    .bg-teal-90         { background-color : $colorTeal-90; }
    .bg-teal-80         { background-color : $colorTeal-80; }
    .bg-teal-70         { background-color : $colorTeal-70; }
    .bg-teal-60         { background-color : $colorTeal-60; }
    .bg-teal-50         { background-color : $colorTeal-50; }
    .bg-teal-40         { background-color : $colorTeal-40; }
    .bg-teal-30         { background-color : $colorTeal-30; }
    .bg-teal-20         { background-color : $colorTeal-20; }
    .bg-teal-10         { background-color : $colorTeal-10; }

    .bg-cyan            { background-color : $colorCyan; }
    .bg-cyan-90         { background-color : $colorCyan-90; }
    .bg-cyan-80         { background-color : $colorCyan-80; }
    .bg-cyan-70         { background-color : $colorCyan-70; }
    .bg-cyan-60         { background-color : $colorCyan-60; }
    .bg-cyan-50         { background-color : $colorCyan-50; }
    .bg-cyan-40         { background-color : $colorCyan-40; }
    .bg-cyan-30         { background-color : $colorCyan-30; }
    .bg-cyan-20         { background-color : $colorCyan-20; }
    .bg-cyan-10         { background-color : $colorCyan-10; }

    .bg-sky             { background-color : $colorSky; }
    .bg-sky-90          { background-color : $colorSky-90; }
    .bg-sky-80          { background-color : $colorSky-80; }
    .bg-sky-70          { background-color : $colorSky-70; }
    .bg-sky-60          { background-color : $colorSky-60; }
    .bg-sky-50          { background-color : $colorSky-50; }
    .bg-sky-40          { background-color : $colorSky-40; }
    .bg-sky-30          { background-color : $colorSky-30; }
    .bg-sky-20          { background-color : $colorSky-20; }
    .bg-sky-10          { background-color : $colorSky-10; }

    .bg-blue            { background-color : $colorBlue; }
    .bg-blue-90         { background-color : $colorBlue-90; }
    .bg-blue-80         { background-color : $colorBlue-80; }
    .bg-blue-70         { background-color : $colorBlue-70; }
    .bg-blue-60         { background-color : $colorBlue-60; }
    .bg-blue-50         { background-color : $colorBlue-50; }
    .bg-blue-40         { background-color : $colorBlue-40; }
    .bg-blue-30         { background-color : $colorBlue-30; }
    .bg-blue-20         { background-color : $colorBlue-20; }
    .bg-blue-10         { background-color : $colorBlue-10; }

    .bg-indigo          { background-color : $colorIndigo; }
    .bg-indigo-90       { background-color : $colorIndigo-90; }
    .bg-indigo-80       { background-color : $colorIndigo-80; }
    .bg-indigo-70       { background-color : $colorIndigo-70; }
    .bg-indigo-60       { background-color : $colorIndigo-60; }
    .bg-indigo-50       { background-color : $colorIndigo-50; }
    .bg-indigo-40       { background-color : $colorIndigo-40; }
    .bg-indigo-30       { background-color : $colorIndigo-30; }
    .bg-indigo-20       { background-color : $colorIndigo-20; }
    .bg-indigo-10       { background-color : $colorIndigo-10; }

    .bg-violet          { background-color : $colorViolet; }
    .bg-violet-90       { background-color : $colorViolet-90; }
    .bg-violet-80       { background-color : $colorViolet-80; }
    .bg-violet-70       { background-color : $colorViolet-70; }
    .bg-violet-60       { background-color : $colorViolet-60; }
    .bg-violet-50       { background-color : $colorViolet-50; }
    .bg-violet-40       { background-color : $colorViolet-40; }
    .bg-violet-30       { background-color : $colorViolet-30; }
    .bg-violet-20       { background-color : $colorViolet-20; }
    .bg-violet-10       { background-color : $colorViolet-10; }

    .bg-purple          { background-color : $colorPurple; }
    .bg-purple-90       { background-color : $colorPurple-90; }
    .bg-purple-80       { background-color : $colorPurple-80; }
    .bg-purple-70       { background-color : $colorPurple-70; }
    .bg-purple-60       { background-color : $colorPurple-60; }
    .bg-purple-50       { background-color : $colorPurple-50; }
    .bg-purple-40       { background-color : $colorPurple-40; }
    .bg-purple-30       { background-color : $colorPurple-30; }
    .bg-purple-20       { background-color : $colorPurple-20; }
    .bg-purple-10       { background-color : $colorPurple-10; }

    .bg-pink            { background-color : $colorPink; }
    .bg-pink-90         { background-color : $colorPink-90; }
    .bg-pink-80         { background-color : $colorPink-80; }
    .bg-pink-70         { background-color : $colorPink-70; }
    .bg-pink-60         { background-color : $colorPink-60; }
    .bg-pink-50         { background-color : $colorPink-50; }
    .bg-pink-40         { background-color : $colorPink-40; }
    .bg-pink-30         { background-color : $colorPink-30; }
    .bg-pink-20         { background-color : $colorPink-20; }
    .bg-pink-10         { background-color : $colorPink-10; }

    .bg-salmon          { background-color : $colorSalmon; }
    .bg-salmon-90       { background-color : $colorSalmon-90; }
    .bg-salmon-80       { background-color : $colorSalmon-80; }
    .bg-salmon-70       { background-color : $colorSalmon-70; }
    .bg-salmon-60       { background-color : $colorSalmon-60; }
    .bg-salmon-50       { background-color : $colorSalmon-50; }
    .bg-salmon-40       { background-color : $colorSalmon-40; }
    .bg-salmon-30       { background-color : $colorSalmon-30; }
    .bg-salmon-20       { background-color : $colorSalmon-20; }
    .bg-salmon-10       { background-color : $colorSalmon-10; }

    .bg-crimson         { background-color : $colorCrimson; }
    .bg-crimson-90      { background-color : $colorCrimson-90; }
    .bg-crimson-80      { background-color : $colorCrimson-80; }
    .bg-crimson-70      { background-color : $colorCrimson-70; }
    .bg-crimson-60      { background-color : $colorCrimson-60; }
    .bg-crimson-50      { background-color : $colorCrimson-50; }
    .bg-crimson-40      { background-color : $colorCrimson-40; }
    .bg-crimson-30      { background-color : $colorCrimson-30; }
    .bg-crimson-20      { background-color : $colorCrimson-20; }
    .bg-crimson-10      { background-color : $colorCrimson-10; }

    .bg-brown           { background-color : $colorBrown; }
    .bg-brown-90        { background-color : $colorBrown-90; }
    .bg-brown-80        { background-color : $colorBrown-80; }
    .bg-brown-70        { background-color : $colorBrown-70; }
    .bg-brown-60        { background-color : $colorBrown-60; }
    .bg-brown-50        { background-color : $colorBrown-50; }
    .bg-brown-40        { background-color : $colorBrown-40; }
    .bg-brown-30        { background-color : $colorBrown-30; }
    .bg-brown-20        { background-color : $colorBrown-20; }
    .bg-brown-10        { background-color : $colorBrown-10; }

    .bg-transparent     { background-color: transparent; }


    //  Colours for text ==========================================================

    .text-hue             { color : $colorHue; }
    .text-tint            { color : $colorTint; }
    .text-analogue        { color : $colorAnalogue; }
    .text-shade           { color : $colorShade; }
    .text-accent          { color : $colorAccent; }


    .text-white           { color : $colorWhite; }
    .text-black           { color : $colorBlack; }

    .text-grey            { color : $colorGrey; }
    .text-grey-90         { color : $colorGrey-90; }
    .text-grey-80         { color : $colorGrey-80; }
    .text-grey-70         { color : $colorGrey-70; }
    .text-grey-60         { color : $colorGrey-60; }
    .text-grey-50         { color : $colorGrey-50; }
    .text-grey-40         { color : $colorGrey-40; }
    .text-grey-30         { color : $colorGrey-30; }
    .text-grey-20         { color : $colorGrey-20; }
    .text-grey-10         { color : $colorGrey-10; }

    .text-slate           { color : $colorSlate; }
    .text-slate-90        { color : $colorSlate-90; }
    .text-slate-80        { color : $colorSlate-80; }
    .text-slate-70        { color : $colorSlate-70; }
    .text-slate-60        { color : $colorSlate-60; }
    .text-slate-50        { color : $colorSlate-50; }
    .text-slate-40        { color : $colorSlate-40; }
    .text-slate-30        { color : $colorSlate-30; }
    .text-slate-20        { color : $colorSlate-20; }
    .text-slate-10        { color : $colorSlate-10; }

    .text-red             { color : $colorRed; }
    .text-red-90          { color : $colorRed-90; }
    .text-red-80          { color : $colorRed-80; }
    .text-red-70          { color : $colorRed-70; }
    .text-red-60          { color : $colorRed-60; }
    .text-red-50          { color : $colorRed-50; }
    .text-red-40          { color : $colorRed-40; }
    .text-red-30          { color : $colorRed-30; }
    .text-red-20          { color : $colorRed-20; }
    .text-red-10          { color : $colorRed-10; }

    .text-orange          { color : $colorOrange; }
    .text-orange-90       { color : $colorOrange-90; }
    .text-orange-80       { color : $colorOrange-80; }
    .text-orange-70       { color : $colorOrange-70; }
    .text-orange-60       { color : $colorOrange-60; }
    .text-orange-50       { color : $colorOrange-50; }
    .text-orange-40       { color : $colorOrange-40; }
    .text-orange-30       { color : $colorOrange-30; }
    .text-orange-20       { color : $colorOrange-20; }
    .text-orange-10       { color : $colorOrange-10; }

    .text-amber           { color : $colorAmber; }
    .text-amber-90        { color : $colorAmber-90; }
    .text-amber-80        { color : $colorAmber-80; }
    .text-amber-70        { color : $colorAmber-70; }
    .text-amber-60        { color : $colorAmber-60; }
    .text-amber-50        { color : $colorAmber-50; }
    .text-amber-40        { color : $colorAmber-40; }
    .text-amber-30        { color : $colorAmber-30; }
    .text-amber-20        { color : $colorAmber-20; }
    .text-amber-10        { color : $colorAmber-10; }

    .text-yellow          { color : $colorYellow; }
    .text-yellow-90       { color : $colorYellow-90; }
    .text-yellow-80       { color : $colorYellow-80; }
    .text-yellow-70       { color : $colorYellow-70; }
    .text-yellow-60       { color : $colorYellow-60; }
    .text-yellow-50       { color : $colorYellow-50; }
    .text-yellow-40       { color : $colorYellow-40; }
    .text-yellow-30       { color : $colorYellow-30; }
    .text-yellow-20       { color : $colorYellow-20; }
    .text-yellow-10       { color : $colorYellow-10; }

    .text-pistachio       { color : $colorPistachio; }
    .text-pistachio-90    { color : $colorPistachio-90; }
    .text-pistachio-80    { color : $colorPistachio-80; }
    .text-pistachio-70    { color : $colorPistachio-70; }
    .text-pistachio-60    { color : $colorPistachio-60; }
    .text-pistachio-50    { color : $colorPistachio-50; }
    .text-pistachio-40    { color : $colorPistachio-40; }
    .text-pistachio-30    { color : $colorPistachio-30; }
    .text-pistachio-20    { color : $colorPistachio-20; }
    .text-pistachio-10    { color : $colorPistachio-10; }

    .text-green           { color : $colorGreen; }
    .text-green-90        { color : $colorGreen-90; }
    .text-green-80        { color : $colorGreen-80; }
    .text-green-70        { color : $colorGreen-70; }
    .text-green-60        { color : $colorGreen-60; }
    .text-green-50        { color : $colorGreen-50; }
    .text-green-40        { color : $colorGreen-40; }
    .text-green-30        { color : $colorGreen-30; }
    .text-green-20        { color : $colorGreen-20; }
    .text-green-10        { color : $colorGreen-10; }

    .text-teal            { color : $colorTeal; }
    .text-teal-90         { color : $colorTeal-90; }
    .text-teal-80         { color : $colorTeal-80; }
    .text-teal-70         { color : $colorTeal-70; }
    .text-teal-60         { color : $colorTeal-60; }
    .text-teal-50         { color : $colorTeal-50; }
    .text-teal-40         { color : $colorTeal-40; }
    .text-teal-30         { color : $colorTeal-30; }
    .text-teal-20         { color : $colorTeal-20; }
    .text-teal-10         { color : $colorTeal-10; }

    .text-cyan            { color : $colorCyan; }
    .text-cyan-90         { color : $colorCyan-90; }
    .text-cyan-80         { color : $colorCyan-80; }
    .text-cyan-70         { color : $colorCyan-70; }
    .text-cyan-60         { color : $colorCyan-60; }
    .text-cyan-50         { color : $colorCyan-50; }
    .text-cyan-40         { color : $colorCyan-40; }
    .text-cyan-30         { color : $colorCyan-30; }
    .text-cyan-20         { color : $colorCyan-20; }
    .text-cyan-10         { color : $colorCyan-10; }

    .text-sky             { color : $colorSky; }
    .text-sky-90          { color : $colorSky-90; }
    .text-sky-80          { color : $colorSky-80; }
    .text-sky-70          { color : $colorSky-70; }
    .text-sky-60          { color : $colorSky-60; }
    .text-sky-50          { color : $colorSky-50; }
    .text-sky-40          { color : $colorSky-40; }
    .text-sky-30          { color : $colorSky-30; }
    .text-sky-20          { color : $colorSky-20; }
    .text-sky-10          { color : $colorSky-10; }

    .text-blue            { color : $colorBlue; }
    .text-blue-90         { color : $colorBlue-90; }
    .text-blue-80         { color : $colorBlue-80; }
    .text-blue-70         { color : $colorBlue-70; }
    .text-blue-60         { color : $colorBlue-60; }
    .text-blue-50         { color : $colorBlue-50; }
    .text-blue-40         { color : $colorBlue-40; }
    .text-blue-30         { color : $colorBlue-30; }
    .text-blue-20         { color : $colorBlue-20; }
    .text-blue-10         { color : $colorBlue-10; }

    .text-indigo          { color : $colorIndigo; }
    .text-indigo-90       { color : $colorIndigo-90; }
    .text-indigo-80       { color : $colorIndigo-80; }
    .text-indigo-70       { color : $colorIndigo-70; }
    .text-indigo-60       { color : $colorIndigo-60; }
    .text-indigo-50       { color : $colorIndigo-50; }
    .text-indigo-40       { color : $colorIndigo-40; }
    .text-indigo-30       { color : $colorIndigo-30; }
    .text-indigo-20       { color : $colorIndigo-20; }
    .text-indigo-10       { color : $colorIndigo-10; }

    .text-violet          { color : $colorViolet; }
    .text-violet-90       { color : $colorViolet-90; }
    .text-violet-80       { color : $colorViolet-80; }
    .text-violet-70       { color : $colorViolet-70; }
    .text-violet-60       { color : $colorViolet-60; }
    .text-violet-50       { color : $colorViolet-50; }
    .text-violet-40       { color : $colorViolet-40; }
    .text-violet-30       { color : $colorViolet-30; }
    .text-violet-20       { color : $colorViolet-20; }
    .text-violet-10       { color : $colorViolet-10; }

    .text-purple          { color : $colorPurple; }
    .text-purple-90       { color : $colorPurple-90; }
    .text-purple-80       { color : $colorPurple-80; }
    .text-purple-70       { color : $colorPurple-70; }
    .text-purple-60       { color : $colorPurple-60; }
    .text-purple-50       { color : $colorPurple-50; }
    .text-purple-40       { color : $colorPurple-40; }
    .text-purple-30       { color : $colorPurple-30; }
    .text-purple-20       { color : $colorPurple-20; }
    .text-purple-10       { color : $colorPurple-10; }

    .text-pink            { color : $colorPink; }
    .text-pink-90         { color : $colorPink-90; }
    .text-pink-80         { color : $colorPink-80; }
    .text-pink-70         { color : $colorPink-70; }
    .text-pink-60         { color : $colorPink-60; }
    .text-pink-50         { color : $colorPink-50; }
    .text-pink-40         { color : $colorPink-40; }
    .text-pink-30         { color : $colorPink-30; }
    .text-pink-20         { color : $colorPink-20; }
    .text-pink-10         { color : $colorPink-10; }

    .text-salmon          { color : $colorSalmon; }
    .text-salmon-90       { color : $colorSalmon-90; }
    .text-salmon-80       { color : $colorSalmon-80; }
    .text-salmon-70       { color : $colorSalmon-70; }
    .text-salmon-60       { color : $colorSalmon-60; }
    .text-salmon-50       { color : $colorSalmon-50; }
    .text-salmon-40       { color : $colorSalmon-40; }
    .text-salmon-30       { color : $colorSalmon-30; }
    .text-salmon-20       { color : $colorSalmon-20; }
    .text-salmon-10       { color : $colorSalmon-10; }

    .text-crimson         { color : $colorCrimson; }
    .text-crimson-90      { color : $colorCrimson-90; }
    .text-crimson-80      { color : $colorCrimson-80; }
    .text-crimson-70      { color : $colorCrimson-70; }
    .text-crimson-60      { color : $colorCrimson-60; }
    .text-crimson-50      { color : $colorCrimson-50; }
    .text-crimson-40      { color : $colorCrimson-40; }
    .text-crimson-30      { color : $colorCrimson-30; }
    .text-crimson-20      { color : $colorCrimson-20; }
    .text-crimson-10      { color : $colorCrimson-10; }

    .text-brown           { color : $colorBrown; }
    .text-brown-90        { color : $colorBrown-90; }
    .text-brown-80        { color : $colorBrown-80; }
    .text-brown-70        { color : $colorBrown-70; }
    .text-brown-60        { color : $colorBrown-60; }
    .text-brown-50        { color : $colorBrown-50; }
    .text-brown-40        { color : $colorBrown-40; }
    .text-brown-30        { color : $colorBrown-30; }
    .text-brown-20        { color : $colorBrown-20; }
    .text-brown-10        { color : $colorBrown-10; }

    .text-transparent     { color: transparent; }





    //  Colours for borders =======================================================

    .border-hue             { border : 2px solid $colorHue; }
    .border-tint            { border : 2px solid $colorTint; }
    .border-analogue        { border : 2px solid $colorAnalogue; }
    .border-shade           { border : 2px solid $colorShade; }
    .border-accent          { border : 2px solid $colorAccent; }


    .border-white           { border : 2px solid $colorWhite; }
    .border-black           { border : 2px solid $colorBlack; }

    .border-grey            { border : 2px solid $colorGrey; }
    .border-grey-90         { border : 2px solid $colorGrey-90; }
    .border-grey-80         { border : 2px solid $colorGrey-80; }
    .border-grey-70         { border : 2px solid $colorGrey-70; }
    .border-grey-60         { border : 2px solid $colorGrey-60; }
    .border-grey-50         { border : 2px solid $colorGrey-50; }
    .border-grey-40         { border : 2px solid $colorGrey-40; }
    .border-grey-30         { border : 2px solid $colorGrey-30; }
    .border-grey-20         { border : 2px solid $colorGrey-20; }
    .border-grey-10         { border : 2px solid $colorGrey-10; }

    .border-slate           { border : 2px solid $colorSlate; }
    .border-slate-90        { border : 2px solid $colorSlate-90; }
    .border-slate-80        { border : 2px solid $colorSlate-80; }
    .border-slate-70        { border : 2px solid $colorSlate-70; }
    .border-slate-60        { border : 2px solid $colorSlate-60; }
    .border-slate-50        { border : 2px solid $colorSlate-50; }
    .border-slate-40        { border : 2px solid $colorSlate-40; }
    .border-slate-30        { border : 2px solid $colorSlate-30; }
    .border-slate-20        { border : 2px solid $colorSlate-20; }
    .border-slate-10        { border : 2px solid $colorSlate-10; }

    .border-red             { border : 2px solid $colorRed; }
    .border-red-90          { border : 2px solid $colorRed-90; }
    .border-red-80          { border : 2px solid $colorRed-80; }
    .border-red-70          { border : 2px solid $colorRed-70; }
    .border-red-60          { border : 2px solid $colorRed-60; }
    .border-red-50          { border : 2px solid $colorRed-50; }
    .border-red-40          { border : 2px solid $colorRed-40; }
    .border-red-30          { border : 2px solid $colorRed-30; }
    .border-red-20          { border : 2px solid $colorRed-20; }
    .border-red-10          { border : 2px solid $colorRed-10; }

    .border-orange          { border : 2px solid $colorOrange; }
    .border-orange-90       { border : 2px solid $colorOrange-90; }
    .border-orange-80       { border : 2px solid $colorOrange-80; }
    .border-orange-70       { border : 2px solid $colorOrange-70; }
    .border-orange-60       { border : 2px solid $colorOrange-60; }
    .border-orange-50       { border : 2px solid $colorOrange-50; }
    .border-orange-40       { border : 2px solid $colorOrange-40; }
    .border-orange-30       { border : 2px solid $colorOrange-30; }
    .border-orange-20       { border : 2px solid $colorOrange-20; }
    .border-orange-10       { border : 2px solid $colorOrange-10; }

    .border-amber           { border : 2px solid $colorAmber; }
    .border-amber-90        { border : 2px solid $colorAmber-90; }
    .border-amber-80        { border : 2px solid $colorAmber-80; }
    .border-amber-70        { border : 2px solid $colorAmber-70; }
    .border-amber-60        { border : 2px solid $colorAmber-60; }
    .border-amber-50        { border : 2px solid $colorAmber-50; }
    .border-amber-40        { border : 2px solid $colorAmber-40; }
    .border-amber-30        { border : 2px solid $colorAmber-30; }
    .border-amber-20        { border : 2px solid $colorAmber-20; }
    .border-amber-10        { border : 2px solid $colorAmber-10; }

    .border-yellow          { border : 2px solid $colorYellow; }
    .border-yellow-90       { border : 2px solid $colorYellow-90; }
    .border-yellow-80       { border : 2px solid $colorYellow-80; }
    .border-yellow-70       { border : 2px solid $colorYellow-70; }
    .border-yellow-60       { border : 2px solid $colorYellow-60; }
    .border-yellow-50       { border : 2px solid $colorYellow-50; }
    .border-yellow-40       { border : 2px solid $colorYellow-40; }
    .border-yellow-30       { border : 2px solid $colorYellow-30; }
    .border-yellow-20       { border : 2px solid $colorYellow-20; }
    .border-yellow-10       { border : 2px solid $colorYellow-10; }

    .border-pistachio       { border : 2px solid $colorPistachio; }
    .border-pistachio-90    { border : 2px solid $colorPistachio-90; }
    .border-pistachio-80    { border : 2px solid $colorPistachio-80; }
    .border-pistachio-70    { border : 2px solid $colorPistachio-70; }
    .border-pistachio-60    { border : 2px solid $colorPistachio-60; }
    .border-pistachio-50    { border : 2px solid $colorPistachio-50; }
    .border-pistachio-40    { border : 2px solid $colorPistachio-40; }
    .border-pistachio-30    { border : 2px solid $colorPistachio-30; }
    .border-pistachio-20    { border : 2px solid $colorPistachio-20; }
    .border-pistachio-10    { border : 2px solid $colorPistachio-10; }

    .border-green           { border : 2px solid $colorGreen; }
    .border-green-90        { border : 2px solid $colorGreen-90; }
    .border-green-80        { border : 2px solid $colorGreen-80; }
    .border-green-70        { border : 2px solid $colorGreen-70; }
    .border-green-60        { border : 2px solid $colorGreen-60; }
    .border-green-50        { border : 2px solid $colorGreen-50; }
    .border-green-40        { border : 2px solid $colorGreen-40; }
    .border-green-30        { border : 2px solid $colorGreen-30; }
    .border-green-20        { border : 2px solid $colorGreen-20; }
    .border-green-10        { border : 2px solid $colorGreen-10; }

    .border-teal            { border : 2px solid $colorTeal; }
    .border-teal-90         { border : 2px solid $colorTeal-90; }
    .border-teal-80         { border : 2px solid $colorTeal-80; }
    .border-teal-70         { border : 2px solid $colorTeal-70; }
    .border-teal-60         { border : 2px solid $colorTeal-60; }
    .border-teal-50         { border : 2px solid $colorTeal-50; }
    .border-teal-40         { border : 2px solid $colorTeal-40; }
    .border-teal-30         { border : 2px solid $colorTeal-30; }
    .border-teal-20         { border : 2px solid $colorTeal-20; }
    .border-teal-10         { border : 2px solid $colorTeal-10; }

    .border-cyan            { border : 2px solid $colorCyan; }
    .border-cyan-90         { border : 2px solid $colorCyan-90; }
    .border-cyan-80         { border : 2px solid $colorCyan-80; }
    .border-cyan-70         { border : 2px solid $colorCyan-70; }
    .border-cyan-60         { border : 2px solid $colorCyan-60; }
    .border-cyan-50         { border : 2px solid $colorCyan-50; }
    .border-cyan-40         { border : 2px solid $colorCyan-40; }
    .border-cyan-30         { border : 2px solid $colorCyan-30; }
    .border-cyan-20         { border : 2px solid $colorCyan-20; }
    .border-cyan-10         { border : 2px solid $colorCyan-10; }

    .border-sky             { border : 2px solid $colorSky; }
    .border-sky-90          { border : 2px solid $colorSky-90; }
    .border-sky-80          { border : 2px solid $colorSky-80; }
    .border-sky-70          { border : 2px solid $colorSky-70; }
    .border-sky-60          { border : 2px solid $colorSky-60; }
    .border-sky-50          { border : 2px solid $colorSky-50; }
    .border-sky-40          { border : 2px solid $colorSky-40; }
    .border-sky-30          { border : 2px solid $colorSky-30; }
    .border-sky-20          { border : 2px solid $colorSky-20; }
    .border-sky-10          { border : 2px solid $colorSky-10; }

    .border-blue            { border : 2px solid $colorBlue; }
    .border-blue-90         { border : 2px solid $colorBlue-90; }
    .border-blue-80         { border : 2px solid $colorBlue-80; }
    .border-blue-70         { border : 2px solid $colorBlue-70; }
    .border-blue-60         { border : 2px solid $colorBlue-60; }
    .border-blue-50         { border : 2px solid $colorBlue-50; }
    .border-blue-40         { border : 2px solid $colorBlue-40; }
    .border-blue-30         { border : 2px solid $colorBlue-30; }
    .border-blue-20         { border : 2px solid $colorBlue-20; }
    .border-blue-10         { border : 2px solid $colorBlue-10; }

    .border-indigo          { border : 2px solid $colorIndigo; }
    .border-indigo-90       { border : 2px solid $colorIndigo-90; }
    .border-indigo-80       { border : 2px solid $colorIndigo-80; }
    .border-indigo-70       { border : 2px solid $colorIndigo-70; }
    .border-indigo-60       { border : 2px solid $colorIndigo-60; }
    .border-indigo-50       { border : 2px solid $colorIndigo-50; }
    .border-indigo-40       { border : 2px solid $colorIndigo-40; }
    .border-indigo-30       { border : 2px solid $colorIndigo-30; }
    .border-indigo-20       { border : 2px solid $colorIndigo-20; }
    .border-indigo-10       { border : 2px solid $colorIndigo-10; }

    .border-violet          { border : 2px solid $colorViolet; }
    .border-violet-90       { border : 2px solid $colorViolet-90; }
    .border-violet-80       { border : 2px solid $colorViolet-80; }
    .border-violet-70       { border : 2px solid $colorViolet-70; }
    .border-violet-60       { border : 2px solid $colorViolet-60; }
    .border-violet-50       { border : 2px solid $colorViolet-50; }
    .border-violet-40       { border : 2px solid $colorViolet-40; }
    .border-violet-30       { border : 2px solid $colorViolet-30; }
    .border-violet-20       { border : 2px solid $colorViolet-20; }
    .border-violet-10       { border : 2px solid $colorViolet-10; }

    .border-purple          { border : 2px solid $colorPurple; }
    .border-purple-90       { border : 2px solid $colorPurple-90; }
    .border-purple-80       { border : 2px solid $colorPurple-80; }
    .border-purple-70       { border : 2px solid $colorPurple-70; }
    .border-purple-60       { border : 2px solid $colorPurple-60; }
    .border-purple-50       { border : 2px solid $colorPurple-50; }
    .border-purple-40       { border : 2px solid $colorPurple-40; }
    .border-purple-30       { border : 2px solid $colorPurple-30; }
    .border-purple-20       { border : 2px solid $colorPurple-20; }
    .border-purple-10       { border : 2px solid $colorPurple-10; }

    .border-pink            { border : 2px solid $colorPink; }
    .border-pink-90         { border : 2px solid $colorPink-90; }
    .border-pink-80         { border : 2px solid $colorPink-80; }
    .border-pink-70         { border : 2px solid $colorPink-70; }
    .border-pink-60         { border : 2px solid $colorPink-60; }
    .border-pink-50         { border : 2px solid $colorPink-50; }
    .border-pink-40         { border : 2px solid $colorPink-40; }
    .border-pink-30         { border : 2px solid $colorPink-30; }
    .border-pink-20         { border : 2px solid $colorPink-20; }
    .border-pink-10         { border : 2px solid $colorPink-10; }

    .border-salmon          { border : 2px solid $colorSalmon; }
    .border-salmon-90       { border : 2px solid $colorSalmon-90; }
    .border-salmon-80       { border : 2px solid $colorSalmon-80; }
    .border-salmon-70       { border : 2px solid $colorSalmon-70; }
    .border-salmon-60       { border : 2px solid $colorSalmon-60; }
    .border-salmon-50       { border : 2px solid $colorSalmon-50; }
    .border-salmon-40       { border : 2px solid $colorSalmon-40; }
    .border-salmon-30       { border : 2px solid $colorSalmon-30; }
    .border-salmon-20       { border : 2px solid $colorSalmon-20; }
    .border-salmon-10       { border : 2px solid $colorSalmon-10; }

    .border-crimson         { border : 2px solid $colorCrimson; }
    .border-crimson-90      { border : 2px solid $colorCrimson-90; }
    .border-crimson-80      { border : 2px solid $colorCrimson-80; }
    .border-crimson-70      { border : 2px solid $colorCrimson-70; }
    .border-crimson-60      { border : 2px solid $colorCrimson-60; }
    .border-crimson-50      { border : 2px solid $colorCrimson-50; }
    .border-crimson-40      { border : 2px solid $colorCrimson-40; }
    .border-crimson-30      { border : 2px solid $colorCrimson-30; }
    .border-crimson-20      { border : 2px solid $colorCrimson-20; }
    .border-crimson-10      { border : 2px solid $colorCrimson-10; }

    .border-brown           { border : 2px solid $colorBrown; }
    .border-brown-90        { border : 2px solid $colorBrown-90; }
    .border-brown-80        { border : 2px solid $colorBrown-80; }
    .border-brown-70        { border : 2px solid $colorBrown-70; }
    .border-brown-60        { border : 2px solid $colorBrown-60; }
    .border-brown-50        { border : 2px solid $colorBrown-50; }
    .border-brown-40        { border : 2px solid $colorBrown-40; }
    .border-brown-30        { border : 2px solid $colorBrown-30; }
    .border-brown-20        { border : 2px solid $colorBrown-20; }
    .border-brown-10        { border : 2px solid $colorBrown-10; }

    .border-transparent     { border : 2px solid transparent; }



    //  Colours for fill ==========================================================

    .fill-hue             { fill : $colorHue; }
    .fill-tint            { fill : $colorTint; }
    .fill-analogue        { fill : $colorAnalogue; }
    .fill-shade           { fill : $colorShade; }
    .fill-accent          { fill : $colorAccent; }


    .fill-white           { fill : $colorWhite; }
    .fill-black           { fill : $colorBlack; }

    .fill-grey            { fill : $colorGrey; }
    .fill-grey-90         { fill : $colorGrey-90; }
    .fill-grey-80         { fill : $colorGrey-80; }
    .fill-grey-70         { fill : $colorGrey-70; }
    .fill-grey-60         { fill : $colorGrey-60; }
    .fill-grey-50         { fill : $colorGrey-50; }
    .fill-grey-40         { fill : $colorGrey-40; }
    .fill-grey-30         { fill : $colorGrey-30; }
    .fill-grey-20         { fill : $colorGrey-20; }
    .fill-grey-10         { fill : $colorGrey-10; }

    .fill-slate           { fill : $colorSlate; }
    .fill-slate-90        { fill : $colorSlate-90; }
    .fill-slate-80        { fill : $colorSlate-80; }
    .fill-slate-70        { fill : $colorSlate-70; }
    .fill-slate-60        { fill : $colorSlate-60; }
    .fill-slate-50        { fill : $colorSlate-50; }
    .fill-slate-40        { fill : $colorSlate-40; }
    .fill-slate-30        { fill : $colorSlate-30; }
    .fill-slate-20        { fill : $colorSlate-20; }
    .fill-slate-10        { fill : $colorSlate-10; }

    .fill-red             { fill : $colorRed; }
    .fill-red-90          { fill : $colorRed-90; }
    .fill-red-80          { fill : $colorRed-80; }
    .fill-red-70          { fill : $colorRed-70; }
    .fill-red-60          { fill : $colorRed-60; }
    .fill-red-50          { fill : $colorRed-50; }
    .fill-red-40          { fill : $colorRed-40; }
    .fill-red-30          { fill : $colorRed-30; }
    .fill-red-20          { fill : $colorRed-20; }
    .fill-red-10          { fill : $colorRed-10; }

    .fill-orange          { fill : $colorOrange; }
    .fill-orange-90       { fill : $colorOrange-90; }
    .fill-orange-80       { fill : $colorOrange-80; }
    .fill-orange-70       { fill : $colorOrange-70; }
    .fill-orange-60       { fill : $colorOrange-60; }
    .fill-orange-50       { fill : $colorOrange-50; }
    .fill-orange-40       { fill : $colorOrange-40; }
    .fill-orange-30       { fill : $colorOrange-30; }
    .fill-orange-20       { fill : $colorOrange-20; }
    .fill-orange-10       { fill : $colorOrange-10; }

    .fill-amber           { fill : $colorAmber; }
    .fill-amber-90        { fill : $colorAmber-90; }
    .fill-amber-80        { fill : $colorAmber-80; }
    .fill-amber-70        { fill : $colorAmber-70; }
    .fill-amber-60        { fill : $colorAmber-60; }
    .fill-amber-50        { fill : $colorAmber-50; }
    .fill-amber-40        { fill : $colorAmber-40; }
    .fill-amber-30        { fill : $colorAmber-30; }
    .fill-amber-20        { fill : $colorAmber-20; }
    .fill-amber-10        { fill : $colorAmber-10; }

    .fill-yellow          { fill : $colorYellow; }
    .fill-yellow-90       { fill : $colorYellow-90; }
    .fill-yellow-80       { fill : $colorYellow-80; }
    .fill-yellow-70       { fill : $colorYellow-70; }
    .fill-yellow-60       { fill : $colorYellow-60; }
    .fill-yellow-50       { fill : $colorYellow-50; }
    .fill-yellow-40       { fill : $colorYellow-40; }
    .fill-yellow-30       { fill : $colorYellow-30; }
    .fill-yellow-20       { fill : $colorYellow-20; }
    .fill-yellow-10       { fill : $colorYellow-10; }

    .fill-pistachio       { fill : $colorPistachio; }
    .fill-pistachio-90    { fill : $colorPistachio-90; }
    .fill-pistachio-80    { fill : $colorPistachio-80; }
    .fill-pistachio-70    { fill : $colorPistachio-70; }
    .fill-pistachio-60    { fill : $colorPistachio-60; }
    .fill-pistachio-50    { fill : $colorPistachio-50; }
    .fill-pistachio-40    { fill : $colorPistachio-40; }
    .fill-pistachio-30    { fill : $colorPistachio-30; }
    .fill-pistachio-20    { fill : $colorPistachio-20; }
    .fill-pistachio-10    { fill : $colorPistachio-10; }

    .fill-green           { fill : $colorGreen; }
    .fill-green-90        { fill : $colorGreen-90; }
    .fill-green-80        { fill : $colorGreen-80; }
    .fill-green-70        { fill : $colorGreen-70; }
    .fill-green-60        { fill : $colorGreen-60; }
    .fill-green-50        { fill : $colorGreen-50; }
    .fill-green-40        { fill : $colorGreen-40; }
    .fill-green-30        { fill : $colorGreen-30; }
    .fill-green-20        { fill : $colorGreen-20; }
    .fill-green-10        { fill : $colorGreen-10; }

    .fill-teal            { fill : $colorTeal; }
    .fill-teal-90         { fill : $colorTeal-90; }
    .fill-teal-80         { fill : $colorTeal-80; }
    .fill-teal-70         { fill : $colorTeal-70; }
    .fill-teal-60         { fill : $colorTeal-60; }
    .fill-teal-50         { fill : $colorTeal-50; }
    .fill-teal-40         { fill : $colorTeal-40; }
    .fill-teal-30         { fill : $colorTeal-30; }
    .fill-teal-20         { fill : $colorTeal-20; }
    .fill-teal-10         { fill : $colorTeal-10; }

    .fill-cyan            { fill : $colorCyan; }
    .fill-cyan-90         { fill : $colorCyan-90; }
    .fill-cyan-80         { fill : $colorCyan-80; }
    .fill-cyan-70         { fill : $colorCyan-70; }
    .fill-cyan-60         { fill : $colorCyan-60; }
    .fill-cyan-50         { fill : $colorCyan-50; }
    .fill-cyan-40         { fill : $colorCyan-40; }
    .fill-cyan-30         { fill : $colorCyan-30; }
    .fill-cyan-20         { fill : $colorCyan-20; }
    .fill-cyan-10         { fill : $colorCyan-10; }

    .fill-sky             { fill : $colorSky; }
    .fill-sky-90          { fill : $colorSky-90; }
    .fill-sky-80          { fill : $colorSky-80; }
    .fill-sky-70          { fill : $colorSky-70; }
    .fill-sky-60          { fill : $colorSky-60; }
    .fill-sky-50          { fill : $colorSky-50; }
    .fill-sky-40          { fill : $colorSky-40; }
    .fill-sky-30          { fill : $colorSky-30; }
    .fill-sky-20          { fill : $colorSky-20; }
    .fill-sky-10          { fill : $colorSky-10; }

    .fill-blue            { fill : $colorBlue; }
    .fill-blue-90         { fill : $colorBlue-90; }
    .fill-blue-80         { fill : $colorBlue-80; }
    .fill-blue-70         { fill : $colorBlue-70; }
    .fill-blue-60         { fill : $colorBlue-60; }
    .fill-blue-50         { fill : $colorBlue-50; }
    .fill-blue-40         { fill : $colorBlue-40; }
    .fill-blue-30         { fill : $colorBlue-30; }
    .fill-blue-20         { fill : $colorBlue-20; }
    .fill-blue-10         { fill : $colorBlue-10; }

    .fill-indigo          { fill : $colorIndigo; }
    .fill-indigo-90       { fill : $colorIndigo-90; }
    .fill-indigo-80       { fill : $colorIndigo-80; }
    .fill-indigo-70       { fill : $colorIndigo-70; }
    .fill-indigo-60       { fill : $colorIndigo-60; }
    .fill-indigo-50       { fill : $colorIndigo-50; }
    .fill-indigo-40       { fill : $colorIndigo-40; }
    .fill-indigo-30       { fill : $colorIndigo-30; }
    .fill-indigo-20       { fill : $colorIndigo-20; }
    .fill-indigo-10       { fill : $colorIndigo-10; }

    .fill-violet          { fill : $colorViolet; }
    .fill-violet-90       { fill : $colorViolet-90; }
    .fill-violet-80       { fill : $colorViolet-80; }
    .fill-violet-70       { fill : $colorViolet-70; }
    .fill-violet-60       { fill : $colorViolet-60; }
    .fill-violet-50       { fill : $colorViolet-50; }
    .fill-violet-40       { fill : $colorViolet-40; }
    .fill-violet-30       { fill : $colorViolet-30; }
    .fill-violet-20       { fill : $colorViolet-20; }
    .fill-violet-10       { fill : $colorViolet-10; }

    .fill-purple          { fill : $colorPurple; }
    .fill-purple-90       { fill : $colorPurple-90; }
    .fill-purple-80       { fill : $colorPurple-80; }
    .fill-purple-70       { fill : $colorPurple-70; }
    .fill-purple-60       { fill : $colorPurple-60; }
    .fill-purple-50       { fill : $colorPurple-50; }
    .fill-purple-40       { fill : $colorPurple-40; }
    .fill-purple-30       { fill : $colorPurple-30; }
    .fill-purple-20       { fill : $colorPurple-20; }
    .fill-purple-10       { fill : $colorPurple-10; }

    .fill-pink            { fill : $colorPink; }
    .fill-pink-90         { fill : $colorPink-90; }
    .fill-pink-80         { fill : $colorPink-80; }
    .fill-pink-70         { fill : $colorPink-70; }
    .fill-pink-60         { fill : $colorPink-60; }
    .fill-pink-50         { fill : $colorPink-50; }
    .fill-pink-40         { fill : $colorPink-40; }
    .fill-pink-30         { fill : $colorPink-30; }
    .fill-pink-20         { fill : $colorPink-20; }
    .fill-pink-10         { fill : $colorPink-10; }

    .fill-salmon          { fill : $colorSalmon; }
    .fill-salmon-90       { fill : $colorSalmon-90; }
    .fill-salmon-80       { fill : $colorSalmon-80; }
    .fill-salmon-70       { fill : $colorSalmon-70; }
    .fill-salmon-60       { fill : $colorSalmon-60; }
    .fill-salmon-50       { fill : $colorSalmon-50; }
    .fill-salmon-40       { fill : $colorSalmon-40; }
    .fill-salmon-30       { fill : $colorSalmon-30; }
    .fill-salmon-20       { fill : $colorSalmon-20; }
    .fill-salmon-10       { fill : $colorSalmon-10; }

    .fill-crimson         { fill : $colorCrimson; }
    .fill-crimson-90      { fill : $colorCrimson-90; }
    .fill-crimson-80      { fill : $colorCrimson-80; }
    .fill-crimson-70      { fill : $colorCrimson-70; }
    .fill-crimson-60      { fill : $colorCrimson-60; }
    .fill-crimson-50      { fill : $colorCrimson-50; }
    .fill-crimson-40      { fill : $colorCrimson-40; }
    .fill-crimson-30      { fill : $colorCrimson-30; }
    .fill-crimson-20      { fill : $colorCrimson-20; }
    .fill-crimson-10      { fill : $colorCrimson-10; }

    .fill-brown           { fill : $colorBrown; }
    .fill-brown-90        { fill : $colorBrown-90; }
    .fill-brown-80        { fill : $colorBrown-80; }
    .fill-brown-70        { fill : $colorBrown-70; }
    .fill-brown-60        { fill : $colorBrown-60; }
    .fill-brown-50        { fill : $colorBrown-50; }
    .fill-brown-40        { fill : $colorBrown-40; }
    .fill-brown-30        { fill : $colorBrown-30; }
    .fill-brown-20        { fill : $colorBrown-20; }
    .fill-brown-10        { fill : $colorBrown-10; }

    .fill-transparent     { fill : transparent; }




    //  Colours for stroke ==========================================================

    .stroke-hue             { stroke : $colorHue; }
    .stroke-tint            { stroke : $colorTint; }
    .stroke-analogue        { stroke : $colorAnalogue; }
    .stroke-shade           { stroke : $colorShade; }
    .stroke-accent          { stroke : $colorAccent; }


    .stroke-white           { stroke : $colorWhite; }
    .stroke-black           { stroke : $colorBlack; }

    .stroke-grey            { stroke : $colorGrey; }
    .stroke-grey-90         { stroke : $colorGrey-90; }
    .stroke-grey-80         { stroke : $colorGrey-80; }
    .stroke-grey-70         { stroke : $colorGrey-70; }
    .stroke-grey-60         { stroke : $colorGrey-60; }
    .stroke-grey-50         { stroke : $colorGrey-50; }
    .stroke-grey-40         { stroke : $colorGrey-40; }
    .stroke-grey-30         { stroke : $colorGrey-30; }
    .stroke-grey-20         { stroke : $colorGrey-20; }
    .stroke-grey-10         { stroke : $colorGrey-10; }

    .stroke-slate           { stroke : $colorSlate; }
    .stroke-slate-90        { stroke : $colorSlate-90; }
    .stroke-slate-80        { stroke : $colorSlate-80; }
    .stroke-slate-70        { stroke : $colorSlate-70; }
    .stroke-slate-60        { stroke : $colorSlate-60; }
    .stroke-slate-50        { stroke : $colorSlate-50; }
    .stroke-slate-40        { stroke : $colorSlate-40; }
    .stroke-slate-30        { stroke : $colorSlate-30; }
    .stroke-slate-20        { stroke : $colorSlate-20; }
    .stroke-slate-10        { stroke : $colorSlate-10; }

    .stroke-red             { stroke : $colorRed; }
    .stroke-red-90          { stroke : $colorRed-90; }
    .stroke-red-80          { stroke : $colorRed-80; }
    .stroke-red-70          { stroke : $colorRed-70; }
    .stroke-red-60          { stroke : $colorRed-60; }
    .stroke-red-50          { stroke : $colorRed-50; }
    .stroke-red-40          { stroke : $colorRed-40; }
    .stroke-red-30          { stroke : $colorRed-30; }
    .stroke-red-20          { stroke : $colorRed-20; }
    .stroke-red-10          { stroke : $colorRed-10; }

    .stroke-orange          { stroke : $colorOrange; }
    .stroke-orange-90       { stroke : $colorOrange-90; }
    .stroke-orange-80       { stroke : $colorOrange-80; }
    .stroke-orange-70       { stroke : $colorOrange-70; }
    .stroke-orange-60       { stroke : $colorOrange-60; }
    .stroke-orange-50       { stroke : $colorOrange-50; }
    .stroke-orange-40       { stroke : $colorOrange-40; }
    .stroke-orange-30       { stroke : $colorOrange-30; }
    .stroke-orange-20       { stroke : $colorOrange-20; }
    .stroke-orange-10       { stroke : $colorOrange-10; }

    .stroke-amber           { stroke : $colorAmber; }
    .stroke-amber-90        { stroke : $colorAmber-90; }
    .stroke-amber-80        { stroke : $colorAmber-80; }
    .stroke-amber-70        { stroke : $colorAmber-70; }
    .stroke-amber-60        { stroke : $colorAmber-60; }
    .stroke-amber-50        { stroke : $colorAmber-50; }
    .stroke-amber-40        { stroke : $colorAmber-40; }
    .stroke-amber-30        { stroke : $colorAmber-30; }
    .stroke-amber-20        { stroke : $colorAmber-20; }
    .stroke-amber-10        { stroke : $colorAmber-10; }

    .stroke-yellow          { stroke : $colorYellow; }
    .stroke-yellow-90       { stroke : $colorYellow-90; }
    .stroke-yellow-80       { stroke : $colorYellow-80; }
    .stroke-yellow-70       { stroke : $colorYellow-70; }
    .stroke-yellow-60       { stroke : $colorYellow-60; }
    .stroke-yellow-50       { stroke : $colorYellow-50; }
    .stroke-yellow-40       { stroke : $colorYellow-40; }
    .stroke-yellow-30       { stroke : $colorYellow-30; }
    .stroke-yellow-20       { stroke : $colorYellow-20; }
    .stroke-yellow-10       { stroke : $colorYellow-10; }

    .stroke-pistachio       { stroke : $colorPistachio; }
    .stroke-pistachio-90    { stroke : $colorPistachio-90; }
    .stroke-pistachio-80    { stroke : $colorPistachio-80; }
    .stroke-pistachio-70    { stroke : $colorPistachio-70; }
    .stroke-pistachio-60    { stroke : $colorPistachio-60; }
    .stroke-pistachio-50    { stroke : $colorPistachio-50; }
    .stroke-pistachio-40    { stroke : $colorPistachio-40; }
    .stroke-pistachio-30    { stroke : $colorPistachio-30; }
    .stroke-pistachio-20    { stroke : $colorPistachio-20; }
    .stroke-pistachio-10    { stroke : $colorPistachio-10; }

    .stroke-green           { stroke : $colorGreen; }
    .stroke-green-90        { stroke : $colorGreen-90; }
    .stroke-green-80        { stroke : $colorGreen-80; }
    .stroke-green-70        { stroke : $colorGreen-70; }
    .stroke-green-60        { stroke : $colorGreen-60; }
    .stroke-green-50        { stroke : $colorGreen-50; }
    .stroke-green-40        { stroke : $colorGreen-40; }
    .stroke-green-30        { stroke : $colorGreen-30; }
    .stroke-green-20        { stroke : $colorGreen-20; }
    .stroke-green-10        { stroke : $colorGreen-10; }

    .stroke-teal            { stroke : $colorTeal; }
    .stroke-teal-90         { stroke : $colorTeal-90; }
    .stroke-teal-80         { stroke : $colorTeal-80; }
    .stroke-teal-70         { stroke : $colorTeal-70; }
    .stroke-teal-60         { stroke : $colorTeal-60; }
    .stroke-teal-50         { stroke : $colorTeal-50; }
    .stroke-teal-40         { stroke : $colorTeal-40; }
    .stroke-teal-30         { stroke : $colorTeal-30; }
    .stroke-teal-20         { stroke : $colorTeal-20; }
    .stroke-teal-10         { stroke : $colorTeal-10; }

    .stroke-cyan            { stroke : $colorCyan; }
    .stroke-cyan-90         { stroke : $colorCyan-90; }
    .stroke-cyan-80         { stroke : $colorCyan-80; }
    .stroke-cyan-70         { stroke : $colorCyan-70; }
    .stroke-cyan-60         { stroke : $colorCyan-60; }
    .stroke-cyan-50         { stroke : $colorCyan-50; }
    .stroke-cyan-40         { stroke : $colorCyan-40; }
    .stroke-cyan-30         { stroke : $colorCyan-30; }
    .stroke-cyan-20         { stroke : $colorCyan-20; }
    .stroke-cyan-10         { stroke : $colorCyan-10; }

    .stroke-sky             { stroke : $colorSky; }
    .stroke-sky-90          { stroke : $colorSky-90; }
    .stroke-sky-80          { stroke : $colorSky-80; }
    .stroke-sky-70          { stroke : $colorSky-70; }
    .stroke-sky-60          { stroke : $colorSky-60; }
    .stroke-sky-50          { stroke : $colorSky-50; }
    .stroke-sky-40          { stroke : $colorSky-40; }
    .stroke-sky-30          { stroke : $colorSky-30; }
    .stroke-sky-20          { stroke : $colorSky-20; }
    .stroke-sky-10          { stroke : $colorSky-10; }

    .stroke-blue            { stroke : $colorBlue; }
    .stroke-blue-90         { stroke : $colorBlue-90; }
    .stroke-blue-80         { stroke : $colorBlue-80; }
    .stroke-blue-70         { stroke : $colorBlue-70; }
    .stroke-blue-60         { stroke : $colorBlue-60; }
    .stroke-blue-50         { stroke : $colorBlue-50; }
    .stroke-blue-40         { stroke : $colorBlue-40; }
    .stroke-blue-30         { stroke : $colorBlue-30; }
    .stroke-blue-20         { stroke : $colorBlue-20; }
    .stroke-blue-10         { stroke : $colorBlue-10; }

    .stroke-indigo          { stroke : $colorIndigo; }
    .stroke-indigo-90       { stroke : $colorIndigo-90; }
    .stroke-indigo-80       { stroke : $colorIndigo-80; }
    .stroke-indigo-70       { stroke : $colorIndigo-70; }
    .stroke-indigo-60       { stroke : $colorIndigo-60; }
    .stroke-indigo-50       { stroke : $colorIndigo-50; }
    .stroke-indigo-40       { stroke : $colorIndigo-40; }
    .stroke-indigo-30       { stroke : $colorIndigo-30; }
    .stroke-indigo-20       { stroke : $colorIndigo-20; }
    .stroke-indigo-10       { stroke : $colorIndigo-10; }

    .stroke-violet          { stroke : $colorViolet; }
    .stroke-violet-90       { stroke : $colorViolet-90; }
    .stroke-violet-80       { stroke : $colorViolet-80; }
    .stroke-violet-70       { stroke : $colorViolet-70; }
    .stroke-violet-60       { stroke : $colorViolet-60; }
    .stroke-violet-50       { stroke : $colorViolet-50; }
    .stroke-violet-40       { stroke : $colorViolet-40; }
    .stroke-violet-30       { stroke : $colorViolet-30; }
    .stroke-violet-20       { stroke : $colorViolet-20; }
    .stroke-violet-10       { stroke : $colorViolet-10; }

    .stroke-purple          { stroke : $colorPurple; }
    .stroke-purple-90       { stroke : $colorPurple-90; }
    .stroke-purple-80       { stroke : $colorPurple-80; }
    .stroke-purple-70       { stroke : $colorPurple-70; }
    .stroke-purple-60       { stroke : $colorPurple-60; }
    .stroke-purple-50       { stroke : $colorPurple-50; }
    .stroke-purple-40       { stroke : $colorPurple-40; }
    .stroke-purple-30       { stroke : $colorPurple-30; }
    .stroke-purple-20       { stroke : $colorPurple-20; }
    .stroke-purple-10       { stroke : $colorPurple-10; }

    .stroke-pink            { stroke : $colorPink; }
    .stroke-pink-90         { stroke : $colorPink-90; }
    .stroke-pink-80         { stroke : $colorPink-80; }
    .stroke-pink-70         { stroke : $colorPink-70; }
    .stroke-pink-60         { stroke : $colorPink-60; }
    .stroke-pink-50         { stroke : $colorPink-50; }
    .stroke-pink-40         { stroke : $colorPink-40; }
    .stroke-pink-30         { stroke : $colorPink-30; }
    .stroke-pink-20         { stroke : $colorPink-20; }
    .stroke-pink-10         { stroke : $colorPink-10; }

    .stroke-salmon          { stroke : $colorSalmon; }
    .stroke-salmon-90       { stroke : $colorSalmon-90; }
    .stroke-salmon-80       { stroke : $colorSalmon-80; }
    .stroke-salmon-70       { stroke : $colorSalmon-70; }
    .stroke-salmon-60       { stroke : $colorSalmon-60; }
    .stroke-salmon-50       { stroke : $colorSalmon-50; }
    .stroke-salmon-40       { stroke : $colorSalmon-40; }
    .stroke-salmon-30       { stroke : $colorSalmon-30; }
    .stroke-salmon-20       { stroke : $colorSalmon-20; }
    .stroke-salmon-10       { stroke : $colorSalmon-10; }

    .stroke-crimson         { stroke : $colorCrimson; }
    .stroke-crimson-90      { stroke : $colorCrimson-90; }
    .stroke-crimson-80      { stroke : $colorCrimson-80; }
    .stroke-crimson-70      { stroke : $colorCrimson-70; }
    .stroke-crimson-60      { stroke : $colorCrimson-60; }
    .stroke-crimson-50      { stroke : $colorCrimson-50; }
    .stroke-crimson-40      { stroke : $colorCrimson-40; }
    .stroke-crimson-30      { stroke : $colorCrimson-30; }
    .stroke-crimson-20      { stroke : $colorCrimson-20; }
    .stroke-crimson-10      { stroke : $colorCrimson-10; }

    .stroke-brown           { stroke : $colorBrown; }
    .stroke-brown-90        { stroke : $colorBrown-90; }
    .stroke-brown-80        { stroke : $colorBrown-80; }
    .stroke-brown-70        { stroke : $colorBrown-70; }
    .stroke-brown-60        { stroke : $colorBrown-60; }
    .stroke-brown-50        { stroke : $colorBrown-50; }
    .stroke-brown-40        { stroke : $colorBrown-40; }
    .stroke-brown-30        { stroke : $colorBrown-30; }
    .stroke-brown-20        { stroke : $colorBrown-20; }
    .stroke-brown-10        { stroke : $colorBrown-10; }

    .stroke-transparent     { stroke : transparent; }


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
`
