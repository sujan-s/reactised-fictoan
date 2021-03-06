import React from "react";

import { Element } from "../../Element/Element";

import { FormItemJointGroupStyled } from "./FormItemJointGroup.styled"
import { FormItemJointGroupProps, FormItemJointGroupElementType } from "../constants"

export const FormItemJointGroup = ({...props}: FormItemJointGroupProps) => {
    return (
        <Element<FormItemJointGroupElementType>
            as={FormItemJointGroupStyled}
            {...props}
        />
    );
}