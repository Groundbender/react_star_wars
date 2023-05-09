import PeoplePage from "@containers/peoplePage/peoplePage";
import HomePage from "@containers/HomePage/HomePage";

const routesConfig = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/people",
    element: <PeoplePage />,
  },
];

export default routesConfig;
