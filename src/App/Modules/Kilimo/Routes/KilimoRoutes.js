import DashboardIcon from "@material-ui/icons/Dashboard";
import Dashboard from '../Views/Dashboard';
import StoreMallDirectorySharpIcon from "@material-ui/icons/StoreMallDirectorySharp";
import Inventory from '../Views/Inventory';


const kilimoRoutes = [
	{
		path: "/dashboard",
		name: "Dashboard",
		icon: DashboardIcon,
		component: Dashboard,
		layout: "/kilimo",
	},
	{
		path: "/inventory",
		name: "Inventory",
		icon: StoreMallDirectorySharpIcon,
		component: Inventory,
		layout: "/kilimo",
	},
];

export default kilimoRoutes;