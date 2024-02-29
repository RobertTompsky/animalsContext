import './App.css'
import { AnimalsList, PaginationBlock, SearchBlock } from "./components";

export default function App() {
  return (
    <div className="app">
      <SearchBlock />
      <PaginationBlock />
      <AnimalsList />
    </div>
  );
}
