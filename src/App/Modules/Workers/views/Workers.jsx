import React from "react";
import { Grid, Box } from "@material-ui/core";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBDataTableV5 } from "mdbreact";
import { makeStyles } from "@material-ui/core/styles";
import useSpinner from "App/Common/Spinner/Spinner";
import useFetch from "../hooks/useFetch";
import AddDialog from "../components/AddDialog";
import DeleteDialog from "../components/DeleteDialog";
import EditDialog from "../components/EditDialog";
import TopBtns from "../components/TopBtns";
import useAdd from "../hooks/useAdd";

const useStyles = makeStyles({
  box: {
    backgroundColor: "white",
    margintop: "0",
    padding: "0.5rem",
  },
});

const Workers = () => {
  const {
    getAllWorkers,
    data,
    openEdit,
    setOpenEdit,
    openDelete,
    setOpenDelete,
    deleteWorker,
    load,
    worker,
   } = useFetch();

  const {
    profilePicture,
    addWorker,
    firstName,
    lastName,
    email,
    title,
    department,
    errors,
    handleChange,
    setOpenAdd,
    openAdd,
    clearAttributes,
  } = useAdd();

  React.useEffect(() => {
    getAllWorkers();
  }, [openAdd]);

  const [renderSpinner] = useSpinner();
  const classes = useStyles();
  return (
    <Grid container>
      {/* ................Top btns ...............................*/}
      <Grid item xs={12}>
        <TopBtns getAllWorkers={getAllWorkers} setOpenAdd={setOpenAdd} />
      </Grid>
      {/*................Add Dialog...................*/}
      <AddDialog
        getAllWorkers={getAllWorkers}
        openAdd={openAdd}
        setOpenAdd={setOpenAdd}
        firstName={firstName}
        lastName={lastName}
        profilePicture={profilePicture}
        email={email}
        department={department}
        title={title}
        handleChange={handleChange}
        errors={errors}
        addWorker={addWorker}
        clearAttributes={clearAttributes}
      />
      {/*.................Edit Dialog.....................*/}
      <EditDialog
        setOpenEdit={setOpenEdit}
        openEdit={openEdit}
        worker={worker}
        getAllWorkers={getAllWorkers}
      />
      {/*.................DeleteDialog......................*/}
      <DeleteDialog
        openDelete={openDelete}
        setOpenDelete={setOpenDelete}
        worker={worker}
        deleteWorker={deleteWorker}
      />
      {/* ............................datatable..................................... */}
      <Grid item xs={12}>
        <Box className={classes.box}>
          {renderSpinner(load)}
          <MDBDataTableV5
            hover
            responsive
            striped
            bordered
            hover
            data={data}
            btn
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Workers;
