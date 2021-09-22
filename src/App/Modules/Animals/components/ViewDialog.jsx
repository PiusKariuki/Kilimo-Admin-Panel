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

const ViewDialog = ({open, setOpen,animal, department }) => {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");
  const [history, setHistory] = useState([]);
  const [tagNo, setTagNo] = useState("");
  const [weight, setWeight] = useState("");
  const [products, setProducts] = useState("");

  React.useEffect(() => {
    setName(animal.name);
    setBreed(animal.breed);
    setHistory(animal.history);
    setAge(animal.age);
    setTagNo(animal._id);
    setWeight(animal.weekly_weight);
    if (department === "layers") setProducts(animal.eggs_weekly);
    else if (department === "dairies") setProducts(animal.milk_daily);
  }, [open]);

  const handleChange = (e) => {
    switch (e.target.id) {
      case "name": {
        setName(e.target.value);
        break;
      }
      case "breed": {
        setBreed(e.target.value);
        break;
      }
      case "age": {
        setAge(e.target.value);
        break;
      }
      case "weight": {
        setWeight(e.target.value);
        break;
      }
      case "history": {
        setHistory(e.target.value);
        break;
      }
      default:
        return;
    }
  };

  const classes = useStyles();
  return (
    <Dialog open={open}>
      <Card>
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
                  <i>Breed:</i>
                </b>
              </Typography>
              <TextField
                defaultValue={breed}
                id="breed"
                className={classes.textfield}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="body1">
                <b>
                  <i>Age in weeks:</i>
                </b>
              </Typography>
              <TextField
                defaultValue={age}
                id="age"
                className={classes.textfield}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="body1">
                <b>
                  <i>Products:</i>
                </b>
              </Typography>
              <TextField
                defaultValue={products}
                id="products"
                className={classes.textfield}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="body1">
                <b>
                  <i>Weekly weight:</i>
                </b>
              </Typography>
              <TextField
                defaultValue={weight}
                id="weight"
                className={classes.textfield}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </FormControl>

        <CardActions>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              setOpen(false);
              setName("");
              setBreed("");
              setHistory("");
              setAge("");
              setTagNo("");
              setWeight("");
              setProducts("");
            }}
          >
            Close
          </Button>
        </CardActions>
      </Card>
    </Dialog>
  );
};

export default ViewDialog;
