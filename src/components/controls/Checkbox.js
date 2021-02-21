import { FormControl, FormControlLabel, Checkbox as MuiCheckbox } from "@material-ui/core";
import React from "react";

const Checkbox = (props) => {
  const { name, value, label, onChange } = props;

  const convertTodefEventPara = (name, value) => ({
    target: {
      name,
      value,
    },
  });

  return (
    <FormControl>
      <FormControlLabel
        control={
          <MuiCheckbox
            name={name}
            color="primary"
            checked={value}
            onChange={(e) => onChange(convertTodefEventPara(name, e.target.checked))}
          />
        }
        label={label}
      />
    </FormControl>
  );
};

export default Checkbox;
