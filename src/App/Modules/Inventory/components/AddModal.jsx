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
import React from "react";

const useStyles = makeStyles({
  errors: {
    marginBottom: "0.5rem"
  },
  textfield: {
    width: "10rem",
    padding: "1rem",
  },
  actions: {
    justifyContent: "space-between",
  },
});

const AddModal = ({
  open,
  addItem,
  setOpen,
  handleChange,
  fetchInventory,
  errors,
  setErrors
}) => {
  const classes = useStyles();
  return (
    <Dialog open={open}>
      <Card>
        <CardContent>
          <Typography variant="subtitle2">Edit values here</Typography>
          <hr />
          <FormControl>
            <Grid container>
              <Grid item xs={12} md={6}>
                <Typography variant="body1">
                  <b>
                    <i>Name:</i>
                  </b>
                </Typography>
                <TextField
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
              <Grid item xs={12} md={6}>
                <Typography variant="body1">
                  <b>
                    <i>Amount:</i>
                  </b>
                </Typography>
                <TextField
                  id="amount"
                  className={classes.textfield}
                  onChange={(e) => handleChange(e)}
                />
                <Typography
                  variant="body2"
                  color="error"
                  className={classes.errors}
                >
                  {errors && errors.amount && errors.amount.message}
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="body1">
                  <b>
                    <i>Vendor:</i>
                  </b>
                </Typography>
                <TextField
                  id="vendor"
                  className={classes.textfield}
                  onChange={handleChange}
                />
                <Typography
                  variant="body2"
                  color="error"
                  className={classes.errors}
                >
                  {errors && errors.vendor && errors.vendor.message}
                </Typography>
              </Grid>

              <Grid item xs={12} md={6}>
                <Typography variant="body1">
                  <b>
                    <i>Net weight:</i>
                  </b>
                </Typography>
                <TextField
                  id="unit_weight"
                  className={classes.textfield}
                  onChange={handleChange}
                />
                <Typography
                  variant="body2"
                  color="error"
                  className={classes.errors}
                >
                  {errors && errors.unit_weight && errors.unit_weight.message}
                </Typography>
              </Grid>

              <Grid item xs={12} md={6}>
                <Typography variant="body1">
                  <b>
                    <i>Department:</i>
                  </b>
                </Typography>
                <TextField
                  id="department"
                  className={classes.textfield}
                  onChange={handleChange}
                />
                <Typography
                  variant="body2"
                  color="error"
                  className={classes.errors}
                >
                  {errors.department && errors.department.message}
                </Typography>
              </Grid>
            </Grid>
          </FormControl>
        </CardContent>
        <CardActions className={classes.actions}>
          <Button
            type="button"
            color="primary"
            size="small"
            variant="contained"
            onClick={() => {
              addItem();
              fetchInventory();
            }}
          >
            Submit
          </Button>
          <Button
            color="secondary"
            size="small"
            variant="contained"
            onClick={() => {
              fetchInventory();
              setOpen(false);
              setErrors("");
            }}
          >
            Close
          </Button>
        </CardActions>
      </Card>
    </Dialog>
  );
};

export default AddModal;
