import { Language } from "prism-react-renderer";
import { BaseAndHTMLProps } from "../BaseComponent/typings";
export declare type CodeBlockElementType = HTMLPreElement;
export interface CodeBlockCustomProps {
    source: object | string;
    language?: Language;
}
export declare type CodeBlockProps = BaseAndHTMLProps<CodeBlockElementType> & CodeBlockCustomProps;
