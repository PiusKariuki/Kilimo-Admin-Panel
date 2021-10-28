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
  name,
  breed,
  age,
  history,
  errors,
  handleChange,
  open,
  addAnimal,
  department,
  getAnimals,
  setOpen,
  clearAttributes
}) => {
  const classes = useStyles();
  return (
    <Dialog open={open}>
      <Card>
        <CardContent>
          <FormControl>
            <Grid container >
              {/* .............................NAME.............................. */}
              <Grid item xs={6}>
                <Typography variant="body1">
                  <b>
                    <i>Name:</i>
                  </b>
                </Typography>
                <TextField
                  value={name}
                  id="name"
                  className={classes.textfield}
                  onChange={handleChange}
                />
                <Typography
                  variant="body2"
                  color="error"
                  className={classes.errors}
                >
                  {errors && errors.name && errors.name.message}
                </Typography>
              </Grid>
              {/* .............................BREED.............................. */}
              <Grid item xs={6}>
                <Typography variant="body1">
                  <b>
                    <i>Breed:</i>
                  </b>
                </Typography>
                <TextField
                  value={breed}
                  id="breed"
                  className={classes.textfield}
                  onChange={handleChange}
                />
                <Typography
                  variant="body2"
                  color="error"
                  className={classes.errors}
                >
                  {errors && errors.breed && errors.breed.message}
                </Typography>
              </Grid>
              {/* .............................AGE IN WEEKS.............................. */}
              <Grid item xs={6}>
                <Typography variant="body1">
                  <b>
                    <i>Age in weeks:</i>
                  </b>
                </Typography>
                <TextField
                  value={age}
                  id="age"
                  className={classes.textfield}
                  onChange={handleChange}
                />
                <Typography
                  variant="body2"
                  color="error"
                  className={classes.errors}
                >
                  {errors && errors.age_in_weeks && errors.age_in_weeks.message}
                </Typography>
              </Grid>
              {/* .............................HISTORY.............................. */}
              <Grid item xs={6}>
                <Typography variant="body1">
                  <b>
                    <i>History:</i>
                  </b>
                </Typography>
                <TextField
                  value={history}
                  id="history"
                  className={classes.textfield}
                  onChange={handleChange}
                />
                <Typography
                  variant="body2"
                  color="error"
                  className={classes.errors}
                >
                  {errors && errors.history && errors.history.message}
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
              addAnimal(department);
              getAnimals(department);
            }}
          >
            Submit
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              setOpen(false);
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
