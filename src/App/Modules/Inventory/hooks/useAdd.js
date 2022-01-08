import useRequest from "App/Common/Shared/useRequest";
import { useState } from "react";
import swal from "sweetalert";

const useAdd = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [vendor, setVendor] = useState("");
  const [unit_weight, setUnit_weight] = useState("");
  const [department, setDepartment] = useState("");
  const [errors, setErrors] = useState("");
  const [openAdd, setOpenAdd] = useState(false);
  const [addLoad,setAddLoad] = useState(false);
  const {request} = useRequest();

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
    setAddLoad(true);
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
          setOpenAdd(false);
          swal("Successful", "item added to inventory", "success");
          setName("");
          setAmount("");
          setVendor("");
          setUnit_weight("");
          setDepartment("");
          setErrors("");
          setAddLoad(false);
        },
        (err) => {
          err.response.status === 400
            ? swal("Duplicate error", err.response.data, "error")
            : setErrors(err.response.data);
          setAddLoad(false);

        }
      )
      .catch((err) => {
        setErrors(err.response.data);
          setAddLoad(false);
      });
  };

  return {addItem, handleChange, errors, setErrors, openAdd, setOpenAdd,addLoad};
};
export default useAdd;
