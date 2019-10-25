import React, { useState } from "react";
import AppBar from "./components/AppBar";
import DataTable from "./components/DataTable";

export default function App() {
  const [filter, setFilter] = useState(4);
  const [sortTerm, setSortTerm] = useState("progress");
  return (
    <div>
      <AppBar setFilter={setFilter} setSortTerm={setSortTerm} filter={filter} sortTerm={sortTerm} />
      <DataTable filter={filter} sortTerm={sortTerm} />
    </div>
  );
}
