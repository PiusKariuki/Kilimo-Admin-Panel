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
        },
        (err) => {
          console.log(err.response);
          swal("error", err.message, "error");
          setErrors(err.response.data);
        }
      )
      .catch((err) => {
        console.log(err);
        swal("error", err.message, "error");
        setErrors(err.response.message);
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
  ];
};

export default useAdd;
