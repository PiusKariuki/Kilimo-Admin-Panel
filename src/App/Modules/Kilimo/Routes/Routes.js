import Landing from '../Views/Landing';

const authRoutes = [
  {
    path: "/landing",
    name: "Landing",
    component: Landing,
    layout: "/auth",
  },
];

export default authRoutes;