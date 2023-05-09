import { NavLink, Route, Routes } from "react-router-dom";
import routesConfig from "@routes/routesConfig";
import Header from "@components/Header/Header";
import styles from "./App.module.css";
const App = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <Header />
        <Routes>
          {routesConfig.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
          {/* <Route path="/" exact element={<HomePage />} />
        <Route path="/people" exact element={<PeoplePage />} /> */}
        </Routes>
      </div>
    </>
  );
};

export default App;
