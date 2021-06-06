import { TextField } from "@material-ui/core";
import React from "react";
import { FieldRenderProps } from "react-final-form";

type Props = FieldRenderProps<number, any>;

const SoupInput: React.FC<Props> = ({ input, meta, ...rest }: Props) => (
  <div>
    <TextField
      {...input}
      {...rest}
      type="number"
      inputProps={{ min: "0", step: "1", max: "10" }}
    />
    <p>
      {input.value > 1 && <span>&#127798;</span>}
      {input.value > 4 && <span>&#127798;</span>}
      {input.value > 6 && <span>&#127798;</span>}
      {input.value > 9 && <span>&#127798;</span>}
    </p>
  </div>
);

export default SoupInput;
