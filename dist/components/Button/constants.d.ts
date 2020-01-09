import { CommonAndHTMLProps } from "../Element/constants";
export declare type ButtonElementType = HTMLButtonElement;
export interface ButtonCustomProps {
    value: string;
    size?: "tiny" | "small" | "medium" | "large" | "huge";
    shape?: "rounded" | "curved";
    shadow?: "mild" | "soft" | "hard";
    border?: string;
    isLoading?: boolean;
    hasDelete?: boolean;
}
export declare type ButtonProps = CommonAndHTMLProps<ButtonElementType> & ButtonCustomProps;
