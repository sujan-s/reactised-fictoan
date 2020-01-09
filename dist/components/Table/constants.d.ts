import { CommonAndHTMLProps } from "../Element/constants";
export declare type TableElementType = HTMLTableElement;
export interface TableCustomProps {
    bordersFor?: "rows" | "columns" | "both";
    isStriped?: boolean;
    isHoverable?: boolean;
    isFullWidth?: boolean;
}
export declare type TableProps = CommonAndHTMLProps<TableElementType> & TableCustomProps;
