import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "3px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

export default function MyModal(props) {
  const classes = useStyles();
  return (
    <Modal
      aria-labelledby="new-task-form"
      aria-describedby="fill-in-a-new-task"
      className={classes.modal}
      open={props.showModal}
      onClose={props.handleModalClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500
      }}
    >
      <Fade in={props.showModal}>
        <div className={classes.paper}>
          <h2 id="transition-modal-title">Add New Task</h2>
          <p id="transition-modal-description">Task form here</p>
        </div>
      </Fade>
    </Modal>
  );
}
