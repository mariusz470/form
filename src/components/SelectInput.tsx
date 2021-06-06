import { Select, MenuItem } from "@material-ui/core";
import React from "react";
import { FieldRenderProps } from "react-final-form";

type Props = FieldRenderProps<string, any>;

const SelectInput: React.FC<Props> = ({ input, meta, ...rest }: Props) => (
  <Select {...input} {...rest} value={input.value}>
    <MenuItem value="pizza"> Pizza</MenuItem>
    <MenuItem value="soup"> Soup</MenuItem>
    <MenuItem value="sandwich"> Sandwich</MenuItem>
  </Select>
);

export default SelectInput;
