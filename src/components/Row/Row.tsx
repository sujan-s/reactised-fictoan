import React, { HTMLProps } from "react";

import { createClassName } from "../../utils/classNames";

import { BaseComponent } from "../BaseComponent/BaseComponent";
import { BaseAndHTMLProps } from "../BaseComponent/typings";

interface RowProps extends BaseAndHTMLProps<HTMLDivElement> {
    sidePadding?: "tiny" | "small" | "medium" | "large" | "huge";
    gutters?: "none" | "tiny" | "small" | "medium" | "large" | "huge";
}

const Row = ({sidePadding, className, gutters, ...props}: RowProps) => {
    const classNames = [
        className
    ]

    if (sidePadding) {
        classNames.push(`side-padding-${sidePadding}`)
    }

    if (["tiny", "small", "large", "huge"].includes(gutters)) {
        classNames.push(`${gutters}-gutters`)
    }
    else if (gutters == "none") {
        classNames.push("no-gutters")
    } else {
        classNames.push("medium-gutters")
    }

    return (
        <BaseComponent<HTMLDivElement>
            Element="div"
            baseClassName="row"
            className={createClassName(classNames)}
            {...props}
        />
    )
};

export default Row;
