import DashboardIcon from "@material-ui/icons/Dashboard";
import Dashboard from '../Views/Dashboard';
import StoreMallDirectorySharpIcon from "@material-ui/icons/StoreMallDirectorySharp";
import Inventory from '../../Inventory/views/Inventory';


const kilimoRoutes = [
	{
		path: "/dashboard",
		name: "Dashboard",
		icon: DashboardIcon,
		component: Dashboard,
		layout: "/kilimo",
		exact: true,
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