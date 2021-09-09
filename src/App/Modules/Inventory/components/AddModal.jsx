import {
	Modal,
	Card,
	CardContent,
	CardActions,
	TextField,
	Typography,
	Button,
} from "@material-ui/core";
import React from "react";

const AddModal = ({ open, handleSubmit, handleClose }) => {
	return (
		<Modal open={open}>
			<Card>
				<CardContent>
					<Typography variant="h2">Input new values here</Typography>
					<form>
						<TextField id="name" label="product name" />
						<TextField id="amount" label="amount" />
						<TextField id="vendor" label="vendor" />
						<TextField id="unit_weight" label="net weight" />
						<TextField id="department" label="department" />
					</form>
				</CardContent>
				<CardActions>
					<Button size="small" onclick={() => handleSubmit()}>
						Submit
					</Button>
					<Button size="small" onclick={() => handleClose()}>
						Close
					</Button>
				</CardActions>
			</Card>
		</Modal>
	);
};

export default AddModal;
