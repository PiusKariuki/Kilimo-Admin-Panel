import React from "react";
import { Grid, Button, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBDataTableV5 } from "mdbreact";
import useSpinner from "App/Common/Spinner/Spinner";
import useLog from "../hooks/useLog";

const useStyles = makeStyles({
  box: {
    backgroundColor: "white",
    margintop: "0",
    padding: "0.5rem",
  },
  btn: {
    backgroundColor: "green",
    color: "white",
    "&:hover": {
      color: "white",
      backgroundColor: "red",
    },
  },
});

const Logs = () => {
  const classes = useStyles();
  const [getLogs, load, data] = useLog();
  const [renderSpinner] = useSpinner();

  React.useEffect(() => {
    getLogs();
  }, []);

  return (
    <Grid container>
      <Grid item xs={12}>
        <Box className={classes.box}>
          <Button
            variant="contained"
            className={classes.btn}
            onClick={() => getLogs()}
          >
            Refresh
          </Button>
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

export default Logs;
