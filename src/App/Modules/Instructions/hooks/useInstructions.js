import Request from "App/Common/Shared/Request";
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

  /*................get instructions by department....................*/
  const getInstructionsByDepartment = (department) => {
    setLoad(true);
    Request.get(`/tasks/departments/${department}`)
      .then((res) => {
        setInstructions(res.data);
        setLoad(false);
      })
      .catch(() => setLoad(false));
  };

  /*.................get instruction by id.......................*/
  const getInstructionsById = (id) => {
    setLoad(true);

    Request.get(`/tasks/${id}`)
      .then((res) => {
        setLoad(false);
        setInstruction(res.data);
      })
      .then(() => setOpenDelete(true))
      .catch((err) => {swal("error", "", "error")
        setLoad(false);
    });
  };
  /*.................deletehandler.......................*/
  const handleEdit = (id) => {
        setLoad(true);
    Request.get(`/tasks/${id}`)
      .then((res) => {
        setLoad(false);
        setInstruction(res.data);
      })
      .then(() => setOpenEdit(true))
      .catch((err) =>{
        setLoad(false);
         swal("error", "", "error");
      });
  };
  /*.................deletehandler.......................*/
  const handleDelete = (id) => {
        setLoad(true);
    Request.delete(`/tasks/${id}`)
      .then((res) => {
        swal("success", "", "success");
        setLoad(false);
        setOpenDelete(false);
      })
      .then(() => {
        setOpenDelete(false);
        getInstructionsByDepartment(department);
      })
      .catch((err) => {swal("error", "", "error")
        setLoad(false);
    
    });
  };

  /*.................................................editing functions.......................*/

  /*.......................data to populate datatable...................*/
  const data = {
    columns,
    rows: dataWithActions(instructions, handleEdit, getInstructionsById),
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
