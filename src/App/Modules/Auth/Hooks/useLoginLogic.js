import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const useLogin = () => {
  // state hooks for email and password
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  //input change handler
  const changeHandler = (e) => {
    e.target.name === "email"
      ? setMail( e.target.value)
      : setPassword(e.target.value);
  };

  // pass& err state hook
  const [mailErr, setMailErr] = useState("");
  const [passErr, setPassErr] = useState("");
  
  // storing password and email errors
  const errMess = (mailMess, passMess) => {
    setMailErr(mailMess);
    setPassErr(passMess);
  }

  return [changeHandler, mail, password, errMess, mailErr, passErr];
};

export default useLogin;
