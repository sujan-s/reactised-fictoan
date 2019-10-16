import { BaseAndHTMLProps } from "../BaseComponent/typings";
interface PortionProps extends BaseAndHTMLProps<HTMLDivElement> {
    desktopWidth: string;
    tabletPTWidth: string;
    tabletLSWidth: string;
    mobileWidth: string;
}
declare const Portion: ({ desktopWidth, mobileWidth, tabletLSWidth, tabletPTWidth, className, ...props }: PortionProps) => JSX.Element;
export default Portion;
