import React from "react";
import {
  Grid,
  Button,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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
  btn: {
    justifySelf: "end",
    color: "white",
    backgroundColor: "green",
    "&:hover": {
      color: "white",
      backgroundColor: "red",
    },
  },
});

const TopBtns = ({
  department,
  setDepartment,
  getInstructionsByDepartment,
  setOpenAdd,
}) => {



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
              setDepartment(e.target.value);
              getInstructionsByDepartment(e.target.value);
            }}
          >
            <MenuItem value="pigs">Pigs</MenuItem>
            <MenuItem value="dairies">Dairies</MenuItem>
            <MenuItem value="beefs">Beef</MenuItem>
            <MenuItem value="layers">Layers</MenuItem>
            <MenuItem value="all">Notifications</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      {/* ......................................add btn.............................. */}
      <Grid item className={classes.item}>
        {department !== "" ? (
          <Button
            onClick={() => setOpenAdd(true)}
            variant="contained"
            className={classes.btn}
          >
            Add
          </Button>
        ) : null}
      </Grid>
      {/* ......................................refresh btn.............................. */}
      <Grid item className={classes.item}>
        <Button
          onClick={() => getInstructionsByDepartment(department)}
          variant="contained"
          className={classes.btn}
        >
          Refresh
        </Button>
      </Grid>
    </Grid>
  );
};

export default TopBtns;
