import request from "App/Common/Shared/Request";
import { useState } from "react";
import swal from "sweetalert";

const useAdd = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [title, setTitle] = useState("");
  const [errors, setErrors] = useState("");
  const [openAdd, setOpenAdd] = useState(false);

  /*........................clear errors and values on clicks....................*/
  const clearAttributes = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setDepartment("");
    setTitle("");
    setErrors("");
  };

  /*..................................update animal.................................*/
  const addWorker = () => {
    request
      .post(`/workers`, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        department: department,
        title: title,
        password: "password"
      })
      .then(
        (res) => {
          swal("successful!", `${firstName} has been added`, "success");
          setOpenAdd(false);
          clearAttributes();
        },
        (err) => {
          err.response.status === 400
            ? swal("error", err.response.data, "error")
            : setErrors(err.response.data);
        }
      )
      .catch((err) => {
        setErrors(err?.response?.data);
      });
  };
  /*..............................form change handler.........................*/
  const handleChange = (e) => {
    switch (e.target.id) {
      case "firstName": {
        setFirstName(e.target.value);
        break;
      }
      case "lastName": {
        setLastName(e.target.value);
        break;
      }
      case "email": {
        setEmail(e.target.value);
        break;
      }
      case "department": {
        setDepartment(e.target.value);
        break;
      }
      case "title": {
        setTitle(e.target.value);
        break;
      }
      default:
        return;
    }
  };

  return [
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
  ];
};

export default useAdd;
