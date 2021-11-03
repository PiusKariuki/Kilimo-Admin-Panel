import request from "App/Common/Shared/Request";
import swal from "sweetalert";
import { useState } from "react";
import { columns } from "../shared/columns";
import { dataWithActions } from "../shared/data";

const useInstructions = () => {
  const [instructions, setInstructions] = useState([]);
  const [instruction, setInstruction] = useState("");
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [department, setDepartment] = useState("");

  /*................get instructions by department....................*/
  const getInstructionsByDepartment = (department) => {
    request
      .get(`/tasks/departments/${department}`)
      .then((res) => {
        setInstructions(res.data);
      })
      .catch();
  };

  /*.................get instruction by id.......................*/
  const getInstructionsById = (id) => {
    request
      .get(`/tasks/${id}`)
      .then((res) => {
        setInstruction(res.data);
      })
      .then(() => setOpenDelete(true))
      .catch((err) => swal("error", "", "error"));
  };
  /*.................deletehandler.......................*/
  const handleEdit = (id) => {
    request
      .get(`/tasks/${id}`)
      .then((res) => {
        setInstruction(res.data);
      })
      .then(() => setOpenEdit(true))
      .catch((err) => swal("error", "", "error"));
  };
  /*.................deletehandler.......................*/
  const handleDelete = (id) => {
    request
      .delete(`/tasks/${id}`)
      .then((res) => {
        swal("success", "", "success");
        setOpenDelete(false);
      })
      .then(() => {
        setOpenDelete(false);
        getInstructionsByDepartment(department);
      })
      .catch((err) => swal("error", "", "error"));
  };

  /*.................................................editing functions.......................*/

  /*.......................data to populate datatable...................*/
  const data = {
    columns,
    rows: dataWithActions(instructions, handleEdit, getInstructionsById),
  };
  return {
    instruction,
    instructions,
    data,
    getInstructionsByDepartment,
    openEdit,
    setOpenEdit,
    openDelete,
    setOpenDelete,
    department,
    setDepartment,
    handleDelete,
  };
};

export default useInstructions;
