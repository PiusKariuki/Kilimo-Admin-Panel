import request from "App/Common/Shared/Request";
import { useState } from "react";
import swal from "sweetalert";
import { columns } from "../shared/columns";
import { dataWithActions } from "../shared/data";

const useFetch = () => {
  const [animals, setAnimals] = useState([]);
  const [load, setLoad] = useState(false);
  const [department, setDepartment] = useState("");
  const [animal, setAnimal] = useState("");
  const [openEdit, setOpenEdit] = useState(false);

  /* ...............get all animals in dept....................*/
  const getAnimals = (department) => {
    setLoad(true);
    request
      .get(`animals/${department}`)
      .then(
        (res) => {
          setAnimals(res.data);
          setLoad(false);
        },
        (err) => {
          setLoad(false);
          swal("Select a department", "", "error");
        }
      )
      .catch((err) => {
        setLoad(false);
        swal("Select a department", "", "error");
      });
  };
  /*......................................................................*/

  /*...........get animal by id function..................................*/
  const getDetails = (department, animalID) => {
    request
      .get(`/animals/${department}/${animalID}`)
      .then(
        (res) => {
          setAnimal(res.data);
        },
        (err) => {
          swal("error", "animal not found", "error");
        }
      )
      .then(() => setOpenEdit(true))
      .catch((err) => {
        swal("error", "animal not found", "error");
      });
  };
  /*................................................................................*/

  /*..................................update animal.................................*/
  const updateAnimal = (animalID,) => {
    request.put(`/animals/${department}/${animalID}`)
    .then()
  }
  const data = {
    columns,
    rows: dataWithActions(animals, department,getDetails),
  };

  return [
    getAnimals,
    load,
    data,
    department,
    setDepartment,
    animal,
    openEdit,
    setOpenEdit,
  ];
};

export default useFetch;
