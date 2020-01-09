import { CommonAndHTMLProps } from "../Element/constants";
export declare type InfoPanelElementType = HTMLDivElement;
export interface InfoPanelCustomProps {
    open?: boolean;
    width?: "tiny" | "small" | "medium" | "large" | "huge";
}
export declare type InfoPanelProps = CommonAndHTMLProps<InfoPanelElementType> & InfoPanelCustomProps;
