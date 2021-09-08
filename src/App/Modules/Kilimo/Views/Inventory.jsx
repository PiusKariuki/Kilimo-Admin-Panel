import { Grid, Button, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBDataTableV5 } from "mdbreact";
import React from "react";

import useInventory from "../Hooks/useInventory";
import useSpinner from "App/Common/Spinner/Spinner";

const useStyles = makeStyles({
	box: {
		backgroundColor: "white",
	},
	container: {
		justifyContent: "space-around",
	},
	btns: {
		margin: "0.5rem",
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
		inventory,
		fetchInventory,
		editInventoryItem,
		deleteInventoryItem,
	] = useInventory();

	
	const inventoryWithBtns = inventory.map((inv, key) =>
		Object.assign(inv, {
			btn1: (
				<>
					<Button
						value={inv._id}
						size="small"
						color="primary"
						variant="contained"
						className={classes.btns}
						onClick={()=> editInventoryItem(inv._id)}
					>
						Edit
					</Button>
					<Button
						value={inv._id}
						size="small"
						color="primary"
						variant="contained"
						className={classes.btns}
						onClick={()=> deleteInventoryItem(inv._id)}
					>
						delete
					</Button>
				</>
			),
		})
	);


	const data = {
		columns: [
			{
				label: "Product name",
				field: "name",
				sort: "asc",
				width: 150,
			},
			{
				label: "Department",
				field: "department",
				width: 150,
			},
			{
				label: "Amount",
				field: "amount",
				sort: "asc",
				width: 150,
			},
			{
				label: "Net weight",
				field: "unit_weight",
				sort: "asc",
				width: 150,
			},
			{
				label: "Vendor",
				field: "vendor",
				width: 150,
			},
			{
				label: "Actions",
				field: "btn1",
				width: 150,
			},
		],
		rows: inventoryWithBtns,
	};

	return (
		<Grid container className={classes.container}>
			<Grid item xs={12}>
				<Box className={classes.box}>
					{renderSpinner(load)}
					<MDBDataTableV5 responsive striped bordered hover data={data} btn />
				</Box>
			</Grid>
		</Grid>
	);
};

export default Inventory;
