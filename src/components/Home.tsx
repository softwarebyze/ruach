import { Link, useSearchParams } from "react-router-dom";
import {
  AutocompleteResults,
  getAutocompleteLocations,
} from "../api/autocomplete";
import { useState } from "react";
import Weather from "./Weather";

export function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [autocompleteResults, setAutocompleteResults] =
    useState<AutocompleteResults>([]);
  const currentQuery = searchParams.get("q") ?? "";
  const currentCityId = searchParams.get("cityId") ?? "";
  const mockApi = true;

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.currentTarget.value;
    setSearchParams((prevSearchParams) => ({ ...prevSearchParams, q: query }));
    const results = await getAutocompleteLocations(query, mockApi);
    console.log(results);
    setAutocompleteResults(results);
  };

  return (
    <>
      <input
        className="p-2 rounded-xl"
        type="search"
        placeholder="Search for a city"
        onChange={handleSearch}
        value={currentQuery}
      />
      <div className="rounded-md p-1 space-y-1">
        {autocompleteResults.map((result) => (
          <Link
            className="block px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-md"
            to={`?cityId=${result.Key}`}
            key={result.Key}
            onClick={() => setAutocompleteResults([])}
          >
            {result.LocalizedName}
          </Link>
        ))}
      </div>
      <Weather cityId={currentCityId} mock={mockApi} />
    </>
  );
}
