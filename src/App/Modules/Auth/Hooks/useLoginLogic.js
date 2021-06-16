import { useState } from "react";

const useLogin = () => {
  // state hooks for email and password
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  //input change handler
  const changeHandler = (e) => {
    e.target.name === "email"
      ? setMail(e.target.value)
      : setPassword(e.target.value);
  };

  return [changeHandler, mail, password];
};

export default useLogin;
