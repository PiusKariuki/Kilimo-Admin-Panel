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

const EditDialog = ({
  openEdit,
  setOpenEdit,
  instruction,
  getInstructionsByDepartment,
  department,
}) => {
  const [
    task,
    setTask,
    handleChange,
    editInstruction,
    errors,
    clearAttributes,
    res,
  ] = useEdit();

  React.useEffect(() => {
    res === 200 ? setOpenEdit(false) : null;
  }, [res]);

  React.useEffect(() => {
    setTask(instruction.instruction);
  }, [openEdit]);


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
              {/* ....................TASK.............................. */}
              <Grid item xs={12} md={6}>
                <Typography variant="body1" color="secondary">
                  <b>
                    <i>Task:</i>
                  </b>
                </Typography>
                <TextField
                  defaultValue={task}
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
              editInstruction(instruction._id, department);
              getInstructionsByDepartment(department);
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
