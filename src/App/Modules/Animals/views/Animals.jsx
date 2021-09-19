import React from "react";
import { Grid, Button, Box } from "@material-ui/core";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBDataTableV5 } from "mdbreact";
import { makeStyles } from "@material-ui/core/styles";
import useSpinner from "App/Common/Spinner/Spinner";
import useFetch from "../hooks/useFetch";

const useStyles = makeStyles({
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
  const [getAnimals, load, data] = useFetch();
  const [renderSpinner] = useSpinner();
  React.useEffect(()=> {
    getAnimals();
  },[]);

  return (
    <Grid container>
      <Grid item xs={12}>
        <Box className={classes.box}>
          {renderSpinner(load)}
          <MDBDataTableV5
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
