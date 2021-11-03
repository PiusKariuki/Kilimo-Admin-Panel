import  { useState } from "react";

const useEdit = () => {
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

  return {
    name,
    setName,
    amount,
    setAmount,
    vendor,
    setVendor,
    unit_weight,
    setUnit_weight,
    department,
    setDepartment,
    handleChange
  };
};

export default useEdit;
