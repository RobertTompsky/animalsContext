import React, { useEffect } from "react";
import { useAppState } from "../../context";
import { fetchData, fetchTotalAnimals } from "../../utils";
import "./AnimalsList.css";

export const AnimalsList: React.FC = () => {
  const {
    animals,
    setAnimals,
    loading,
    error,
    animalFilter,
    amountFilter,
    page,
    perPage,
    setTotalAnimalsLength,
    setError,
    setLoading,
  } = useAppState();

  useEffect(() => {
    fetchData(
      {
        animal: animalFilter,
        amount: amountFilter,
        limit: perPage,
        offset: page > 1 ? (page - 1) * perPage : 0,
      },
      setAnimals,
      setError,
      setLoading
    );
    fetchTotalAnimals(setTotalAnimalsLength, setError, setLoading);
  }, [animalFilter, amountFilter, page, perPage]);
  return (
    <div className="list">
      <h3>Результаты поиска</h3>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <ul className="ul">
          {" "}
          {animals.length < 1 ? (
            <div>Результаты по запросу не найдены</div>
          ) : (
            animals.map((animal) => (
              <li key={animal.id} className="li">
                {" "}
                {animal.animal}, {animal.amount}{" "}
              </li>
            ))
          )}{" "}
        </ul>
      )}
    </div>
  );
};