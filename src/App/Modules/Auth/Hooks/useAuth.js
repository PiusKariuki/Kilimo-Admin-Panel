import { useHistory } from "react-router-dom";

 const useAuth = () => {

  const redirectWithTkn = (tkn) =>{
    let history = useHistory();
    tkn ? history.push("/voting/election"): null;
  }

  return [redirectWithTkn]
}
export default useAuth;