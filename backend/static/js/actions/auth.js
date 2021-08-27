import axios from "axios";
import { LOGIN, LOAD_USER, LOGOUT } from "../actions/actionTypes";
const error401handler = (err, dispatch) => {
  if (err.response.status === 401) {
    dispatch({
      type: LOGOUT,
    });
  } else {
    console.log(err);
  }
};


export const login = (data) => (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify(data);
  axios
    .post("/auth/login", body, config)
    .then((res) => {
      dispatch({
        type: LOGIN,
        payload: res.data,
      });
      dispatch(loadUser());
    })
    .catch((err) => {
      error401handler(err, dispatch);
    });
};

export const loadUser = () => (dispatch, getState) => {
  axios
    .get("/auth/me", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: LOAD_USER,
        payload: res.data,
      });
    })
    .catch((err) => {
      error401handler(err, dispatch);
    });
};

export const logout = () => (dispatch, getState) => {
  axios
    .delete("/auth/logout", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: LOGOUT,
      });
    })
    .catch((err) => {
      error401handler(err, dispatch);
    });
};
export const tokenConfig = (getState) => {
  const token = getState().auth.token;
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  return config;
};
