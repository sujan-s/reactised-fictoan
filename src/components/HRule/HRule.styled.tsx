import styled from "styled-components";

export const HRStyled = styled.hr`
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
`