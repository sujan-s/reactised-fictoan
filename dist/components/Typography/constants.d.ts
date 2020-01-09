import { CommonAndHTMLProps } from "../Element/constants";
export declare type HeadingElementType = HTMLHeadingElement;
export declare type TextElementType = HTMLParagraphElement;
declare type Weight = "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
export interface HeadingCustomProps extends CommonAndHTMLProps<HTMLHeadingElement> {
    as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    weight?: Weight;
}
export interface TextCustomProps extends CommonAndHTMLProps<HTMLParagraphElement> {
    weight?: Weight;
    size?: "tiny" | "small" | "medium" | "large" | "huge";
}
export declare type HeadingProps = CommonAndHTMLProps<HeadingElementType> & HeadingCustomProps;
export declare type TextProps = CommonAndHTMLProps<TextElementType> & TextCustomProps;
export {};
