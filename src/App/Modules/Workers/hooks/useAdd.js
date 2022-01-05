import request from "App/Common/Shared/Request";
import { useState } from "react";
import swal from "sweetalert";

const useAdd = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [title, setTitle] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [errors, setErrors] = useState("");
  const [openAdd, setOpenAdd] = useState(false);
  const [addLoad, setAddLoad] = useState(false);

  /*........................clear errors and values on clicks....................*/
  const clearAttributes = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setDepartment("");
    setTitle("");
    setErrors("");
    setProfilePicture("");
  };

  /*..................................update animal.................................*/
  const addWorker = () => {
    const formData = new FormData();
    formData.append("firstName",firstName);
    formData.append("lastName",lastName);
    formData.append("email",email);
    formData.append("profilePicture",profilePicture);
    formData.append("title",title);
    formData.append("password","password");
    formData.append("department",department);

    setAddLoad(true);

    request
      .post(`/workers`, formData)
      .then(
        (res) => {
          swal("successful!", `${firstName} has been added`, "success");
          setOpenAdd(false);
          clearAttributes();
          setAddLoad(false);
        },
        (err) => {
          err.response.status === 400
            ? swal("error", err.response.data, "error")
            : setErrors(err.response.data);
          setAddLoad(false);

        }
      )
      .catch((err) => {
        setErrors(err?.response?.data);
          setAddLoad(false);

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
      case "profilePicture": {
        setProfilePicture(e.target.files[0]);
        break;
      }
      default:
        return;
    }
  };

  return {
    addLoad,
    addWorker,
    firstName,
    lastName,
    profilePicture,
    email,
    title,
    department,
    errors,
    handleChange,
    setOpenAdd,
    openAdd,
    clearAttributes,
  };
};

export default useAdd;
