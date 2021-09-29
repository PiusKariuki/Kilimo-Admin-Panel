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
  React.useEffect(() => {
    getInstructionsByDepartment(department);
  }, [openAdd]);
  const classes = useStyles();
  return (
    <Dialog open={openAdd}>
      <Card>
        <CardContent>
          <FormControl>
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
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              addInstruction(department);
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
