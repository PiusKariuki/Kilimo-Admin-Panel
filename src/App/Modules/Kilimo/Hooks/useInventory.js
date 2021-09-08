import request from "App/Common/Shared/Request";
import { useState } from "react";

const useInventory = () => {
	const [load, setLoad] = useState(false);
	const [inventory, setInventory] = useState([]);

	const fetchInventory = () => {
		setLoad(true);

		request
			.get("/inventory")
			.then(
				(res) => {
					setLoad(false);
					setInventory(res.data);
				},
				(err) => {
					alert(err);
					setLoad(false);
				}
			)
			.catch((err) => {
				alert(err);
				setLoad(false);
			});
	};

	const editInventoryItem = (id) => {
		setLoad(true);
		request
			.put(`/inventory/${id}`)
			.then(
				(res) => {
					setLoad(false);
					alert(res.data);
				},
				(err) => {
					alert(err.message);
					setLoad(false);
				}
			)
			.catch((err) => {
				alert(err.message);
				setLoad(false);
			});
	};

	const deleteInventoryItem = (id) => {
		setLoad(true);
		request
			.delete(`/inventory/${id}`)
			.then(
				(res) => {
					setLoad(false);
					alert(res.data);
				},
				(err) => {
					alert(err.message);
					setLoad(false);
				}
			)
			.catch((err) => {
				alert(err.message);
				setLoad(false);
			});
	};

	return [
		load,
		inventory,
		fetchInventory,
		editInventoryItem,
		deleteInventoryItem,
	];
};

export default useInventory;
