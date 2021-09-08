import React from "react";
import { Switch, Route } from "react-router-dom";
import "perfect-scrollbar/css/perfect-scrollbar.css";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Sidebar from "../../../Common/components/Sidebar/Sidebar";
import Footer from "../../../Common/components/Footer/Footer";
import Navbar from "../../../Common/components/Navbars/Navbar";

import styles from "assets/jss/material-dashboard-react/layouts/adminStyle.js";

import bgImage from "assets/img/sidebar-2.jpg";
import logo from "assets/img/reactlogo.png";

import useSidebar from "../../../Common/hooks/useSidebar";
import Routes from '../Routes/KilimoRoutes';
import Dashboard from "../Views/Dashboard";


/*................routing mp fn...................*/
const switchRoutes = (
	<Switch>
		{Routes.map((prop, key) => {
			return (
				<Route
					path={(prop.path && prop.layout + prop.path) || prop.layout}
					component={prop.component}
					key={key}
				/>
			);
		})}
	</Switch>
);
/*.......................end routing mp fn...................*/

const useStyles = makeStyles(styles);

const Kilimo = ({...rest}) => {
	// initiaize useSidebar hook
	const [perfectScrollbar] = useSidebar();

	// styles
	const classes = useStyles();
	// ref to help us initialize PerfectScrollbar on windows devices
	const mainPanel = React.createRef();
	// states and functions
	const [image] = React.useState(bgImage);
	const [color] = React.useState("blue");
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	// drawer hidden on large devices
	const resizeFunction = () => {
		if (window.innerWidth >= 960) {
			setMobileOpen(false);
		}
	};

	// initialize and destroy the PerfectScrollbar plugin
	React.useEffect(() => {
		perfectScrollbar(resizeFunction, mainPanel);
	}, [mainPanel]);

	return (
		<div className={classes.wrapper}>
			<Sidebar
				routes={Routes}
				logoText={"KILIMO ADMIN"}
				logo={logo}
				image={image}
				handleDrawerToggle={handleDrawerToggle}
				open={mobileOpen}
				color={color}
				{...rest}
			/>
			<div className={classes.mainPanel} ref={mainPanel}>
				{/* topbar */}
				<Navbar
					routes={Routes}
					handleDrawerToggle={handleDrawerToggle}
					{...rest}
				/>
				{/* ..............displays the view ....................*/}
				<div className={classes.content}>
					<div className={classes.container}>{switchRoutes}</div>
					{/* <div className={classes.container}><Dashboard /></div> */}
				</div>
				{/* ...............view end/////////// */}

				<Footer />
			</div>
		</div>
	);
};

export default Kilimo;
