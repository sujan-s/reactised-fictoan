import { CommonAndHTMLProps } from "../../Element/constants";
export declare type SelectElementType = HTMLSelectElement;
export declare type OptionElementType = HTMLOptionElement;
interface SelectCustomProps {
    options: CommonAndHTMLProps<OptionElementType>[];
    fullWidth?: boolean;
}
export declare type SelectProps = CommonAndHTMLProps<SelectElementType> & SelectCustomProps;
export declare type OptionProps = CommonAndHTMLProps<SelectElementType>;
export {};
