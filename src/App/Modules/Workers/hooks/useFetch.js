import useRequest from "App/Common/Shared/useRequest";
import { useState } from "react";
import swal from "sweetalert";
import { columns } from "../shared/columns";
import { dataWithActions } from "../shared/data";

const useFetch = () => {
  const [allWorkers, setAllWorkers] = useState([]);
  const [worker, setWorker] = useState("");
  const [errors, setErrors] = useState("");
  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [load, setLoad] = useState(false);
  const {request} = useRequest();
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
    setLoad(true);
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
          setLoad(false);
        },
        (err) => {
          setErrors(err.response.data);
          setLoad(false);
        }
      )
      .then((err) => {
        setErrors(err.response.data);
        setLoad(false);
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
        setLoad(true);
    request
      .get(`/workers/${workerId}`)
      .then(
        (res) => {
          setLoad(false);
          setWorker(res.data);
        setLoad(false);

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
    setLoad(true);
    request
      .get(`/workers/${workerId}`)
      .then(
        (res) => {
          setWorker(res.data);
        setLoad(false);

        },
        (err) => {
          swal("Error", err.response.message, "error");
        setLoad(false);

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
    rows: dataWithActions(load,allWorkers, handleView, handleDelete),
  };

  return {
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
  };
};

export default useFetch;
