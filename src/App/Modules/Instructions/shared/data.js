import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
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

export const dataWithActions = (instructions, handleEdit, getInstructionsById) => {
  const classes = useStyles();

  return instructions.map((obj) =>
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
              handleEdit(e.currentTarget.value);
            }}
          >
            Edit
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
             getInstructionsById(e.currentTarget.value);
            }}
          >
            delete
          </Button>
        </>
      ),
    })
  );
};
