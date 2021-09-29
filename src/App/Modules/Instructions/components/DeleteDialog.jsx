import React from "react";
import {
  Dialog,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  name: {
    fontSize: "1.5rem",
    textTransform: "uppercase",
  },
  actions: {
    justifyContent: "space-between",
  },
});
const DeleteDialog = ({ openDelete, instruction, setOpenDelete, handleDelete }) => {
  const classes = useStyles();
  return (
    <Dialog open={openDelete}>
      <Card>
        <CardContent>
          <Typography variant="body1">
            Are you sure you want to delete: &emsp;
            <b>
              <i className={classes.name}>
                {instruction.instruction}?
              </i>
            </b>
          </Typography>
        </CardContent>
        <CardActions className={classes.actions}>
          <Button
            color="primary"
            onClick={() => {
              handleDelete(instruction._id);
            }}
          >
            Confirm
          </Button>
          <Button color="secondary" onClick={() => setOpenDelete(false)}>
            Reverse
          </Button>
        </CardActions>
      </Card>
    </Dialog>
  );
};

export default DeleteDialog;
