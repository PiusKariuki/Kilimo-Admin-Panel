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
  const [openDelete, setOpenDelete] = useState(false);
  const [deleteObj, setDeleteObj] = useState("");

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
        }
      )
      .catch((err) => {
        setLoad(false);
      });
  };
  /*......................................................................*/

  /*...........get animal by id function..................................*/
  const getDetails = (department, animalID) => {
    setLoad(true);
    request
      .get(`/animals/${department}/${animalID}`)
      .then(
        (res) => {
          setAnimal(res.data);
          setLoad(false);
        },
        (err) => {
          swal("error", "animal not found", "error");
          setLoad(false);
        }
      )
      .then(() => setOpenEdit(true))
      .catch((err) => {
        swal("error", "animal not found", "error");
        setLoad(false);
      });
  };
  /*................................................................................*/

  /*....................................delete function.............................*/
  const deleteAnimal = (animalID) => {
    setLoad(true);
    request
      .delete(`/animals/${department}/${animalID}`)
      .then(
        (res) => {
          swal("success", "animal deleted", "success");
          setLoad(false);
          setOpenDelete(false);
          getAnimals(department)
        },
        (err) => {swal("error", "animal not found", "error")
        setLoad(false);
      
      }
      )
      .catch((err) => {swal("error", "animal not found", "error")
        setLoad(false);
    });
  };

  const data = {
    columns,
    rows: dataWithActions(
      load,
      animals,
      department,
      getDetails,
      setOpenDelete,
      setDeleteObj
    ),
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
    openDelete,
    setOpenDelete,
    deleteAnimal,
    deleteObj,
  ];
};

export default useFetch;
