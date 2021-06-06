import React from "react";
import TextField from "@material-ui/core/TextField";
import { FieldRenderProps } from "react-final-form";

type Props = FieldRenderProps<Date, any>;

const TimeInput: React.FC<Props> = ({ input, meta, ...rest }: Props) => {
  return (
    <TextField
      style={{ width: "30%" }}
      {...input}
      {...rest}
      id="time"
      label="Preparation time"
      type="time"
      InputLabelProps={{
        shrink: true,
      }}
      inputProps={{
        step: 5, // 5 min
      }}
    />
  );
};

export default TimeInput;
