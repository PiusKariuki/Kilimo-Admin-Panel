import request from "App/Common/Shared/Request";
import { useState } from "react";
import swal from "sweetalert";

const useAdd = () => {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");
  const [history, setHistory] = useState("");
  const [errors, setErrors] = useState("");
  const [open, setOpen] = useState(false);

  /*..................................update animal.................................*/
  const addAnimal = (department) => {
    request
      .post(`/animals/${department}`, {
        name: name,
        breed: breed,
        age_in_weeks: age,
        history: history,
      })
      .then(
        (res) => {
          swal("successful!", `${name} has been added`, "success");
          setOpen(false);
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

  const handleChange = (e) => {
    switch (e.target.id) {
      case "name": {
        setName(e.target.value);
        break;
      }
      case "breed": {
        setBreed(e.target.value);
        break;
      }
      case "age": {
        setAge(e.target.value);
        break;
      }
      case "history": {
        setHistory(e.target.value);
        break;
      }
      default:
        return;
    }
  };

  const clearAttributes = () => {
    setName("");
    setAge("");
    setBreed("");
    setHistory("");
    setErrors("");
  };

  return [
    addAnimal,
    name,
    setName,
    breed,
    setBreed,
    age,
    setAge,
    history,
    setHistory,
    errors,
    handleChange,
    setOpen,
    open,
    clearAttributes,
  ];
};

export default useAdd;
