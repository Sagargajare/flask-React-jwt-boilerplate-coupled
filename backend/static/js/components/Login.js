import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
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
export default function Login() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={2}>
        <div>
          <h3>Login</h3>
        </div>
        <form className={classes.form}>
          <TextField label="Username" variant="outlined" />
          <TextField label="Password" variant="outlined" />
          <Divider />
          <Button fullWidth variant="contained" color="primary">
            Login
          </Button>
        </form>
      </Paper>
    </div>
  );
}
