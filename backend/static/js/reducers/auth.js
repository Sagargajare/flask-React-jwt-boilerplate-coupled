import { LOGIN, LOAD_USER, LOGOUT } from "../actions/actionTypes";
const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  isLoading: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        isAuthenticated: true,
        token: action.payload.access_token,
      };

    case LOGOUT:
      console.log("logout");
      return {
        isAuthenticated: false,
        token: null,
      };
    default:
      return state;
  }
}
