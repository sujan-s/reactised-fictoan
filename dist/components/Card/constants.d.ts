import { CommonAndHTMLProps } from "../Element/constants";
export declare type CardElementType = HTMLDivElement;
export interface CardCustomProps {
    shape?: "rounded" | "curved";
    shadow?: "mild" | "soft" | "hard";
}
export declare type CardProps = CommonAndHTMLProps<CardElementType> & CardCustomProps;
