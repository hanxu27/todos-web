import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

const useStyles = makeStyles(theme => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "3px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

const NewTaskForm = () => {
  const classes = useStyles();
  return (
    <div className={classes.paper}>
      <h2 id="transition-modal-title">Add New Task</h2>
      <InputLabel htmlFor="name">Task Name</InputLabel>
      <Input id="name" aria-describedby="insert task name" />
      <InputLabel htmlFor="category">Category</InputLabel>
      <Input id="category" aria-describedby="insert task category" />
      <InputLabel htmlFor="description">Description</InputLabel>
      <TextareaAutosize aria-label="description" rows={3} placeholder="such describe" />
      <Button variant="contained" color="primary">
        Create
      </Button>
    </div>
  );
};

export default NewTaskForm;
