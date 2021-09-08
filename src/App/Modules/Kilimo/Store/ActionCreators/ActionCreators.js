import Axios from "axios";
import { baseUrl } from "../../../../Common/Shared/Request";
import swal from "sweetalert";

//actiontypes imports
import * as ActionTypes from "../ActionTypes/ActionTypes";

const axios = Axios.create({
	baseURL: baseUrl,
});
