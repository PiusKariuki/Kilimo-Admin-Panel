import Landing from '../Views/Landing';
import Kilimo from '../../Kilimo/Container/Kilimo';

const authRoutes = [
  {
    path: "/landing",
    name: "Landing",
    component: Landing,
    layout: "/auth",
  },
  {
    path: "",
    name: "Kilimo",
    component: Kilimo,
    layout: "/kilimo",
  },
];

export default authRoutes;