import React, { HTMLProps } from "react";

import { BaseComponent } from "../BaseComponent";

const Table = (props: HTMLProps<HTMLTableElement>) => (
    <BaseComponent<HTMLProps<HTMLTableElement>, HTMLTableElement>
        Element="table"
        baseClassName="ff-table"
        {...props}
    />
);

export default Table;
