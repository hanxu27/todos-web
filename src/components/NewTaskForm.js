import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "3px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  textArea: {
    border: "1px solid #C0C0C0",
    borderRadius: "10px",
    margin: theme.spacing(1),
    padding: theme.spacing(1)
  },
  input: {
    margin: theme.spacing(0.5)
  }
}));

const NewTaskForm = () => {
  const classes = useStyles();
  return (
    <div className={classes.paper}>
      <h2 id="transition-modal-title">Add New Task</h2>
      <InputLabel htmlFor="name">Task Name</InputLabel>
      <Input id="name" aria-describedby="insert task name" className={classes.input} />
      <InputLabel htmlFor="category">Category</InputLabel>
      <Input id="category" aria-describedby="insert task category" className={classes.input} />
      <InputLabel htmlFor="description">Description</InputLabel>
      <TextareaAutosize
        aria-label="description"
        rows={4}
        placeholder="such describe"
        className={classes.textArea}
      />
      <Grid container spacing={0} direction="column" alignItems="center" justify="center">
        <Button variant="contained" color="primary">
          Create
        </Button>
      </Grid>
    </div>
  );
};

export default NewTaskForm;
