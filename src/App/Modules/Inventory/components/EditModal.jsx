import {
	Dialog,
	Card,
	CardContent,
	CardActions,
	TextField,
	Typography,
	Button,
	FormControl,
	InputLabel
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles({
	textfield: {
		width: "20rem",
		margin: "1rem",
	},
});

const EditModal = ({ open, setOpen, item }) => {
	const classes = useStyles();
	return (
		<Dialog open={open}>
			<Card>
				<CardContent>
					<Typography variant="subtitle2">Edit values here</Typography>
					<hr />
					<FormControl>
						<label><b>Product Name</b></label>
						<TextField
							defaultValue={item.name}
							id="name"
						/>
						<label><b>Amount</b></label>
						<TextField
							defaultValue={item.amount}
							id="amount"
							// className={classes.textfield}
						/>
						<TextField
							defaultValue={item.vendor}
							id="vendor"
							className={classes.textfield}
						/>
						<TextField
							defaultValue={item.unit_weight}
							id="unit_weight"
							className={classes.textfield}
						/>
						<TextField
							defaultValue={item.department}
							id="department"
							className={classes.textfield}
						/>
					</FormControl>
				</CardContent>
				<CardActions>
					<Button
						size="small"
						onClick={() => {
							setOpen(false);
						}}
					>
						Submit
					</Button>
					<Button
						size="small"
						onClick={() => {
							setOpen(false);
						}}
					>
						Close
					</Button>
				</CardActions>
			</Card>
		</Dialog>
	);
};

export default EditModal;
