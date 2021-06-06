import { TextField } from "@material-ui/core";
import React from "react";
import { FieldRenderProps } from "react-final-form";

type Props = FieldRenderProps<string, any>;

const TextInput: React.FC<Props> = ({ input, meta, ...rest }: Props) => (
  <TextField style={{ width: "30%" }} type="text" {...input} {...rest} />
);

export default TextInput;
