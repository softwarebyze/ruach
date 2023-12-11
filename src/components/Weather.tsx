import { useState } from "react";
import { AutocompleteResult } from "../api/autocomplete";
import { Conditions } from "./Conditions";
import { FavoriteButton } from "./FavoriteButton";
import { FiveDayForecast } from "./FiveDayForecast";
import { useConditions } from "../hooks/useConditions";
import { useForecast } from "../hooks/useForecast";

export default function Weather({
  cityId,
  cityData,
  mock = true,
}: {
  cityId: string;
  cityData: AutocompleteResult;
  mock?: boolean;
}) {
  const [metric, setMetric] = useState(true);
  const temperatureUnit = metric ? "Metric" : "Imperial";

  const conditions = useConditions(cityId, mock);
  const forecast = useForecast(cityId, mock);

  return !conditions ? (
    <p>null</p>
  ) : (
    <div className="border rounded-md">
      <div className="flex justify-between">
        <Conditions
          conditions={conditions}
          cityData={cityData}
          temperatureUnit={temperatureUnit}
          setMetric={setMetric}
        />
        <FavoriteButton cityId={cityId} />
      </div>
      <p className="text-5xl m-12">{conditions[0].WeatherText}</p>

      <FiveDayForecast forecast={forecast} temperatureUnit={temperatureUnit} />
    </div>
  );
}
