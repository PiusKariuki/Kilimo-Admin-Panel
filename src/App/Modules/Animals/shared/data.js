import React, {useState} from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import useFetch from "../hooks/useFetch";
const useStyles = makeStyles({
  box: {
    backgroundColor: "white",
    margintop: "0",
    padding: "0.5rem",
  },
  container: {
    margin: "0",
  },
  btns: {
    margin: "0.5rem",
  },
});

export const dataWithActions = (animals, department, getDetails) => {
  const classes = useStyles();

  return animals.map((obj) =>
    Object.assign(obj, {
      btns: (
        <>
          <Button
            value={obj._id}
            size="small"
            name={obj.name}
            color="primary"
            variant="contained"
            className={classes.btns}
            onClick={(e) => {
              getDetails(department, e.currentTarget.value);
            }}
          >
            view
          </Button>
          <Button
            type="button"
            value={obj._id}
            id={obj.name}
            size="small"
            color="secondary"
            variant="contained"
            className={classes.btns}
            onClick={(e) => {
              setTarget(e.currentTarget);
              setOpenDelete(true);
            }}
          >
            delete
          </Button>
        </>
      ),
    })
  );
};
