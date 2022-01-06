import React, { useState } from "react";
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

export const dataWithActions = (load,allWorkers, handleView, handleDelete) => {
  const classes = useStyles();

  return allWorkers.map((obj) =>
    Object.assign(obj, {
      btns: (
        <>
          <Button
          disabled={load}
            value={obj._id}
            size="small"
            name={obj.name}
            color="primary"
            variant="contained"
            className={classes.btns}
            onClick={(e) => {
              handleView(e.currentTarget.value);
            }}
          >
            Edit
          </Button>
          <Button
          disabled={load}
            type="button"
            value={obj._id}
            id={obj.name}
            size="small"
            color="secondary"
            variant="contained"
            className={classes.btns}
            onClick={(e) => {
              handleDelete(e.currentTarget.value);
            }}
          >
            delete
          </Button>
        </>
      ),
    })
  );
};
