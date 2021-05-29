import { ActionTypes } from "../constants/action.types";
export const setShop = (userShops) => {
  return {
    type: ActionTypes.SET_SHOP,
    payload: userShops,
  };
};
