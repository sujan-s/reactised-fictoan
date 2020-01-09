import { CommonAndHTMLProps } from "src/components/Element/constants";
import { InputLabelProps } from "../InputLabel/constants";
import { InputCommonProps, InputIconProps } from "../BaseInputComponent/constants";
export declare type InputFieldElementType = HTMLInputElement;
export declare type InputFieldProps = CommonAndHTMLProps<InputFieldElementType> & InputLabelProps & InputCommonProps & InputIconProps;
