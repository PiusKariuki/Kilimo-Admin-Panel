import Register from '../Views/Register';
import Landing from '../Views/Landing';

const authRoutes = [
  {
    path: "/landing",
    name: "Landing",
    component: Landing,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    layout: "/auth",
  },
];

export default authRoutes;