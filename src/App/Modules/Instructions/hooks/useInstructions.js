import useRequest from "App/Common/Shared/useRequest";
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
  const [load, setLoad] = useState(false);
  const { request } = useRequest();

  /*................get instructions by department....................*/
  const getInstructionsByDepartment = (department) => {
    setLoad(true);
    request
      .get(`/tasks/departments/${department}`)
      .then((res) => {
        setInstructions(res.data);
        setLoad(false);
      })
      .catch(() => setLoad(false));
  };

  /*.................get instruction by id.......................*/
  const getInstructionsById = (id) => {
    setLoad(true);

    request
      .get(`/tasks/${id}`)
      .then((res) => {
        setLoad(false);
        setInstruction(res.data);
      })
      .then(() => setOpenDelete(true))
      .catch((err) => {
        swal("error", "", "error");
        setLoad(false);
      });
  };
  /*.................deletehandler.......................*/
  const handleEdit = (id) => {
    setLoad(true);
    request
      .get(`/tasks/${id}`)
      .then((res) => {
        setLoad(false);
        setInstruction(res.data);
      })
      .then(() => setOpenEdit(true))
      .catch((err) => {
        setLoad(false);
        swal("error", "", "error");
      });
  };
  /*.................deletehandler.......................*/
  const handleDelete = (id) => {
    setLoad(true);
    request
      .delete(`/tasks/${id}`)
      .then((res) => {
        swal("success", "", "success");
        setLoad(false);
        setOpenDelete(false);
      })
      .then(() => {
        setOpenDelete(false);
        getInstructionsByDepartment(department);
      })
      .catch((err) => {
        swal("error", "", "error");
        setLoad(false);
      });
  };

  /*.................................................editing functions.......................*/

  /*.......................data to populate datatable...................*/
  const data = {
    columns,
    rows: dataWithActions(load, instructions, handleEdit, getInstructionsById),
  };
  return {
    load,
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
