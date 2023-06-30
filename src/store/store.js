import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers/index";
import { setToLocalStorage } from "@utils/localStorage";

const store = createStore(
  rootReducer,

  composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => {
  // console.log(store.getState().favoriteReducer);
  setToLocalStorage("store", store.getState().favoriteReducer);
});

export { store };
