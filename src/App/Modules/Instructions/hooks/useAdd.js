import request from "App/Common/Shared/Request";
import swal from "sweetalert";
import { useState } from "react";

const useAdd = () => {
  const [task, setTask] = useState("");

  const [errors, setErrors] = useState("");
  const [openAdd, setOpenAdd] = useState(false);
  const [addLoad,setAddLoad] = useState(false);

  /*........................................*/
  const addInstruction = (department) => {
    setAddLoad(true);
    request
      .post(`/tasks`, { instruction: task, department: department })
      .then(
        (res) => {
          swal("sucessful", "", "success");
          setOpenAdd(false);
          clearAttributes();
          setAddLoad(false);
        },
        (err) => {
          setErrors(err.response.data);
          setAddLoad(false);
        }
      )
      .catch((err) => {
        setErrors(err.response.data);
        setAddLoad(false);
      });
  };
  /*...................................................*/

  /*..............................form change handler.........................*/
  const handleChange = (e) => {
    switch (e.target.id) {
      case "task": {
        setTask(e.target.value);
        break;
      }
      default:
        return;
    }
  };
  /*.................................................................................*/
  const clearAttributes = () => {
    setTask("");
    setErrors("");
  };

  return {
    addLoad,
    task,
    errors,
    handleChange,
    addInstruction,
    openAdd,
    setOpenAdd,
    clearAttributes,
  };
};

export default useAdd;
