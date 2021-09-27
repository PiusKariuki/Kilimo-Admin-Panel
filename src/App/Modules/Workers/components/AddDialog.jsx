import React from "react";
import {
  Dialog,
  Card,
  CardContent,
  CardActions,
  TextField,
  Typography,
  Button,
  FormControl,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import useAdd from "../hooks/useAdd";

const useStyles = makeStyles({
  textfield: {
    width: "15rem",
    padding: "1rem",
  },
  actions: {
    justifyContent: "space-between",
    paddingBottom: "2rem",
  },
  listItems: {
    margin: "0",
  },
});

const AddDialog = ({
  getAllWorkers,
  openAdd,
  setOpenAdd,
  firstName,
  lastName,
  email,
  department,
  title,
  handleChange,
  errors,
  addWorker,
  clearAttributes,
}) => {
  const classes = useStyles();
  return (
    <Dialog open={openAdd}>
      <Card>
        <CardContent>
          <FormControl>
            <Grid container>
              {/* .............................FIRST NAME.............................. */}
              <Grid item xs={6}>
                <Typography variant="body1">
                  <b>
                    <i>First Name:</i>
                  </b>
                </Typography>
                <TextField
                  value={firstName}
                  id="firstName"
                  className={classes.textfield}
                  onChange={handleChange}
                />
                <Typography
                  variant="body2"
                  color="error"
                  className={classes.errors}
                >
                  {errors && errors.firstName && errors.firstName.message}
                </Typography>
              </Grid>
              {/* .............................LAST NAME.............................. */}
              <Grid item xs={6}>
                <Typography variant="body1">
                  <b>
                    <i>Last Name:</i>
                  </b>
                </Typography>
                <TextField
                  value={lastName}
                  id="lastName"
                  className={classes.textfield}
                  onChange={handleChange}
                />
                <Typography
                  variant="body2"
                  color="error"
                  className={classes.errors}
                >
                  {errors && errors.lastName && errors.lastName.message}
                </Typography>
              </Grid>
              {/* .............................EMAIL.............................. */}
              <Grid item xs={6}>
                <Typography variant="body1">
                  <b>
                    <i>Email:</i>
                  </b>
                </Typography>
                <TextField
                  value={email}
                  id="email"
                  className={classes.textfield}
                  onChange={handleChange}
                />
                <Typography
                  variant="body2"
                  color="error"
                  className={classes.errors}
                >
                  {errors && errors.email && errors.email.message}
                </Typography>
              </Grid>
              {/* .............................DEPARTMENT.............................. */}
              <Grid item xs={6}>
                <Typography variant="body1">
                  <b>
                    <i>Department:</i>
                  </b>
                </Typography>
                <TextField
                  value={department}
                  id="department"
                  className={classes.textfield}
                  onChange={handleChange}
                />
                <Typography
                  variant="body2"
                  color="error"
                  className={classes.errors}
                >
                  {errors && errors.department && errors.department.message}
                </Typography>
              </Grid>
              {/* .............................TITLE.............................. */}
              <Grid item xs={6}>
                <Typography variant="body1">
                  <b>
                    <i>Title:</i>
                  </b>
                </Typography>
                <TextField
                  value={title}
                  id="title"
                  className={classes.textfield}
                  onChange={handleChange}
                />
                <Typography
                  variant="body2"
                  color="error"
                  className={classes.errors}
                >
                  {errors && errors.title && errors.title.message}
                </Typography>
              </Grid>
              {/* ................................................................... */}
            </Grid>
          </FormControl>
        </CardContent>
        <CardActions className={classes.actions}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              addWorker();
              getAllWorkers();
            }}
          >
            Submit
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              setOpenAdd(false);
              clearAttributes();
            }}
          >
            Close
          </Button>
        </CardActions>
      </Card>
    </Dialog>
  );
};

export default AddDialog;
