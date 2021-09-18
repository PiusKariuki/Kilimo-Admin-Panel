import DashboardIcon from "@material-ui/icons/Dashboard";
import Dashboard from '../Views/Dashboard';
import StoreMallDirectorySharpIcon from "@material-ui/icons/StoreMallDirectorySharp";
import Inventory from '../../Inventory/views/Inventory';
import ListIcon from "@material-ui/icons/List";
import Logs from "../../Logs/views/Logs";


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
	{
		path: "/logs",
		name: "Logs",
		icon: ListIcon,
		component: Logs,
		layout: "/kilimo",
	},
];

export default kilimoRoutes;