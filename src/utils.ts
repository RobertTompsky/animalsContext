import { Animal, Query, requestAnimals } from "./api";

export const fetchData = async (
  filterParams: Query,
  setAnimals: (value: React.SetStateAction<Animal[]>) => void,
  setError: (value: React.SetStateAction<string | null>) => void,
  setLoading: (value: React.SetStateAction<boolean>) => void
): Promise<void> => {
  setLoading(true);
  try {
    const data = await requestAnimals(filterParams);
    setAnimals(data);
    setError(null);
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : "Неизвестная ошибка";
    setAnimals([]);
    setError(errorMessage);
  } finally {
    setLoading(false);
  }
};

export const fetchTotalAnimals = async (
  setTotalAnimalsLength: (value: React.SetStateAction<number>) => void,
  setError: (value: React.SetStateAction<string | null>) => void,
  setLoading: (value: React.SetStateAction<boolean>) => void
): Promise<void> => {
  setLoading(true);
  try {
    const data = await requestAnimals({
      animal: "",
      amount: "",
      limit: 100,
      offset: 0,
    });
    setTotalAnimalsLength(data.length);
    setError(null);
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : "Неизвестная ошибка";
    setTotalAnimalsLength(0);
    setError(errorMessage);
  } finally {
    setLoading(false);
  }
};
