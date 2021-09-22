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
import React, { useState } from "react";

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
}) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [vendor, setVendor] = useState("");
  const [unit_weight, setUnit_weight] = useState("");
  const [department, setDepartment] = useState("");

  React.useEffect(() => {
    setName(item.name);
    setAmount(item.amount);
    setVendor(item.vendor);
    setUnit_weight(item.unit_weight);
    setDepartment(item.department);
  }, [item]);

  const classes = useStyles();

  const handleChange = (e) => {
    switch (e.target.id) {
      case "name": {
        setName(e.target.value);
        break;
      }
      case "amount": {
        setAmount(e.target.value);
        break;
      }
      case "vendor": {
        setVendor(e.target.value);
        break;
      }
      case "unit_weight": {
        setUnit_weight(e.target.value);
        break;
      }
      case "department": {
        setDepartment(e.target.value);
        break;
      }
      default:
        return;
    }
  };

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
                  defaultValue={name}
                  id="name"
                  className={classes.textfield}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="body1">
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
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="body1">
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
              </Grid>

              <Grid item xs={12} md={6}>
                <Typography variant="body1">
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
              </Grid>

              <Grid item xs={12} md={6}>
                <Typography variant="body1">
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
              </Grid>
            </Grid>
          </FormControl>
        </CardContent>
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
