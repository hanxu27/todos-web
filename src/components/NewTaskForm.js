import React, { useState } from "react";
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
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const handleChange = e => {
    switch (e.target.id) {
      case "name":
        setName(e.target.value);
        break;
      case "category":
        setCategory(e.target.value);
        break;
      default:
        setDescription(e.target.value);
        break;
    }
  };
  return (
    <div className={classes.paper}>
      <h2 id="transition-modal-title">Add New Task</h2>
      <InputLabel htmlFor="name">Task Name</InputLabel>
      <Input
        id="name"
        aria-describedby="insert task name"
        className={classes.input}
        onChange={handleChange}
      />
      <InputLabel htmlFor="category">Category</InputLabel>
      <Input
        id="category"
        aria-describedby="insert task category"
        className={classes.input}
        onChange={handleChange}
      />
      <InputLabel htmlFor="description">Description</InputLabel>
      <TextareaAutosize
        id="description"
        aria-label="description"
        rows={4}
        placeholder="such describe"
        className={classes.textArea}
        onChange={handleChange}
      />
      <Grid container spacing={0} direction="column" alignItems="center" justify="center">
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            console.log(name);
            console.log(category);
            console.log(description);
          }}
        >
          Create
        </Button>
      </Grid>
    </div>
  );
};

export default NewTaskForm;
