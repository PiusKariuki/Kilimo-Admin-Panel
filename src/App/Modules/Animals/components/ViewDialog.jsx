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

  const classes = useStyles();
  return (
    <Dialog open={open}>
      <Card>
        <CardContent>
          <Typography variant="subtitle1" color="secondary">
            Edit values here
          </Typography>
          <hr />
          <FormControl>
            <Grid container>
              {/* ....................NAME.............................. */}
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
              </Grid>
              {/* ......................BREED..................................... */}
              <Grid item xs={12} md={6}>
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
              </Grid>
              {/* ..................................AGE................................................ */}
              <Grid item xs={12} md={6}>
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
              </Grid>
              {/* ...................................HISTORY............................................. */}
              <Grid item xs={12} md={6}>
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
              </Grid>
              {/* .................................WEEKLY WEIGHT............................................... */}
              <Grid item xs={12} md={6}>
                <Typography variant="body1" color="secondary">
                  <b>
                    <i>Weekly weight:</i>
                  </b>
                </Typography>
                <List>
                  {weight &&
                    weight.map((item, key) => (
                      <ListItem divider className={classes.listItems} key={key}>
                        <ListItemAvatar>
                          <CheckCircleOutlineIcon />
                        </ListItemAvatar>
                        <ListItemText
                          primary={item.weight + " " + "kilograms"}
                          secondary={new Date(item.date).toLocaleDateString()}
                        />
                      </ListItem>
                    ))}
                </List>
              </Grid>
              {/* ..............................PRODUCTS........................................ */}
              <Grid item xs={12} md={6}>
                <Typography variant="body1" color="secondary">
                  <b>
                    <i>
                      {department === "dairies"
                        ? "Milk in litres:"
                        : department === "layers"
                        ? "Eggs per week:"
                        : null}
                    </i>
                  </b>
                </Typography>
                <List>
                  {products.length > 1 &&
                    (department === "dairies" || department === "layers") &&
                    products.map((item, key) => (
                      <ListItem
                        divider
                        key={key}
                        className={classes.listItems}
                      >
                        <ListItemAvatar>
                          <CheckCircleOutlineIcon />
                        </ListItemAvatar>
                        <ListItemText
                          primary={item.litres || item.number}
                          secondary={new Date(item.date).toLocaleDateString()}
                        />
                      </ListItem>
                    ))}
                </List>
              </Grid>
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
              setOpen(false);
              clearAttributes();
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

export default ViewDialog;
