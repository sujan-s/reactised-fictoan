import { CommonAndHTMLProps } from "../Element/constants";
export declare type FormWrapperElementType = HTMLFormElement;
export declare type FormItemElementType = HTMLDivElement;
export declare type FormItemGroupElementType = HTMLDivElement;
export declare type FormItemJointGroupElementType = HTMLDivElement;
interface FormItemCustomProps {
    isAnswers?: boolean;
}
export declare type FormWrapperProps = CommonAndHTMLProps<FormWrapperProps>;
export declare type FormItemProps = CommonAndHTMLProps<FormItemProps> & FormItemCustomProps;
export declare type FormItemGroupProps = CommonAndHTMLProps<FormItemGroupProps>;
export declare type FormItemJointGroupProps = CommonAndHTMLProps<FormItemJointGroupProps>;
export {};
