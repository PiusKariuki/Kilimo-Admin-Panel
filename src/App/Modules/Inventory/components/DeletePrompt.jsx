import React from "react";
import {
	Dialog,
	Card,
	CardContent,
	CardActions,
	Typography,
	Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
	name: {
		fontSize: "1.5rem",
		textTransform: "uppercase",
	},
	actions: {
		justifyContent: "space-between",
	},
});
const DeletePrompt = ({ open, name, setOpen, handleDelete, objectId }) => {
	const classes = useStyles();
	return (
		<Dialog open={open}>
			<Card>
				<CardContent>
					<Typography variant="body1">
						Are you sure you want to delete all records of: &emsp;
						<b>
							<i className={classes.name}>{name}?</i>
						</b>
					</Typography>
				</CardContent>
				<CardActions className={classes.actions}>
					<Button
						color="primary"
						onClick={() => {
							handleDelete(objectId);
						}}
					>
						Confirm
					</Button>
					<Button color="secondary" onClick={() => setOpen(false)}>
						Reverse
					</Button>
				</CardActions>
			</Card>
		</Dialog>
	);
};

export default DeletePrompt;
