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
import useEdit from "../hooks/useEdit";

const useStyles = makeStyles({
  textfield: {
    width: "10rem",
    padding: "1rem",
  },
  actions: {
    justifyContent: "space-between",
  },
});

const EditModal = ({
  open,
  setOpen,
  item,
  editInventoryItem,
  email,
  fetchInventory,
  errors,
}) => {
  /*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                                    -hook calls
  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/
  const {
    name,
    setName,
    amount,
    setAmount,
    vendor,
    setVendor,
    unit_weight,
    setUnit_weight,
    department,
    setDepartment,
    handleChange,
  } = useEdit();

  React.useEffect(() => {
    setName(item.name);
    setAmount(item.amount);
    setVendor(item.vendor);
    setUnit_weight(item.unit_weight);
    setDepartment(item.department);
  }, [item]);

  const classes = useStyles();

  return (
    <Dialog open={open}>
      <Card>
        <CardContent>
          <Typography variant="subtitle2">Edit values here</Typography>
          <hr />
          <FormControl>
            <Grid container>
              {/* .............................NAME................................... */}
              <Grid item xs={12} md={6}>
                <Typography variant="body1" color="secondary">
                  <b>
                    <i>Name:</i>
                  </b>
                </Typography>
                <TextField
                  defaultValue={name}
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
              {/* ......................AMOUNT.......................................... */}
              <Grid item xs={12} md={6}>
                <Typography variant="body1" color="secondary">
                  <b>
                    <i>Amount:</i>
                  </b>
                </Typography>
                <TextField
                  defaultValue={amount}
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
              {/* ...............................................VENDOR................. */}
              <Grid item xs={12} md={6}>
                <Typography variant="body1" color="secondary">
                  <b>
                    <i>Vendor:</i>
                  </b>
                </Typography>
                <TextField
                  defaultValue={vendor}
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
              {/*..............................................NET WEIGHT.............. */}
              <Grid item xs={12} md={6}>
                <Typography variant="body1" color="secondary">
                  <b>
                    <i>Net weight:</i>
                  </b>
                </Typography>
                <TextField
                  defaultValue={unit_weight}
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
              {/* ...............................DEPARTMENT...................................... */}
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
            </Grid>
          </FormControl>
        </CardContent>
        {/* ...........................Actions............................................................ */}
        <CardActions className={classes.actions}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            size="small"
            onClick={() => {
              editInventoryItem(
                name,
                amount,
                vendor,
                unit_weight,
                department,
                email
              );
              fetchInventory();
            }}
          >
            Submit
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            onClick={() => {
              setOpen(false);
              fetchInventory();
            }}
          >
            Close
          </Button>
        </CardActions>
      </Card>
    </Dialog>
  );
};

export default EditModal;
