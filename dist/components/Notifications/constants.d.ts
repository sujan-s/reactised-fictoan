import { CommonAndHTMLProps } from "../Element/constants";
export declare type NotificationWrapperElementType = HTMLDivElement;
export declare type NotificationItemElementType = HTMLDivElement;
export interface NotificationWrapperCustomProps {
    position?: "left" | "right";
    anchor?: "top" | "bottom";
}
export interface NotificationItemCustomProps {
    type?: "info" | "warning" | "error" | "success";
    isDismissible?: boolean;
}
export declare type NotificationWrapperProps = CommonAndHTMLProps<NotificationWrapperElementType> & NotificationWrapperCustomProps;
export declare type NotificationItemProps = CommonAndHTMLProps<NotificationItemElementType> & NotificationItemCustomProps;
