import { CommonAndHTMLProps } from "../../Element/constants";
export declare type InputLabelElementType = HTMLLabelElement;
export interface InputLabelCustomProps {
    label?: string;
    helpText?: string;
    errorText?: string;
    htmlFor?: string;
}
export declare type InputLabelProps = CommonAndHTMLProps<InputLabelElementType> & InputLabelCustomProps;
