import { TextField } from "@material-ui/core";
import React from "react";
import { FieldRenderProps } from "react-final-form";

type Props = FieldRenderProps<number, any>;

const NumberInput: React.FC<Props> = ({ input, meta, ...rest }: Props) => (
  <TextField
    {...input}
    {...rest}
    type="number"
    inputProps={{ min: "0", step: "1" }}
  />
);

export default NumberInput;
