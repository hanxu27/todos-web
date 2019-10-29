import React, { useState } from "react";
import AppBar from "./components/AppBar";
import DataTable from "./components/DataTable";

export default function App() {
  const [filter, setFilter] = useState(4);
  const [sortTerm, setSortTerm] = useState("progress");
  const handleFilter = filter => {
    if (filter === 4) setFilter(0);
    else setFilter(filter + 1);
  };
  return (
    <div>
      <AppBar
        handleFilter={handleFilter}
        setSortTerm={setSortTerm}
        filter={filter}
        sortTerm={sortTerm}
      />
      <DataTable filter={filter} sortTerm={sortTerm} />
    </div>
  );
}
