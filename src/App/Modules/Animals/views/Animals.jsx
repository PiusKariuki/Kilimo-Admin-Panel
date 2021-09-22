import React, { useState } from "react";
import {
  Grid,
  Button,
  Box,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
} from "@material-ui/core";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBDataTableV5 } from "mdbreact";
import { makeStyles } from "@material-ui/core/styles";
import useSpinner from "App/Common/Spinner/Spinner";
import useFetch from "../hooks/useFetch";
import ViewDialog from "../components/ViewDialog";

const useStyles = makeStyles({
  formControl: {
    width: "9rem",
  },
  formLabel: {
    color: "red",
    fontWeight: "bold",
  },
  buttons: {
    justifyContent: "space-between",
  },
  box: {
    backgroundColor: "white",
    margintop: "0",
    padding: "0.5rem",
  },
  container: {
    margin: "0",
    justifyContent: "space-around",
  },
  btns: {
    margin: "0.5rem",
  },
  refresh: {
    justifySelf: "end",
    color: "white",
    backgroundColor: "green",
    "&:hover": {
      color: "white",
      backgroundColor: "red",
    },
  },
});

const Animals = () => {
  const classes = useStyles();

  const [
    getAnimals,
    load,
    data,
    department,
    setDepartment,
    animal,
    openEdit,
    setOpenEdit,
  ] = useFetch();
  const [renderSpinner] = useSpinner();
  React.useEffect(() => {
    getAnimals();
  }, [setDepartment]);

  return (
    <Grid container>
      <ViewDialog
        open={openEdit}
        setOpen={setOpenEdit}
        animal={animal}
        department={department}
      />

      <Grid item xs={12}>
        <Box className={classes.box}>
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

          {renderSpinner(load)}
          <MDBDataTableV5
            hover
            responsive
            striped
            bordered
            hover
            data={data}
            entries={7}
            btn
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Animals;
