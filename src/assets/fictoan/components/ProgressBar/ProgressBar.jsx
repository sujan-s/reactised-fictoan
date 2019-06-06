import React from "react";

/***
 * wrapperClassName: String, custom className for progress;
 * fillerClassName: String, custom className for filler;
 * percent: Number | String, specify percent of progress;
 */

function ProgressBar(props) {
	return (
		<div className={props.wrapperClassName || "progress-bar"}>
			<div
				className={props.fillerClassName || "filler"}
				style={{ width: `${props.percent}%` }}
			/>
		</div>
	);
}
export default ProgressBar;
