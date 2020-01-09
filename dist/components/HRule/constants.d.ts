import { CommonAndHTMLProps } from "../Element/constants";
export declare type HRElementType = "HTMLHRElement";
export interface HRCustomProps {
    sideMargin?: "tiny" | "small" | "medium" | "large" | "huge";
    slim?: boolean;
    thick?: boolean;
}
export declare type HRProps = CommonAndHTMLProps<HRElementType> & HRCustomProps;
