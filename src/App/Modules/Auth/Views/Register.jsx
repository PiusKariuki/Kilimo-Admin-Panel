import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

// will have to submit values to store here
import { connect } from "react-redux";

// action import
import { RegisterThunk } from "../Store/ActionCreators/ActionCreators";

// custom hook
import useRegister from "../Hooks/useRegisterLogic";

// rrd imports
import { withRouter, Link } from "react-router-dom";

// spinner hook import
import useSpinner from "App/Common/Spinner/Spinner";

// material ui styling
const useStyles = makeStyles((theme) => ({
	root: {
		height: "100vh",
	},
	image: {
		backgroundImage: "url(https://source.unsplash.com/random)",
		backgroundRepeat: "no-repeat",
		backgroundColor:
			theme.palette.type === "light"
				? theme.palette.grey[50]
				: theme.palette.grey[900],
		backgroundSize: "cover",
		backgroundPosition: "center",
	},
	paper: {
		margin: theme.spacing(8, 4),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: "100%", // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
	spinner: {
		position: "absolute",
		right: "17rem",
		alignSelf: "center",
	},
}));

const Register = ({ register, loading, regMess }) => {
	const classes = useStyles();
	// hook destructuring
	const [mail, changeHandler, regErr, errHandler] = useRegister();

	// spinner hook
	const [renderSpinner] = useSpinner();

	// effect hook for error loading in custom hook
	React.useEffect(() => {
		errHandler(regMess);
	}, [regMess]);

	// effect hook to clean up errors on reloads
	React.useEffect(() => {
		errHandler("");
	}, []);

	// submit handler
	const handleSubmit = (e) => {
		e.preventDefault();
		register(mail);
	};

	return (
		<Grid container component="main" className={classes.root}>
			<CssBaseline />
			<Grid item xs={false} sm={4} md={7} className={classes.image} />

			{/*..................... spinner..................................... */}
			<Grid item xs className={classes.spinner}>
				{renderSpinner(loading)}
			</Grid>
			{/* ..............spinnner end.................... */}

			{/* ..............email input div............. */}
			<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
				<div className={classes.paper}>
					<Avatar className={classes.avatar}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Sign up
					</Typography>
					<form
						className={classes.form}
						onSubmit={(e) => handleSubmit(e)}
						noValidate
					>
						<TextField
							value={mail}
							onChange={(e) => changeHandler(e)}
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="email"
							label="Email Address"
							name="email"
							autoComplete="email"
							autoFocus
						/>
						{/* .........email errors.............. */}
						<Typography variant="body2" color="error">
							{regErr}
						</Typography>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
							className={classes.submit}
							// submit mail and pass to store
							onClick={(e) => handleSubmit(e)}
						>
							Sign In
						</Button>
						<Grid container>
							<Grid item xs={12}>
								<Link to="/auth/landing">Proceed to login</Link>
							</Grid>
						</Grid>
					</form>
				</div>
			</Grid>
			{/* routing grid */}
		</Grid>
	);
};

const mapStateToProps = (state) => {
	return {
		loading: state?.User?.loading,
		regMess: state.User?.regMess?.email,
	};
};

const mapDispatchToProps = (dispatch) => ({
	register: (email) => dispatch(RegisterThunk(email)),
});

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(Register)
);
