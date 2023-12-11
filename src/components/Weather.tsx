import { useEffect, useState } from "react";
import {
  getCurrentConditions,
  CurrentConditions,
} from "../api/currentConditions";
import { AutocompleteResult } from "../api/autocomplete";

export default function Weather({
  cityId,
  cityData,
  mock = true,
}: {
  cityId: string;
  cityData: AutocompleteResult;
  mock?: boolean;
}) {
  const [conditions, setConditions] = useState<CurrentConditions | null>(null);
  useEffect(() => {
    getCurrentConditions(cityId, mock).then(setConditions);
  }, [cityId]);
  return (
    <div className="border rounded-xl p-4 my-auto">
      <p>{cityData.LocalizedName}</p>
      <p>{conditions?.[0]?.WeatherText}</p>
    </div>
  );
}
