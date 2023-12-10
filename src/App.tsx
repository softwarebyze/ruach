import "./App.css";
import { getAutocompleteLocations } from "./api/autocomplete";
import { Nav } from "./components/Nav";

function App() {
  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.currentTarget.value;
    const results = await getAutocompleteLocations(query, true);
    console.log(results);
  };
  return (
    <>
      <Nav />
      <div>
        <nav></nav>
        <h1 className="mb-9">Weather</h1>
        <input
          className="p-2 rounded-xl"
          type="search"
          placeholder="Search for a city"
          onChange={handleSearch}
        />
      </div>
    </>
  );
}

export default App;
