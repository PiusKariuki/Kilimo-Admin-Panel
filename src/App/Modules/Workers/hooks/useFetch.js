import request from "App/Common/Shared/Request";
import { useState } from "react";
import swal from "sweetalert";
import { columns } from "../shared/columns";
import { dataWithActions } from "../shared/data";

const useFetch = () => {
  const [allWorkers, setAllWorkers] = useState([]);
  const [workerObj, setWorkerObj] = useState("");
  const [worker, setWorker] = useState("");
  const [errors, setErrors] = useState("");
  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [load, setLoad] = useState(false);
  /*.......................fetch all workers..................................*/
  const getAllWorkers = () => {
    setLoad(true);
    request
      .get(`/workers`)
      .then(
        (res) => {
          setLoad(false);
          setAllWorkers(res.data);
        },
        (err) => {
          swal("Error", err?.response?.message, "error");
          setLoad(false);
        }
      )
      .catch((err) => {
        swal("Error", err?.response?.message, "error");
        setLoad(false);
      });
  };
  /*......................get worker details.....................................*/
  const editWorker = (name, email, department, title) => {
    request
      .put(`/workers/${workerID}`, {
        name: name,
        email: email,
        department: department,
        title: title,
      })
      .then(
        (res) => {
          swal("Successful", `${name} has been updated`, "success");
        },
        (err) => setErrors(err.response.data)
      )
      .then((err) => {
        setErrors(err.response.data);
      });
  };

  /*....................................delete function.............................*/
  const deleteWorker = (workerID) => {
    request
      .delete(`/workers/${workerID}`)
      .then(
        (res) => {
          swal("success", ` deleted`, "success");
          setOpenDelete(false);
          getAllWorkers();
        },
        (err) => swal("error", "worker not found", "error")
      )
      .catch((err) => swal("error", "worker not found", "error"));
  };
  /*.....................edit button click handler................................*/
  const handleView = (workerId) => {
    request
      .get(`/workers/${workerId}`)
      .then(
        (res) => {
          setLoad(false);
          setWorker(res.data);
        },
        (err) => {
          swal("Error", err.response.message, "error");
          setLoad(false);
        }
      )
      .then(() => {
        setOpenEdit(true);
      })
      .catch((err) => {
        setLoad(false);
      });
  };
  /*...................................get worker by Id.................................*/
  const handleDelete = (workerId) => {
    request
      .get(`/workers/${workerId}`)
      .then(
        (res) => {
          setWorker(res.data);
        },
        (err) => {
          swal("Error", err.response.message, "error");
        }
      )
      .then(() => setOpenDelete(true))
      .catch((err) => {
        setLoad(false);
      });
  };

  /*...................................data for datatable.....................*/
  const data = {
    columns,
    rows: dataWithActions(allWorkers, handleView, handleDelete),
  };

  return [
    getAllWorkers,
    editWorker,
    data,
    openEdit,
    setOpenEdit,
    openDelete,
    setOpenDelete,
    deleteWorker,
    load,
    worker,
  ];
};

export default useFetch;
