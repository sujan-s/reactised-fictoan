import { CommonAndHTMLProps } from "../Element/constants";
export declare type SidebarWrapperElementType = HTMLDivElement;
export declare type SidebarHeaderElementType = HTMLDivElement;
export declare type SidebarItemElementType = HTMLDivElement;
export declare type SidebarItemIconElementType = HTMLDivElement;
export declare type SidebarItemTextElementType = HTMLParagraphElement;
export declare type SidebarSublinkGroupElementType = HTMLDivElement;
export interface SidebarWrapperCustomProps {
    collapsed?: boolean;
}
export interface SidebarItemTextCustomProps {
    linkText: string;
}
export declare type SidebarWrapperProps = CommonAndHTMLProps<SidebarWrapperElementType> & SidebarWrapperCustomProps;
export declare type SidebarHeaderProps = CommonAndHTMLProps<SidebarHeaderElementType>;
export declare type SidebarItemProps = CommonAndHTMLProps<SidebarItemElementType>;
export declare type SidebarItemTextProps = CommonAndHTMLProps<SidebarItemTextElementType> & SidebarItemTextCustomProps;
export declare type SidebarItemIconProps = CommonAndHTMLProps<SidebarItemIconElementType>;
export declare type SidebarSublinkGroupProps = CommonAndHTMLProps<SidebarSublinkGroupElementType>;
