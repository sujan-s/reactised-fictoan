import React from "react";
import { BaseComponent } from "../BaseComponent";

interface ProgressBarProps {
    wrapperClassName?: string;
    fillerClassName?: string;
    percent: number;
}

function ProgressBar(props: ProgressBarProps) {
    return (
        <BaseComponent
            Element="div"
            baseClassName="progress-bar"
            className={props.wrapperClassName || ""}
        >
            <div
                className={
                    props.fillerClassName
                        ? `filler ${props.fillerClassName}`
                        : "filler"
                }
                style={{ width: `${props.percent || 0}%` }}
            />
        </BaseComponent>
    );
}

export default ProgressBar;
