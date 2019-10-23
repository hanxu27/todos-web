import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const createData = (name, category, progress, description) => ({
  name,
  category,
  progress,
  description
});
const rows = [
  createData("flexbox", "learning", 0, "play around and find a cheat sheet"),

  createData("SQL commands", "learning", 0, "table creation and change commands"),
  createData("passport", "chores", 1, "get forms take photo sent out mail"),
  createData("quarter rounds", "condo", 2, "finished the last wall"),
  createData("washer dryer", "condo", 0, "such dollar signs")
];

const progressColors = ["#606060", "#89EE16", "#166CEE"];

const useStyles = makeStyles({
  root: {
    width: "100%",
    overflowX: "auto"
  },
  table: {
    minWidth: 650
  }
});

const DataTable = () => {
  const classes = useStyles();
  return (
    <Table className={classes.table} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell> Name</TableCell>
          <TableCell align="left">Category</TableCell>
          <TableCell align="left">Progress</TableCell>
          <TableCell align="left">Description</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map(row => (
          <TableRow key={row.name} style={{ background: progressColors[row.progress] }}>
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell align="left">{row.category}</TableCell>
            <TableCell align="left">{row.progress}</TableCell>
            <TableCell align="left">{row.description}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default DataTable;
