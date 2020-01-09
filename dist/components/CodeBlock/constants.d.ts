import { Language } from "prism-react-renderer";
import { CommonAndHTMLProps } from "../Element/constants";
export declare type CodeBlockElementType = HTMLPreElement;
export interface CodeBlockCustomProps {
    source: object | string;
    language?: Language;
}
export declare type CodeBlockProps = CommonAndHTMLProps<CodeBlockElementType> & CodeBlockCustomProps;
