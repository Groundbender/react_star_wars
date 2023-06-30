import PeoplePage from "@containers/peoplePage/peoplePage";
import PersonPage from "@containers/PersonPage/PersonPage";
import HomePage from "@containers/HomePage/HomePage";
import NotFoundPage from "@containers/NotFoundPage/NotFoundPage";
import FavoritesPage from "../containers/FavoritesPage/FavoritesPage";
import SearchPage from "../containers/SearchPage/SearchPage";
import ErrorMessage from "@components/ErrorMessage";

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
    path: "/favorites",
    element: <FavoritesPage />,
  },
  {
    path: "/search",
    element: <SearchPage />,
  },
  {
    path: "/fail",
    element: <ErrorMessage />,
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
