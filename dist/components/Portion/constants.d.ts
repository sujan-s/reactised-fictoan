import { CommonAndHTMLProps } from "../Element/constants";
export declare type PortionElementType = HTMLDivElement;
export interface PortionCustomProps {
    desktopSpan?: string;
    tabPTSpan?: string;
    tabLSSpan?: string;
    mobileSpan?: string;
}
export declare type PortionProps = CommonAndHTMLProps<PortionElementType> & PortionCustomProps;
