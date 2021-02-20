import { Grid, makeStyles, TextField } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useForm } from "../../components/useForm";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "80%",
      margin: theme.spacing(1),
    },
  },
}));

const initialFValues = {
  id: 0,
  fullName: "",
  email: "",
  city: "",
  gender: "male",
  departmentId: "",
  hireDate: new Date(),
  isPermanent: false,
};

const EmployeeForm = () => {
  const classes = useStyles();

  const { values, setValues, handleInputChange } = useForm(initialFValues);
  console.log(values);

  return (
    <form className={classes.root}>
      <Grid container>
        <Grid item xs={6}>
          <TextField
            variant="outlined"
            label="Full Name"
            name="fullName"
            value={values.fullName}
            onChange={handleInputChange}
          />
          <TextField
            variant="outlined"
            label="Email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6} style={{ backgroundColor: "#253053" }}></Grid>
      </Grid>
    </form>
  );
};

export default EmployeeForm;

//style={{ backgroundColor: "#f54" }}
