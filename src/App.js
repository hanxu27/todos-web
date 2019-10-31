import React, { useState } from "react";
import AppBar from "./components/AppBar";
import DataTable from "./components/DataTable";
import MyModal from "./components/Modal";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [filter, setFilter] = useState(4);
  const [sort, setSort] = useState(0);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

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
      <MyModal
        showModal={showModal}
        setShowModal={setShowModal}
        handleModalClose={handleModalClose}
        handleModalOpen={handleModalOpen}
      />
      <AppBar
        handleFilter={handleFilter}
        handleSort={handleSort}
        filter={filter}
        sort={sort}
        handleModalOpen={handleModalOpen}
      />
      <DataTable filter={filter} sort={sort} />
    </div>
  );
}
