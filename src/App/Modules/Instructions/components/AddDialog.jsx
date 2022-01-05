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
import useSpinner from "App/Common/Spinner/Spinner";

const useStyles = makeStyles({
  textfield: {
    width: "55vw",
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
  load,
  task,
  errors,
  handleChange,
  openAdd,
  addInstruction,
  department,
  getInstructionsByDepartment,
  setOpenAdd,
  clearAttributes,
}) => {
  const [renderSpinner] = useSpinner();

  const handleAdd = () => {
    addInstruction(department);
    getInstructionsByDepartment(department);
  };

  const classes = useStyles();
  return (
    <Dialog open={openAdd} > 
      <Card>
        {renderSpinner(load)}
        <CardContent>
          <FormControl >
            <Grid container>
              {/* .............................Task.............................. */}
              <Grid item xs={6}>
                <Typography variant="body1">
                  <b>
                    <i>Task:</i>
                  </b>
                </Typography>
                <TextField
                  value={task}
                  id="task"
                  className={classes.textfield}
                  onChange={handleChange}
                />
                <Typography
                  variant="body2"
                  color="error"
                  className={classes.errors}
                >
                  {errors && errors.instruction && errors.instruction.message}
                </Typography>
              </Grid>
            </Grid>
          </FormControl>
        </CardContent>

        <CardActions className={classes.actions}>
          {load === false ? (
            <>
              <Button variant="contained" color="primary" onClick={handleAdd}>
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
            </>
          ) : null}
        </CardActions>
      </Card>
    </Dialog>
  );
};

export default AddDialog;
