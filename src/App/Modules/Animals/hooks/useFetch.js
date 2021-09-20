import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
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

const useFetch = () => {
  const classes = useStyles();
  const [animals, setAnimals] = useState([]);
  const [load, setLoad] = useState(false);
  const [department, setDepartment]= useState("");

  /* ...............http fetch request..................*/
  const getAnimals = (department) => {
    setDepartment(department);
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
          swal("Something went wrong", "", "error");
        }
      )
      .catch((err) => {
        setLoad(false);
        swal("Something went wrong", "", "error");
      });
  };

  /*...........append buttons to data .............*/
  const animalsWithBtns = (data) =>
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
              view
            </Button>
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

  const data = {
    columns: [
      {
        label: "Name",
        field: "name",
        sort: "asc",
        width: 120,
      },
      {
        label: "Age in weeks",
        field: "age_in_weeks",
        width: 100,
      },
      {
        label: "Breed",
        field: "breed",
        sort: "asc",
        width: 50,
      },
      {
        label: "Actions",
        field: "btns",
        sort: "asc",
        width: 200,
      },
    ],
    rows: animalsWithBtns(animals),
  };

  return [getAnimals, load, data,department];
};

export default useFetch;
