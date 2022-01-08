import  { useState } from "react";
import useRequest from "App/Common/Shared/useRequest";
import swal from "sweetalert";

const useView = () => {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");
  const [history, setHistory] = useState([]);
  const [tagNo, setTagNo] = useState("");
  const [weight, setWeight] = useState("");
  const [products, setProducts] = useState("");
  const [errors, setErrors] = useState("");
  const [status,setStatus] = useState("");
  const [editLoad, setEditLoad] = useState(false);
  const {request} = useRequest();

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
    setErrors("");
    setStatus("");
  };

  /*..................................update animal.................................*/
  const updateAnimal = (department, animalID) => {
    setEditLoad(true);
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
          setStatus(res.status);
          clearAttributes();
          setEditLoad(false);
        },
        (err) => {
          setErrors(err.response.data);
          setEditLoad(false);

        }
      )
      .catch((err) => {
        setErrors(err.response.data);
          setEditLoad(false);
      });
  };

  return {
    editLoad,
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
    errors,
    status
  };
};

export default useView;
