import request from "App/Common/Shared/Request";
import swal from "sweetalert";
import { useState } from "react";

const useAdd = () => {
  const [task, setTask] = useState("");
  const [dept, setDept] = useState("");
  const [errors, setErrors] = useState("");
  const [openAdd, setOpenAdd] = useState(false);
  
  /*........................................*/
  const addInstruction = (department) => {
    request
      .post(`/tasks`, { instruction: task, department: department })
      .then(
        (res) => {
          swal("sucessful", "", "success");
          setOpenAdd(false);
          clearAttributes();
        },
        (err) => {
          setErrors(err.response.data);
        })
      .catch((err) => {
        setErrors(err.response.data);
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
    setDept("");
    setErrors("");
  }

  return [
    task,
    errors,
    handleChange,
    addInstruction,
    openAdd,
    setOpenAdd,
    clearAttributes
  ];
};

export default useAdd;
