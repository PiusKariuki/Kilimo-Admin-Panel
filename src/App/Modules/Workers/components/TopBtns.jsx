import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button, Box } from "@material-ui/core";
import useAdd from "../hooks/useAdd";

const useStyles = makeStyles({
  container: {
    margin: "0",
    justifyContent: "space-between",
    backgroundColor: "white",
  },

  item: {
    margintop: "0",
    padding: "0.5rem",
    marginLeft: "0",
  },

  add: {
    color: "white",
    backgroundColor: "green",
    "&:hover": {
      color: "white",
      backgroundColor: "red",
    },
  },
  refresh: {
    color: "white",
    backgroundColor: "green",
    "&:hover": {
      color: "white",
      backgroundColor: "red",
    },
  },
});

const TopBtns = ({ getAllWorkers,setOpenAdd }) => {

  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      {/* ......................................add btn.............................. */}
      <Grid item className={classes.item}>
        <Button
          size="small"
          onClick={() => setOpenAdd(true)}
          variant="contained"
          className={classes.add}
        >
          Add
        </Button>
      </Grid>
      {/* ......................................btns btn.............................. */}
      <Grid item  className={classes.item}>
        <Button
          size="small"
          onClick={() => getAllWorkers()}
          variant="contained"
          className={classes.refresh}
        >
          Refresh
        </Button>
      </Grid>
    </Grid>
  );
};

export default TopBtns;
