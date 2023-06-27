import _omit from "lodash";
import {
  ADD_PERSON_TO_FAVORITE,
  REMOVE_PERSON_FROM_FAVORITE,
} from "@store/constants/actionTypes.js";
import { getFromLocalStorage } from "@utils/localStorage";

const initialState = getFromLocalStorage("store") || {};
export const favoriteReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_PERSON_TO_FAVORITE:
      return {
        ...state,
        ...payload,
      };
    case REMOVE_PERSON_FROM_FAVORITE:
      // return _omit(state, [payload]); // ||

      const { [payload]: obj, ...rest } = state;
      return { ...rest };

    default:
      return state;
  }
};
