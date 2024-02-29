import React from "react";
import { useAppState } from "../../context";
import "./SearchBlock.css";

export const SearchBlock: React.FC = () => {
  const {
    amountFilter,
    animalFilter,
    setAmountFilter,
    setAnimalFilter,
    setPage,
  } = useAppState();
  return (
    <div className="searchBlock">
      <input
        placeholder="Animal"
        value={animalFilter}
        onChange={(e) => {
          setAnimalFilter(e.target.value);
          setPage(1);
        }}
      />
      <input
        placeholder="Amount"
        value={amountFilter}
        onChange={(e) => {
          setAmountFilter(e.target.value);
          setPage(1);
        }}
      />
    </div>
  );
};
