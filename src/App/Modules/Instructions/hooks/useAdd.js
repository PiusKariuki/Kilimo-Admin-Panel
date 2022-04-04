import request from "App/Common/Shared/Request";
import swal from "sweetalert";
import { useState } from "react";

const useAdd = () => {
	const [task, setTask] = useState("");
	const [load, setLoad] = useState(false);
	const [errors, setErrors] = useState("");
	const [openAdd, setOpenAdd] = useState(false);

	/*........................................*/
	const addInstruction = (department) => {
		setLoad(true);
		request
			.post(`/tasks`, { instruction: task, department: department })
			.then(
				(res) => {
					swal("sucessful", "", "success");
					setOpenAdd(false);
					clearAttributes();
					setLoad(false);
				},
				(err) => {
					setErrors(err.response.data);
					setLoad(false);
				}
			)
			.catch((err) => {
				setErrors(err.response.data);
				setLoad(false);
			});
	};
	/*...................................................*/

	/*..............................form change handler.........................*/
	const handleChange = (e) => {
		switch (e.target.id) {
			case "task": {
				setTask(e.target.value);
				break;
			}
			default:
				return;
		}
	};
	/*.................................................................................*/
	const clearAttributes = () => {
		setTask("");
		setErrors("");
	};

	return {
		task,
		errors,
		handleChange,
		addInstruction,
		openAdd,
		setOpenAdd,
		clearAttributes,
      load
	};
};

export default useAdd;
