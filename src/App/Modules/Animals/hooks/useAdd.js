import useRequest from "App/Common/Shared/useRequest";
import { useState } from "react";
import swal from "sweetalert";

const useAdd = () => {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");
  const [history, setHistory] = useState("");
  const [errors, setErrors] = useState("");
  const [open, setOpen] = useState(false);
  const [addLoad, setAddLoad] = useState(false);
  const {request} = useRequest();

  const addAnimal = (department) => {
    setAddLoad(true);
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

  return {
    addLoad,
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
  };
};

export default useAdd;
