import { Grid, Button, Typography, Box } from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBDataTableV5 } from "mdbreact";
import React, { useState } from "react";

import useInventory from "../hooks/useInventory";
import useSpinner from "App/Common/Spinner/Spinner";

import AddModal from "../components/AddModal";
import EditModal from "../components/EditModal";
import DeletePrompt from "../components/DeletePrompt";

const useStyles = makeStyles({
	box: {
		backgroundColor: "white",
		margintop: "0",
		padding: "0.5rem",
	},
	container: {
		margin: "0",
	},
	btns: {
		margin: "0.5rem",
	},
	refresh: {
		justifySelf: "end",
		color: "white",
		backgroundColor: "green",
		"&:hover": {
			color: "white",
			backgroundColor: "red",
		},
	},
});

const Inventory = () => {
	React.useEffect(() => {
		fetchInventory();
	}, []);

	const [renderSpinner] = useSpinner();
	const classes = useStyles();
	const [
		load,
		fetchInventory,
		data,
		target,
		handleDelete,
		openDelete,
		setOpenDelete,
		openEdit,
		setOpenEdit,
		item,
		editInventoryItem, //current selected inventory item for editing
	] = useInventory();

	return (
		<Grid container className={classes.container}>
			<DeletePrompt
				open={openDelete}
				value={target.value}
				name={target.id}
				setOpen={setOpenDelete}
				handleDelete={handleDelete}
			/>

			<EditModal
				open={openEdit}
				setOpen={setOpenEdit}
				item={item}
				editInventoryItem={editInventoryItem}
			/>
			<Grid item xs={12}>
				<Box className={classes.box}>
					<Button
						className={classes.refresh}
						variant="contained"
						onClick={() => fetchInventory()}
					>
						Refresh
					</Button>

					{renderSpinner(load)}

					<MDBDataTableV5
						responsive
						striped
						bordered
						hover
						data={data}
						entries={7}
					/>
				</Box>
			</Grid>
			<Grid item xs={12}>
				{/* <AddModal />
				 */}
			</Grid>
		</Grid>
	);
};

export default Inventory;
