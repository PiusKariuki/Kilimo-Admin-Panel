import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import request from "App/Common/Shared/Request";
import { useState } from "react";
import swal from "sweetalert";

const useStyles = makeStyles({
  box: {
    backgroundColor: "white",
    margintop: "0",
    padding: "0.5rem",
  },
  container: {
    margin: "0",
  },
  btns: {
    margin: "0.5rem",
  },
});

const useInventory = () => {
  const [load, setLoad] = useState(false);
  const [inventory, setInventory] = useState([]);
  const [target, setTarget] = useState("");
  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [item, setItem] = useState([]);

  const classes = useStyles();

  /* ...........append funtion to add action buttons to all objects in inventory */
  const inventoryWithBtns = (data) =>
    data.map((obj) =>
      Object.assign(obj, {
        btns: (
          <>
            <Button
              value={obj._id}
              size="small"
              name={obj.name}
              color="primary"
              variant="contained"
              className={classes.btns}
              onClick={(e) => {
                setTarget(e.currentTarget);
                getItemById(e.currentTarget.value);
              }}
            >
              Edit
            </Button>
            <Button
              type="button"
              value={obj._id}
              id={obj.name}
              size="small"
              color="secondary"
              variant="contained"
              className={classes.btns}
              onClick={(e) => {
                setTarget(e.currentTarget);
                setOpenDelete(true);
              }}
            >
              delete
            </Button>
          </>
        ),
      })
    );

  /*.............rows aand columns for datatable */
  const data = {
    columns: [
      {
        label: "Product name",
        field: "name",
        sort: "asc",
        width: 150,
      },
      {
        label: "Department",
        field: "department",
        width: 150,
      },
      {
        label: "Amount",
        field: "amount",
        sort: "asc",
        width: 150,
      },
      {
        label: "Net weight",
        field: "unit_weight",
        sort: "asc",
        width: 150,
      },
      {
        label: "Vendor",
        field: "vendor",
        width: 150,
      },
      {
        label: "Actions",
        field: "btns",
        width: 150,
      },
    ],
    rows: inventoryWithBtns(inventory),
  };

  /*delete handler */
  const handleDelete = (e) => {
    setOpenDelete(false);
    deleteInventoryItem(target.value);
    fetchInventory();
  };

  const fetchInventory = () => {
    setLoad(true);
    request
      .get("/inventory")
      .then(
        (res) => {
          setLoad(false);
          setInventory(res.data);
        },
        (err) => {
          setLoad(false);
        }
      )
      .catch((err) => {
        setLoad(false);
      });
  };

  const editInventoryItem = (
    name,
    amount,
    vendor,
    unit_weight,
    department,
    email
  ) => {
    request
      .put(`/inventory/${target.value}`, {
        name: name,
        amount: amount,
        vendor: vendor,
        unit_weight: unit_weight,
        department: department,
        email: email,
      })
      .then(
        (res) => {
          swal("successful!", `${name} has been updated`, "success");
          fetchInventory();
          setOpenEdit(false)
        },
        (err) => {
          swal("error", err.message, "error");
        }
      )
      .catch((err) => {
        swal("error", err.message, "error");
      });
  };

  const deleteInventoryItem = (id) => {
    setLoad(true);
    request
      .delete(`/inventory/${id}`)
      .then(
        (res) => {
          setLoad(false);
          fetchInventory();
        },
        (err) => {
          setLoad(false);
        }
      )
      .catch((err) => {
        setLoad(false);
      });
  };

  const getItemById = (id) => {
    request
      .get(`/inventory/${id}`)
      .then(
        (res) => {
          setItem(res.data);
        },
        (err) => {}
      )
      .then((err) => setOpenEdit(true))
      .catch((err) => {});
  };

  return [
    load,
    fetchInventory,
    data,
    target,
    handleDelete,
    openDelete,
    setOpenDelete,
    openEdit,
    setOpenEdit,
    item,
    editInventoryItem,
  ];
};

export default useInventory;
