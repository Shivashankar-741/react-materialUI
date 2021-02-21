import { FormControl, FormControlLabel, Checkbox as MuiCheckbox } from "@material-ui/core";
import React from "react";

const Checkbox = (props) => {
  const { name, value, label, onChange } = props;
  return (
    <FormControl>
      <FormControlLabel
        control={<MuiCheckbox name={name} color="primary" checked={value} onChange={onChange} />}
        label={label}
      />
    </FormControl>
  );
};

export default Checkbox;
