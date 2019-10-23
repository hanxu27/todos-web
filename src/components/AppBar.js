import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import ListIcon from "@material-ui/icons/List";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const NavBar = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="add">
          <AddIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Todos
        </Typography>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="sort">
          <ListIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
