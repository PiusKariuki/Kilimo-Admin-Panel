import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useButtons = () => {
  const inventoryWithBtns = (data) =>
    data.map((obj) =>
      Object.assign(obj, {
        btns: (
          <>
            <Button
              value={obj._id}
              size="small"
              name={obj.name}
              color="primary"
              variant="contained"
              className={classes.btns}
              onClick={(e) => {
                setTarget(e.currentTarget);
                getItemById(e.currentTarget.value);
              }}
            >
              Edit
            </Button>
            <Button
              type="button"
              value={obj._id}
              id={obj.name}
              size="small"
              color="secondary"
              variant="contained"
              className={classes.btns}
              onClick={(e) => {
                setTarget(e.currentTarget);
                setOpenDelete(true);
              }}
            >
              delete
            </Button>
          </>
        ),
      })
    );
  return [inventorywithBtns];
};
