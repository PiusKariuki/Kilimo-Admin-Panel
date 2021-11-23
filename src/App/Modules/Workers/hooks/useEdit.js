import { useState } from "react";
import request from "App/Common/Shared/Request";
import swal from "sweetalert";

const useEdit = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [title, setTitle] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [errors, setErrors] = useState("");
  const [status, setStatus] = useState("");

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
      case "profilePicture": {
        setProfilePicture(e.target.files[0]);
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
    setStatus("");
    setProfilePicture("");
  };

  /*..................................update animal.................................*/
  const updateWorker = (workerID) => {
    let formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("profilePicture", profilePicture);
    formData.append("title", title);
    formData.append("department", department);

    request
      .put(`/workers/${workerID}`, formData)
      .then(
        (res) => {
          swal(
            "successful!",
            `${firstName} ${lastName} has been updated`,
            "success"
          );
          setStatus(res.status);
          clearAttributes();
        },
        (err) => {
          setErrors(err.response.data);
        }
      )
      .catch((err) => {
        setErrors(err.response.data);
      });
  };

  return {
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
    errors,
    status,
    profilePicture,
    setProfilePicture,
  };
};

export default useEdit;
