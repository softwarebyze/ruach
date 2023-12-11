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
  const [metric, setMetric] = useState(true);
  const temperatureUnit = metric ? "Metric" : "Imperial";

  useEffect(() => {
    getCurrentConditions(cityId, mock).then(setConditions);
  }, [cityId]);

  return !conditions ? (
    <p>null</p>
  ) : (
    <div className="border rounded-xl p-4 my-auto">
      <img
        src={`https://developer.accuweather.com/sites/default/files/${String(
          conditions[0].WeatherIcon
        ).padStart(2, "0")}-s.png`}
        alt={conditions[0].WeatherText}
      />
      <p>{cityData.LocalizedName}</p>
      <p onClick={() => setMetric((prevMetric) => !prevMetric)}>
        {`${conditions[0].Temperature[temperatureUnit].Value}° ${conditions[0].Temperature[temperatureUnit].Unit}`}
      </p>
      <p>{conditions[0].WeatherText}</p>
    </div>
  );
}
