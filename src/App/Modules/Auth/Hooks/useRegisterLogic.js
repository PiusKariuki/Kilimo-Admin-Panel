import { useState } from "react";

const useRegister = () => {
  // state hook for email 
  const [mail, setMail] = useState("");

  // change handlers
  const changeHandler = (e) => {
    e.preventDefault();
    setMail(e.target.value);
  };

  // state hook for mail error
  const [regErr, setRegErr] = useState("");
  // error handler fn
  const errHandler = (err) => {
    setRegErr(err);
  }
  return [mail, changeHandler,regErr,errHandler];
};
export default useRegister;