import request from "App/Common/Shared/Request";
import swal from "sweetalert";
import { useState } from "react";

const useEdit = () => {
  const [task, setTask] = useState("");
  const [errors, setErrors] = useState("");
  const [res, setRes] = useState("");

  /*........................................*/
  const editInstruction = (id, department) => {
    request
      .put(`/tasks/${id}`, { instruction: task, department: department })
      .then(
        (res) => {
          setRes(res.status);
          swal("successful", "", "success");
          clearAttributes();
        },
        (err) => setErrors(err.response.data)
      )
      .catch((err) => setErrors(err.response.data));
  };
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
    setRes("")
  };

  return [
    task,
    setTask,
    handleChange,
    editInstruction,
    errors,
    clearAttributes,
    res,
    setRes,
  ];
};

export default useEdit;
