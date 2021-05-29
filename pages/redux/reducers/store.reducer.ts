import { ActionTypes } from "../constants/action.types";

export const shopReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_SHOP:
      return { ...state, shops: payload };

    default:
      return state;
  }
};
