import React, { useState } from "react";
import request from "App/Common/Shared/Request";
import swal from "sweetalert";

const useView = () => {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");
  const [history, setHistory] = useState([]);
  const [tagNo, setTagNo] = useState("");
  const [weight, setWeight] = useState("");
  const [products, setProducts] = useState("");

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
      case "weight": {
        setWeight(e.target.value);
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
    setBreed("");
    setHistory("");
    setAge("");
    setTagNo("");
    setWeight("");
    setProducts("");
  };

  /*..................................update animal.................................*/
  const updateAnimal = (department, animalID) => {
    request
      .put(`/animals/${department}/${animalID}`, {
        name: name,
        breed: breed,
        age_in_weeks: age,
        history: history,
      })
      .then(
        (res) => {
          swal("successful!", `${name} has been updated`, "success");
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
    name,
    setName,
    breed,
    setBreed,
    age,
    setAge,
    history,
    setHistory,
    tagNo,
    setTagNo,
    weight,
    setWeight,
    products,
    setProducts,
    clearAttributes,
    updateAnimal,
  ];
};

export default useView;
