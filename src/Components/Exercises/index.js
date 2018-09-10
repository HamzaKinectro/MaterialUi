import React, { Fragment } from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 300,
    overflowY: "auto"
  }
};

export default ({
  exercises,
  category,
  onSelect,
  exercise: {
    id,
    title = "Welcome to gym Club",
    description = "Let's start a health Life"
  }
}) => (
  <Grid container>
    <Grid item sm>
      <Paper style={styles.Paper}>
        {exercises.map(
          ([group, exercises]) =>
            !category || category === group ? (
              <Fragment>
                <Typography
                  variant="headline"
                  gutterBottom
                  style={{ textTransform: "capitalize" }}
                >
                  {group}
                </Typography>
                <List component="ul">
                  {exercises.map(({ id, title }) => (
                    <ListItem button key={id} onClick={() => onSelect(id)}>
                      <ListItemText primary={title} />
                    </ListItem>
                  ))}
                </List>
              </Fragment>
            ) : null
        )}
      </Paper>
    </Grid>

    <Grid item sm>
      <Paper style={styles.Paper}>
        <Typography variant="display1">{title}</Typography>

        <Typography variant="subheading">{description}</Typography>
      </Paper>
    </Grid>
  </Grid>
);
