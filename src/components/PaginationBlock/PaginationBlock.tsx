import "./PaginationBlock.css";
import React from "react";
import { baseQuery } from "../../api";
import { useAppState } from "../../context";
import "./PaginationBlock.css";

export const PaginationBlock: React.FC = () => {
  const { setPage, setPerPage, totalAnimalsLength, perPage, page } =
    useAppState();

  const handlePerPageChange: React.ChangeEventHandler<HTMLSelectElement> = (
    e
  ) => {
    setPerPage(Number(e.target.value));
    setPage(1);
  };

  const handlePageChange = (direction: "prev" | "next"): void => {
    const totalPages: number = Math.ceil(totalAnimalsLength / perPage);
    if (direction === "prev" && page > 1) {
      setPage((prev) => prev - 1);
    } else if (direction === "next" && page < totalPages) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <div className="paginationBlock">
      <div className="perPage_block">
        <p>By page:</p>
        <select onChange={handlePerPageChange} defaultValue={baseQuery.limit}>
          <option value="2">2</option>
          <option value="4">{baseQuery.limit}</option>
          <option value="6">6</option>
        </select>
      </div>
      <div className="page_block">
        <button onClick={() => handlePageChange("prev")}>Назад</button>
        <p>{page}</p>
        <button onClick={() => handlePageChange("next")}>Вперед</button>
      </div>
    </div>
  );
};
