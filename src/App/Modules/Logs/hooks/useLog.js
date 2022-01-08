import useRequest from "App/Common/Shared/useRequest";
import { useState } from "react";
import swal from "sweetalert";

const useLog = () => {
  const [logs, setLogs] = useState([]);
  const [load, setLoad] = useState(false);
  const { request } = useRequest();

  const getLogs = () => {
    setLoad(true);
    request
      .get(`/logs`)
      .then(
        (res) => {
          setLoad(false);
          setLogs(res.data);
        },
        (err) => {
          swal("failed", err.message, "error");
        }
      )
      .catch((err) => {
        swal("failed", err.message, "error");
      });
  };

  const data = {
    columns: [
      {
        label: "Email",
        field: "email",
        sort: "asc",
        width: 150,
      },
      {
        label: "Product name",
        field: "product",
        sort: "asc",
        width: 150,
      },
      {
        label: "Amount",
        field: "amount",
        sort: "asc",
        width: 150,
      },
    ],
    rows: logs,
  };

  return [getLogs, load, data];
};

export default useLog;
