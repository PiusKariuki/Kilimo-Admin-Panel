import { Grid, Button, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBDataTableV5 } from "mdbreact";
import React from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import useInventory from "../hooks/useInventory";
import useAdd from "../hooks/useAdd";
import useSpinner from "App/Common/Spinner/Spinner";

import AddModal from "../components/AddModal";
import EditModal from "../components/EditModal";
import DeletePrompt from "../components/DeletePrompt";

const useStyles = makeStyles({
  buttons: {
    justifyContent: "space-between",
  },
  box: {
    backgroundColor: "white",
    margintop: "0",
    padding: "0.5rem",
  },
  container: {
    margin: "0",
    justifyContent: "space-around",
  },
  btns: {
    margin: "0.5rem",
  },
  refresh: {
    justifySelf: "end",
    color: "white",
    backgroundColor: "green",
    "&:hover": {
      color: "white",
      backgroundColor: "red",
    },
  },
});

const Inventory = ({ email }) => {
  React.useEffect(() => {
    fetchInventory();
  }, []);

  const [renderSpinner] = useSpinner();
  const classes = useStyles();
  const {
    editLoad,
    load,
    fetchInventory,
    data,
    target,
    handleDelete,
    openDelete,
    setOpenDelete,
    openEdit,
    setOpenEdit,
    item,
    editInventoryItem,
    errorMsgs,
  } = useInventory();

  const {
    addItem,
    handleChange,
    errors,
    setErrors,
    openAdd,
    setOpenAdd,
    addLoad,
  } = useAdd();
  return (
    <Grid container className={classes.container}>
      <DeletePrompt
        open={openDelete}
        objectId={target.value}
        name={target.id}
        setOpen={setOpenDelete}
        handleDelete={handleDelete}
      />

      <EditModal
        load={editLoad}
        open={openEdit}
        setOpen={setOpenEdit}
        item={item}
        editInventoryItem={editInventoryItem}
        email={email}
        fetchInventory={fetchInventory}
        errors={errorMsgs}
      />
      <AddModal
        load={addLoad}
        setOpen={setOpenAdd}
        open={openAdd}
        fetchInventory={fetchInventory}
        handleChange={handleChange}
        addItem={addItem}
        errors={errors}
        setErrors={setErrors}
      />
      {/* ..........................add btn........................ */}
      <Grid item xs={6}>
        {" "}
        <Box className={classes.box}>
          <Button
            size="small"
            className={classes.refresh}
            variant="contained"
            onClick={() => setOpenAdd(true)}
          >
            Add Item
          </Button>
        </Box>
      </Grid>
      {/* ..........................................refresh btn..................... */}
      <Grid item xs={6}>
        <Box className={classes.box}>
          <Button
            size="small"
            className={classes.refresh}
            variant="contained"
            onClick={() => fetchInventory()}
          >
            Refresh
          </Button>
        </Box>
      </Grid>

      <Grid item xs={12}>
        <Box className={classes.box}>
          {renderSpinner(load)}
          <MDBDataTableV5
            responsive
            striped
            bordered
            hover
            data={data}
            entries={7}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    email: state.User.email,
  };
};

export default withRouter(connect(mapStateToProps, null)(Inventory));
