import React from "react";
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

export const dataWithActions = (
  load,
  animals,
  department,
  getDetails,
  setOpenDelete,
  setDeleteObj
) => {
  const classes = useStyles();

  return animals.map((obj) =>
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
              getDetails(department, e.currentTarget.value);
            }}
          >
            view
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
              setDeleteObj(e.currentTarget);
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
