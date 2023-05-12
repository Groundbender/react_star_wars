import PeoplePage from "@containers/peoplePage/peoplePage";
import PersonPage from "@containers/PersonPage/PersonPage";
import HomePage from "@containers/HomePage/HomePage";
import NotFoundPage from "@containers/NotFoundPage/NotFoundPage";

const routesConfig = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/people",
    element: <PeoplePage />,
  },
  {
    path: "/people/:id",
    element: <PersonPage />,
  },
  {
    path: "/not-found",
    element: <NotFoundPage />,
  },
  {
    path: "*",

    element: <NotFoundPage />,
  },
];

export default routesConfig;
