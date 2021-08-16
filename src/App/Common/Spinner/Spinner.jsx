import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import blue from '@material-ui/core/colors/blue';
import Primary from "../components/Typography/Primary";

const useSpinner = () => {
	/*..............material ui  styling */
	const useStyles = makeStyles((theme) => ({
		root: {
			display: "flex",
			"& > * + *": {
				marginLeft: theme.spacing(2),
			},
		},
	}));
	/* ......end styling.............*/
 const primaryColor =blue[500];
	/*........spinner render fn...........*/
	const renderSpinner = (load) => {
		const classes = useStyles();
		return (
			<div className={classes.root}>
				{load === true ? <CircularProgress color='secondary' /> : null}
			</div>
		);
	};
	/*...........end spinner renderer fn...........*/

	/*...........custom hook return mthd .........*/
	return [renderSpinner];
};

export default useSpinner;
