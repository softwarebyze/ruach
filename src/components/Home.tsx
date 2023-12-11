import { useSearchParams } from "react-router-dom";
import {
  AutocompleteResults,
  getAutocompleteLocations,
} from "../api/autocomplete";
import { useState } from "react";
import Weather from "./Weather";
import { City } from "../contexts/FavoriteCitiesContext";

const mockApi = true;

export function SearchInput({
  handleSearch,
  currentQuery,
}: {
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  currentQuery: string;
}) {
  return (
    <input
      className="p-2 rounded-xl"
      type="search"
      placeholder="Search for a city"
      onChange={handleSearch}
      value={currentQuery}
    />
  );
}

export function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [autocompleteResults, setAutocompleteResults] =
    useState<AutocompleteResults>([]);
  const currentQuery = searchParams.get("q") ?? "";
  const currentCityId = searchParams.get("cityId") ?? "";
  const [city, setCity] = useState<City | null>(null);

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.currentTarget.value;
    setSearchParams((params) => {
      params.set("q", query);
      return params;
    });
    const results = await getAutocompleteLocations(query, mockApi);
    setAutocompleteResults(results);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <SearchInput handleSearch={handleSearch} currentQuery={currentQuery} />
      <ul className="rounded-md p-1 space-y-1">
        {autocompleteResults.map((result) => (
          <li
            className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-500
             cursor-pointer rounded-md"
            key={result.Key}
            onClick={() => {
              setAutocompleteResults([]);
              setSearchParams((params) => {
                params.set("cityId", result.Key);
                return params;
              });
              setCity({ name: result.LocalizedName, cityId: result.Key });
            }}
          >
            {result.LocalizedName}
          </li>
        ))}
      </ul>
      {currentCityId && city && <Weather city={city} mock={mockApi} />}
    </div>
  );
}
