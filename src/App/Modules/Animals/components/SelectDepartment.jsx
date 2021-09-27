import React from "react";
import {
  Grid,
  Button,
  Box,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import useAdd from "../hooks/useAdd";

const useStyles = makeStyles({
  formControl: {
    width: "9rem",
  },
  formLabel: {
    color: "red",
    fontWeight: "bold",
  },
  item: {
    margintop: "0",
    padding: "0.5rem",
    marginLeft: "0",
  },
  container: {
    backgroundColor: "white",
    margin: "0",
    justifyContent: "space-around",
  },
  refresh: {
    justifySelf: "end",
    color: "white",
    backgroundColor: "green",
    // marginTop: "0.5rem",
    "&:hover": {
      color: "white",
      backgroundColor: "red",
    },
  },
});

const SelectDepartment = ({
  getAnimals,
  department,
  setDepartment,
  setOpen,
  
}) => {
  React.useEffect(() => {
    getAnimals(department);
  }, [setDepartment]);
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      {/* ...............................dept select................................ */}
      <Grid item className={classes.item}>
        <FormControl className={classes.formControl}>
          <InputLabel
            id="department"
            className={classes.formLabel}
            value={department}
          >
            Department
          </InputLabel>
          <Select
            labelId="department"
            id="department"
            value={department}
            onChange={(e) => {
              getAnimals(e.target.value);
              setDepartment(e.target.value);
            }}
          >
            <MenuItem value="pigs">Pigs</MenuItem>
            <MenuItem value="dairies">Dairies</MenuItem>
            <MenuItem value="beefs">Beef</MenuItem>
            <MenuItem value="layers">Layers</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      {/* ......................................add btn.............................. */}
      <Grid item  className={classes.item}>
        {department !==""?
        <Button
          onClick={() => setOpen(true)}
          variant="contained"
          className={classes.refresh}
        >
          Add
        </Button>: null}
      </Grid>
      {/* ......................................refresh btn.............................. */}
      <Grid item  className={classes.item}>
        <Button
          onClick={() => getAnimals(department)}
          variant="contained"
          className={classes.refresh}
        >
          Refresh
        </Button>
      </Grid>
    </Grid>
  );
};

export default SelectDepartment;
