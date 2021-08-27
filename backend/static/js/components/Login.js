import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import { useFormik } from "formik";
import * as yup from "yup";
import { useSelector, useDispatch } from "react-redux";
const validationSchema = yup.object({
  username: yup.string("Enter your username").required("username is required"),
  password: yup
    .string("Enter your password")
    .min(2, "Password should be of minimum 2 characters length")
    .required("Password is required"),
});
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    padding: "10%",
    textAlign: "center",
    backgroundColor: theme.palette.primary.main,
  },
  paper: {
    width: "400px",
    padding: "10px 10px",
    margin: "30px auto",
    "& > *": {
      padding: "3px",
      margin: "3px",
    },
  },
  form: {
    display: "block",

    padding: "5px",
    "& > *": {
      margin: "5px",
    },
  },
}));
import Paper from "@material-ui/core/Paper";
import { login, logout } from "../actions/auth";
import { isLogined } from "../routerControllers";
import { Redirect } from "react-router-dom";

export default function Login() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const logout1 = () => {
    dispatch(logout());
  };
  const formik = useFormik({
    initialValues: {
      username: "sagar",
      password: "Sagar@11",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(login(values));
    },
  });

  // const auth = useSelector((state) => state.auth);
  // if (auth.isAuthenticated) {
  //   return <Redirect to="/dashboard" />;
  // }
  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={2}>
        <div>
          <h3>Login</h3>
        </div>
        <form onSubmit={formik.handleSubmit} className={classes.form}>
          <TextField
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
            label="Username"
            fullWidth
            type="text"
            variant="outlined"
          />
          <TextField
            name="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            label="Password"
            fullWidth
            variant="outlined"
          />
          <Divider />
          <Button type="submit" fullWidth variant="contained" color="primary">
            Login
          </Button>
        </form>
        <Button onClick={logout1} fullWidth variant="contained" color="primary">
          Logout
        </Button>
      </Paper>
    </div>
  );
}
