import { Grid } from "@material-ui/core";
import React from "react";
import { MDBDataTableV5 } from "mdbreact";
import useInstructions from "../hooks/useInstructions";
import TopBtns from "../components/TopBtns";
import useAdd from "../hooks/useAdd";
import { makeStyles } from "@material-ui/core/styles";
import AddDialog from "../components/AddDialog";
import EditDialog from "../components/EditDialog";
import DeleteDialog from "../components/DeleteDialog";

const useStyles = makeStyles({
  container: {
    backgroundColor: "white",
  },
});

const Instructions = () => {
  const classes = useStyles();
  const {
    instruction,
    data,
    getInstructionsByDepartment,
    openEdit,
    setOpenEdit,
    openDelete,
    setOpenDelete,
    department,
    setDepartment,
    handleDelete,
  } = useInstructions();
  const {
    addLoad,
    task,
    errors,
    handleChange,
    addInstruction,
    openAdd,
    setOpenAdd,
    clearAttributes,
  } = useAdd();
  return (
    <Grid container className={classes.container}>
      <TopBtns
        setDepartment={setDepartment}
        department={department}
        getInstructionsByDepartment={getInstructionsByDepartment}
        setOpenAdd={setOpenAdd}
      />
      {/* ................................................................ */}
      <AddDialog
        load={addLoad}
        task={task}
        department={department}
        errors={errors}
        handleChange={handleChange}
        openAdd={openAdd}
        setOpenAdd={setOpenAdd}
        clearAttributes={clearAttributes}
        addInstruction={addInstruction}
        getInstructionsByDepartment={getInstructionsByDepartment}
      />
      {/* ....................................................................... */}
      <EditDialog
        openEdit={openEdit}
        setOpenEdit={setOpenEdit}
        instruction={instruction}
        getInstructionsByDepartment={getInstructionsByDepartment}
        department={department}
      />
      {/*.............................................................................*/}
      <DeleteDialog
        instruction={instruction}
        getInstructionsByDepartment={getInstructionsByDepartment}
        department={department}
        openDelete={openDelete}
        setOpenDelete={setOpenDelete}
        handleDelete={handleDelete}
      />
      {/*........................ datatable............................................ */}
      <Grid item xs={12}>
        <MDBDataTableV5
          hover
          responsive
          striped
          bordered
          hover
          data={data}
          entries={7}
          btn
        />
      </Grid>
    </Grid>
  );
};

export default Instructions;
