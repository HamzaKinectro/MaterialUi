import React, { Component } from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import CreateDialog from "../Exercises/Dialog/Create";

export default ({ muscles, onExerciseCreated }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography
        variant="headline"
        color="inherit"
        style={{ flex: 1 }}
        gutterBottom
      >
        Healthy Exercises
      </Typography>
      <CreateDialog muscles={muscles} onCreate={onExerciseCreated} />
    </Toolbar>
  </AppBar>
);
