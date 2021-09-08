import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Grid, Box } from "@material-ui/core";

const useStyles = makeStyles({
	container: {
		justifyContent: "space-around",
		margin: "2rem",
	},
	box: {
		justifyContent: "space-around",
	},
});
const useSpinner = () => {
	const renderSpinner = (load) => {
		const classes = useStyles();
		return (
			<Grid container className={classes.container}>
				<Box className={classes.box}>{load === true ? <CircularProgress color="inherit" /> : null}</Box>
			</Grid>
		);
	};
	return [renderSpinner];
};

export default useSpinner;
