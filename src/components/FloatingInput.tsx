import { TextField } from "@material-ui/core";
import React from "react";
import { FieldRenderProps } from "react-final-form";

type Props = FieldRenderProps<number, any>;

const FloatingInput: React.FC<Props> = ({ input, meta, ...rest }: Props) => (
  <TextField
    style={{ width: "30%" }}
    {...input}
    {...rest}
    type="number"
    inputProps={{ min: "0", step: "0.1" }}
  />
);

export default FloatingInput;
