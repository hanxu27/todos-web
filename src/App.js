import React, { useState } from "react";
import AppBar from "./components/AppBar";
import DataTable from "./components/DataTable";

export default function App() {
  const [filter, setFilter] = useState(4);
  const [sort, setSort] = useState(0);
  const handleFilter = (filter, filterTerms) => {
    if (filter === filterTerms.length - 1) setFilter(0);
    else setFilter(filter + 1);
  };
  const handleSort = (sort, sortTerms) => {
    if (sort === sortTerms.length - 1) setSort(0);
    else setSort(sort + 1);
  };
  return (
    <div>
      <AppBar handleFilter={handleFilter} handleSort={handleSort} filter={filter} sort={sort} />
      <DataTable filter={filter} sort={sort} />
    </div>
  );
}
