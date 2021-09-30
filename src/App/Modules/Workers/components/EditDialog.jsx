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
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
} from "@material-ui/core";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import useEdit from "../hooks/useEdit";

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

const EditDialog = ({ openEdit, setOpenEdit, worker, getAllWorkers }) => {
  const [
    handleChange,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    department,
    setDepartment,
    title,
    setTitle,
    clearAttributes,
    updateWorker,
    errors,
    status
  ] = useEdit();

  React.useEffect(() => {
    setFirstName(worker.firstName);
    setLastName(worker.lastName);
    setEmail(worker.email);
    setDepartment(worker.department);
    setTitle(worker.title);
  }, [openEdit]);

  React.useEffect(()=>{
    status===200? setOpenEdit(false): null;
  }, [status]);

  const classes = useStyles();
  return (
    <Dialog open={openEdit}>
      <Card>
        <CardContent>
          <Typography variant="subtitle1" color="secondary">
            Edit values here
          </Typography>
          <hr />
          <FormControl>
            <Grid container>
              {/* ....................FIRST NAME.............................. */}
              <Grid item xs={12} md={6}>
                <Typography variant="body1" color="secondary">
                  <b>
                    <i>First Name:</i>
                  </b>
                </Typography>
                <TextField
                  defaultValue={firstName}
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
              {/* ......................LAST NAME..................................... */}
              <Grid item xs={12} md={6}>
                <Typography variant="body1" color="secondary">
                  <b>
                    <i>Last Name:</i>
                  </b>
                </Typography>
                <TextField
                  defaultValue={lastName}
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
              {/* ..................................EMAIL................................................ */}
              <Grid item xs={12} md={6}>
                <Typography variant="body1" color="secondary">
                  <b>
                    <i>Email address:</i>
                  </b>
                </Typography>
                <TextField
                  defaultValue={email}
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
              {/* ...................................TITLE............................................. */}
              <Grid item xs={12} md={6}>
                <Typography variant="body1" color="secondary">
                  <b>
                    <i>Title:</i>
                  </b>
                </Typography>
                <TextField
                  defaultValue={title}
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
              {/* ...................................DEPARTMENT............................................. */}
              <Grid item xs={12} md={6}>
                <Typography variant="body1" color="secondary">
                  <b>
                    <i>Department:</i>
                  </b>
                </Typography>
                <TextField
                  defaultValue={department}
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
              {/* ................................................................................ */}
            </Grid>
          </FormControl>
        </CardContent>
        <CardActions className={classes.actions}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              updateWorker(worker._id);
              getAllWorkers();
            }}
          >
            Submit
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              clearAttributes();
              setOpenEdit(false);
            }}
          >
            Close
          </Button>
        </CardActions>
      </Card>
    </Dialog>
  );
};

export default EditDialog;
