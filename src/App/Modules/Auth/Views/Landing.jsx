import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

// will have to submit values to store here
import { connect } from "react-redux";

// action import
import { Login } from "../Store/ActionCreators/ActionCreators";

// logic import
import useLogin from "../Hooks/useLoginLogic";
// history import
import {withRouter } from "react-router-dom";

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
	errors: {
		marginTop: "3rem",
		marginBottom: "0",
	},
}));

// parent fn
function Landing({ login, loading, errors }) {
	const classes = useStyles();

	// custom hook
	const [changeHandler, mail, password] = useLogin();

	// spinner hook
	const [renderSpinner] = useSpinner();

	// submit handler
	const handleSubmit = (e) => {
		e.preventDefault();
		login(mail, password);
	};
	
	return (
		<Grid container component="main" className={classes.root}>
			<CssBaseline />
			<Grid item xs={false} sm={4} md={7} className={classes.image} />
			{/* ...................input email and password........................... */}
			<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
				<div className={classes.paper}>
					{/* .............padlock icon................. */}
					<Avatar className={classes.avatar}>
						<LockOutlinedIcon />
					</Avatar>
					{/* ......................padlock icon end.............. */}
					<Typography component="h1" variant="h5">
						Sign in
					</Typography>
					<Typography
						component="h1"
						variant="subtitle1"
						color="secondary"
						className={classes.errors}
					>
						{errors}
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
						<TextField
							value={password}
							onChange={(e) => changeHandler(e)}
							variant="outlined"
							margin="normal"
							required
							fullWidth
							name="password"
							label="Password"
							type="password"
							id="password"
							autoComplete="current-password"
						/>
						{/*..................... spinner..................................... */}
						<Box display="flex"  justifyContent="center">
							{renderSpinner(loading)}
						</Box>
						{/* ..............spinnner end.................... */}

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
					</form>
				</div>
			</Grid>
			{/* ............inputs grid end................................. */}
		</Grid>
	);
}

const mapStateToProps = (state) => {
	return {
		loading: state?.User?.loading,
		errors: state?.User?.errmess,
	};
};

const mapDispatchToProps = (dispatch) => ({
	login: (email, password) => dispatch(Login(email, password)),
});

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(Landing)
);
