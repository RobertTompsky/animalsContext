import React, { createContext, useContext, useState } from "react";
import { Animal, baseQuery } from "./api";

interface AppState {
  animals: Animal[];
  setAnimals: React.Dispatch<React.SetStateAction<Animal[]>>;
  totalAnimalsLength: number;
  setTotalAnimalsLength: React.Dispatch<React.SetStateAction<number>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  error: string | null;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  animalFilter: string;
  setAnimalFilter: React.Dispatch<React.SetStateAction<string>>;
  amountFilter: string;
  setAmountFilter: React.Dispatch<React.SetStateAction<string>>;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  perPage: number;
  setPerPage: React.Dispatch<React.SetStateAction<number>>;
}

const AppStateContext = createContext({} as AppState);

export const useAppState = () => {
  const context = useContext(AppStateContext);
  return context;
};

export const AppStateProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [totalAnimalsLength, setTotalAnimalsLength] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [animalFilter, setAnimalFilter] = useState<string>("");
  const [amountFilter, setAmountFilter] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(baseQuery.limit);

  return (
    <AppStateContext.Provider
      value={{
        animals,
        setAnimals,
        totalAnimalsLength,
        setTotalAnimalsLength,
        loading,
        setLoading,
        error,
        setError,
        animalFilter,
        setAnimalFilter,
        amountFilter,
        setAmountFilter,
        page,
        setPage,
        perPage,
        setPerPage,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};
