import React from "react";
import request from "App/Common/Shared/Request";
import { useState } from "react";
import swal from "sweetalert";

const useAdd = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [vendor, setVendor] = useState("");
  const [unit_weight, setUnit_weight] = useState("");
  const [department, setDepartment] = useState("");

  const handleChange = (e) => {
    switch (e.target.id) {
      case "name": {
        setName(e.target.value);
        break;
      }
      case "amount": {
        setAmount(e.target.value);
        break;
      }
      case "vendor": {
        setVendor(e.target.value);
        break;
      }
      case "unit_weight": {
        setUnit_weight(e.target.value);
        break;
      }
      case "department": {
        setDepartment(e.target.value);
        break;
      }
      default:
        return;
    }
  };

  const addItem = () => {
    request
      .post(`/inventory`, {
        name: name,
        amount: amount,
        vendor: vendor,
        unit_weight: unit_weight,
        department: department,
      })
      .then(
        (res) => {
          console.log(res.data);
          //   swal(res.message, " ", "success");
        },
        (err) => {
          let error = err.response.data;
           
          console.log(error.documentElement.querySelector("h1"));
        }
      )
      .then((err) => console.log(err));
  };

  return [addItem, handleChange];
};
export default useAdd;
