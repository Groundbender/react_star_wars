import PeoplePage from "@containers/peoplePage/peoplePage";
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
    path: "/not-found",
    element: <NotFoundPage />,
  },
  {
    path: "*",

    element: <NotFoundPage />,
  },
];

export default routesConfig;
