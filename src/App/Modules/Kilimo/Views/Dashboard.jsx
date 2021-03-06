import {
  Card,
  Grid,
  Typography,
  CardActions,
  CardContent,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
/* ................icons.............*/
import StoreMallDirectorySharpIcon from "@material-ui/icons/StoreMallDirectorySharp";
import StorageOutlinedIcon from "@material-ui/icons/StorageOutlined";
import PetsSharpIcon from "@material-ui/icons/PetsSharp";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import PlaylistAddCheckSharpIcon from "@material-ui/icons/PlaylistAddCheckSharp";
import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  container: {
    justifyContent: "space-between",
    cursor: "pointer",
  },
  items: {
    margin: "2rem",
  },
});

const Dashboard = () => {
  const classes = useStyles();
  let history = useHistory();
  const tkn = useSelector(state => state?.User?.tkn);

  axios.interceptors.request.use((request) => {
    request.headers.Authorization = `Bearer ${tkn}`;
  });

  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} sm={4} md={3} lg={3} className={classes.items}>
        <Box>
          <Card onClick={() => history.push("/kilimo/inventory")}>
            <CardContent>
              <Typography variant="subtitle1">
                <StoreMallDirectorySharpIcon />
                &emsp;
                <b>
                  <i>Inventory</i>
                </b>
              </Typography>
              <hr />
              <Typography variant="body1">
                View, add and delete items iin the farm store
              </Typography>
            </CardContent>
            <CardActions></CardActions>
          </Card>
        </Box>
      </Grid>

      <Grid item xs={12} sm={4} md={3} lg={3} className={classes.items}>
        <Box>
          <Card onClick={() => history.push("/kilimo/logs")}>
            <CardContent>
              <Typography variant="subtitle1">
                <StorageOutlinedIcon />
                &emsp;
                <b>
                  <i>Inventory Logs</i>
                </b>
              </Typography>
              <hr />
              <Typography variant="body1">
                View operations done on the farm store and the persons that did
                them.
              </Typography>
            </CardContent>
            <CardActions></CardActions>
          </Card>
        </Box>
      </Grid>

      <Grid item xs={12} sm={4} md={3} lg={3} className={classes.items}>
        <Box>
          <Card onClick={() => history.push("/kilimo/animals")}>
            <CardContent>
              <Typography variant="subtitle1">
                <PetsSharpIcon />
                &emsp;
                <b>
                  <i>Animals</i>
                </b>
                <hr />
              </Typography>
              <Typography variant="body1">
                View, add and delete animals in their repsective departments
              </Typography>
            </CardContent>
            <CardActions></CardActions>
          </Card>
        </Box>
      </Grid>

      <Grid item xs={12} sm={4} md={3} lg={3} className={classes.items}>
        <Box>
          <Card onClick={() => history.push("/kilimo/workers")}>
            <CardContent>
              <Typography variant="subtitle1">
                <SupervisorAccountIcon />
                &emsp;
                <b>
                  <i>Workers</i>
                </b>
                <hr />
              </Typography>
              <Typography variant="body1">Monitor the workforce</Typography>
            </CardContent>
            <CardActions></CardActions>
          </Card>
        </Box>
      </Grid>

      <Grid item xs={12} sm={4} md={3} lg={3} className={classes.items}>
        <Box>
          <Card onClick={() => history.push("/kilimo/Instructions")}>
            <CardContent>
              <Typography variant="subtitle1">
                <PlaylistAddCheckSharpIcon />
                &emsp;
                <b>
                  <i>Instructions</i>
                </b>
                <hr />
              </Typography>
              <Typography variant="body1">
                Assign daily tasks to workers in their respective departments
              </Typography>
            </CardContent>
            <CardActions></CardActions>
          </Card>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
