import React from "react";
import { Grid, Box } from "@material-ui/core";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBDataTableV5 } from "mdbreact";
import { makeStyles } from "@material-ui/core/styles";
import useSpinner from "App/Common/Spinner/Spinner";
import useFetch from "../hooks/useFetch";
import ViewDialog from "../components/ViewDialog";
import SelectDepartment from "../components/SelectDepartment";
import AddDialog from "../components/AddDialog";
import useAdd from "../hooks/useAdd";
import DeleteDialog from "../components/DeleteDialog";

const useStyles = makeStyles({
  box: {
    backgroundColor: "white",
    margintop: "0",
    padding: "0.5rem",
  },
});

const Animals = () => {
  const classes = useStyles();
  const [
    getAnimals,
    load,
    data,
    department,
    setDepartment,
    animal,
    openEdit,
    setOpenEdit,
    openDelete,
    setOpenDelete,
    deleteAnimal,
    deleteObj,
  ] = useFetch();

  const {
    addAnimal,
    name,
    breed,
    age,
    history,
    errors,
    handleChange,
    setOpen,
    open,
    clearAttributes,
  } = useAdd();

  const [renderSpinner] = useSpinner();

  React.useEffect(() => {
    getAnimals(department);
  }, [openDelete, department]);



  return (
    <Grid container>
      <ViewDialog
        open={openEdit}
        setOpen={setOpenEdit}
        animal={animal}
        department={department}
        getAnimals={getAnimals}
      />
      <AddDialog
        name={name}
        breed={breed}
        age={age}
        history={history}
        errors={errors}
        handleChange={handleChange}
        open={open}
        setOpen={setOpen}
        addAnimal={addAnimal}
        department={department}
        getAnimals={getAnimals}
        clearAttributes={clearAttributes}
      />
      <DeleteDialog
        open={openDelete}
        setOpen={setOpenDelete}
        handleDelete={deleteAnimal}
        deleteObj={deleteObj}
      />
      {/* ................select department and refresh.............................. */}
      <Grid item xs={12}>
        <SelectDepartment
          department={department}
          setDepartment={setDepartment}
          getAnimals={getAnimals}
          setOpen={setOpen}
        />
      </Grid>
      {/* ............................datatable..................................... */}
      <Grid item xs={12}>
        <Box className={classes.box}>
          {renderSpinner(load)}
          <MDBDataTableV5
            hover
            responsive
            striped
            bordered
            data={data}
            entries={7}
            btn
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Animals;
