import React from "react";
import {
  Modal,
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
import { Line } from "react-chartjs-2";
import useView from "../hooks/useView";

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
  weightChart: {
    marginRight: "12rem",
  },
});

const ViewDialog = ({ open, setOpen, animal, department, getAnimals }) => {
  const [
    handleChange,
    name,
    setName,
    breed,
    setBreed,
    age,
    setAge,
    history,
    setHistory,
    tagNo,
    setTagNo,
    weight,
    setWeight,
    products,
    setProducts,
    clearAttributes,
    updateAnimal,
    errors,
    status,
  ] = useView();

  React.useEffect(() => {
    setName(animal.name);
    setBreed(animal.breed);
    setHistory(animal.history);
    setAge(animal.age_in_weeks);
    setTagNo(animal._id);
    setWeight(animal.weekly_weight);
    if (department === "layers") setProducts(animal.eggs_weekly);
    else if (department === "dairies") setProducts(animal.milk_daily);
  }, [open]);

  React.useEffect(() => {
    status === 200 ? setOpen(false) : null;
  }, [status]);

  /*......................................chart data for weight graph............................*/

  const weightDates =
    weight && weight.map((w) => new Date(w.date).toLocaleDateString());
  const weights = weight && weight.map((w) => w.weight);
  const weightData = {
    labels: weightDates,
    datasets: [
      {
        label: "Weekly weight",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: weights,
      },
    ],
  };
  /*..............................chart data for products graph.......................*/
  const productDates = products && products.map((product) => new Date(product?.date).toLocaleDateString());
  const prods = products && products.map(p => p?.litres || p?.number);
  const productData = {
    labels: productDates,
    datasets: [
      {
        label: department === "dairies" ? "Milk Daily" : "Weekly Egg Count",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: prods,
      },
    ],
  };

  const classes = useStyles();
  return (
    <Modal open={open}>
      <Card>
        <CardContent>
          <Typography variant="subtitle1" color="secondary">
            Edit values here
          </Typography>
          <hr />
          <FormControl>
            <Grid container>
              {/* ....................NAME.............................. */}
              <Grid item xs={12} md={3}>
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
              {/* ......................BREED..................................... */}
              <Grid item xs={12} md={3}>
                <Typography variant="body1" color="secondary">
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
                <Typography
                  variant="body2"
                  color="error"
                  className={classes.errors}
                >
                  {errors && errors.breed && errors.breed.message}
                </Typography>
              </Grid>

              {/* ...................................HISTORY.......................... */}
              <Grid item xs={12} md={3}>
                <Typography variant="body1" color="secondary">
                  <b>
                    <i>History:</i>
                  </b>
                </Typography>
                <TextField
                  rows={4}
                  multiline
                  defaultValue={history}
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

              {/* ..................................AGE................................................ */}
              <Grid item xs={12} md={3}>
                <Typography variant="body1" color="secondary">
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
                <Typography
                  variant="body2"
                  color="error"
                  className={classes.errors}
                >
                  {errors && errors.age_in_weeks && errors.age_in_weeks.message}
                </Typography>
              </Grid>
              {/* .................................WEEKLY WEIGHT............................................... */}
              <Grid item xs={12} md={5} className={classes.weightChart}>
                <Line
                  data={weightData}
                  options={{
                    title: {
                      display: true,
                      text: "Weekly Weight",
                      fontSize: "20",
                    },
                  }}
                />
              </Grid>

              {/* ..............................PRODUCTS........................................ */}
              {department === "layers" || department === "dairies" ? (
                <Grid item xs={12} md={5}>
                  <Line
                    data={productData}
                    options={{
                      title: {
                        display: true,
                        text:
                          department === "daires"
                            ? "Milk Daily"
                            : "Weekly Egg Count",
                        fontSize: "20",
                      },
                      legend: {
                        display: true,
                        position: "right",
                      },
                    }}
                  />
                </Grid>
              ) : null}
              {/* .............................................................................. */}
            </Grid>
          </FormControl>
        </CardContent>
        <CardActions className={classes.actions}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              updateAnimal(department, tagNo);
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
    </Modal>
  );
};

export default ViewDialog;
