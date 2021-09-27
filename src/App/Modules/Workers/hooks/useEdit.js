import React, { useState } from "react";
import request from "App/Common/Shared/Request";
import swal from "sweetalert";

const useEdit = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [title, setTitle] = useState("");
  const [errors, setErrors] = useState("");
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
  const updateWorker = (workerID) => {
    request
      .put(`/workers/${workerID}`, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        department: department,
        title: title,
      })
      .then(
        (res) => {
          swal("successful!", `${firstName} ${lastName} has been updated`, "success");
        },
        (err) => {
          swal("error", err.message, "error");
        }
      )
      .catch((err) => {
        swal("error", err.message, "error");
      });
  };



  return [
    handleChange,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    department,
    setDepartment,
    title,
    setTitle,
    clearAttributes,
    updateWorker,
    setErrors,
    errors
  ];
};

export default useEdit;
