import React, { Fragment, Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import AddIcon from "@material-ui/icons/Add";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 500
  }
});

export default withStyles(styles)(
  class extends Component {
    state = {
      open: false,
      exercise: {
        title: "",
        description: "",
        muscles: ""
      }
    };

    handleToggle = () => {
      this.setState({
        open: this.state
      });
    };

    handleToggleClose = () => {
      this.setState({
        open: this.state.false
      });
    };

    handleChange = name => ({ target: { value } }) => {
      this.setState({
        exercise: {
          ...this.state.exercise,
          [name]: value
        }
      });
    };

    handleSubmit = () => {
      const { exercise } = this.state;

      this.props.onCreate(exercise);
      this.setState({
        open: this.state.false
      });
    };

    render() {
      const {
          open,
          exercise: { description, title, muscles }
        } = this.state,
        { classes, muscles: categories } = this.props;

      return (
        <Fragment>
          <Button variant="fab" onClick={this.handleToggle} mini>
            <AddIcon />
          </Button>
          <Dialog
            open={open}
            onClose={this.handleToggleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">
              Add new Exercise Here
            </DialogTitle>
            <DialogContent>
              <DialogContentText>Fill the form below.</DialogContentText>
              <form>
                <TextField
                  label="Title"
                  value={title}
                  onChange={this.handleChange("title")}
                  margin="normal"
                  className={classes.formControl}
                />
                <br />
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="muscles"> Muscles</InputLabel>
                  <Select
                    value={muscles}
                    className={classes.formControl}
                    onChange={this.handleChange("muscles")}
                  >
                    {categories.map(category => (
                      <MenuItem value={category}>{category}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <br />
                <TextField
                  label="Description"
                  multiline
                  rows="4"
                  value={description}
                  onChange={this.handleChange("description")}
                  className={classes.formControl}
                  margin="normal"
                />
              </form>
            </DialogContent>

            <DialogActions>
              <Button
                color="primary"
                variant="raised"
                onClick={this.handleSubmit}
              >
                Create
              </Button>
            </DialogActions>
          </Dialog>
        </Fragment>
      );
    }
  }
);
