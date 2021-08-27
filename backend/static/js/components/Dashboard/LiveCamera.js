import { Button, Divider } from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  screen: {
    width: "50%",
    margin: "0 auto",
  },
  root: {
    width: "80%",
    margin: "0 auto",
  },
}));
export default function LiveCamera() {
  const classes = useStyles();
  const url = "http://localhost:5000/api/ml";
  const options = {};
  const [liveOn, setliveOn] = useState(true);
  const cameraControl = () => {
    if (liveOn) {
      setliveOn(!liveOn);
    } else {
      setliveOn(!liveOn);
    }
  };

  return (
    <div className={classes.root}>
      {liveOn ? (
        <img className={classes.screen} src="/api/ml" />
      ) : (
        <img
          className={classes.screen}
          src="https://i1.wp.com/lanecdr.org/wp-content/uploads/2019/08/placeholder.png"
        />
      )}
      <br />
      <Button variant="contained" onClick={cameraControl}>
        {liveOn ? "Stop" : "Start"}
      </Button>
    </div>
  );
}
