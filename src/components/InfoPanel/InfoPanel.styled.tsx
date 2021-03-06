import styled from "styled-components";

import { InfoPanelProps } from "./constants";

export const InfoPanelStyled = styled.div`
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
    background-color : ${(props : InfoPanelProps) => props.theme.infoPanel.bg};
    box-shadow       : 4px 0 24px -16px rgba(0, 0, 0, 0.24);
    z-index          : 10000;
    border-left      : 1px solid ${(props : InfoPanelProps) => props.theme.infoPanel.border};

    &.open { right : 0; }

    &.tiny   { width : 6vw; }
    &.small  { width : 12vw; }
    &.medium { width : 24vw; }
    &.large  { width : 32vw; }
    &.huge   { width : 40vw; }


    & .dismiss-button {
        position         : fixed;
        display          : block;
        width            : 32px;
        height           : 32px;
        background-color : ${(props : InfoPanelProps) => props.theme.infoPanel.dismissButton.bg};
        top              : 24px;
        right            : 24px;
        z-index          : 6000;
        font-size        : 32px;
        color            : ${(props : InfoPanelProps) => props.theme.infoPanel.dismissButton.color};
        text-align       : center;
        line-height      : 1;
        cursor           : pointer;

        &::after {
            display : block;
            content : "${(props : InfoPanelProps) => props.theme.infoPanel.dismissButton.content}";
        }
    }
`
