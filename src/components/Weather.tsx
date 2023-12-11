import { useEffect, useState } from "react";
import {
  getCurrentConditions,
  CurrentConditions,
} from "../api/currentConditions";
import { AutocompleteResult } from "../api/autocomplete";
import { Forecast, getForecast } from "../api/forecast";
import { Conditions } from "./Conditions";
import { FavoriteButton } from "./FavoriteButton";

function Forecast({
  forecast,
  temperatureUnit,
}: {
  forecast: Forecast | null;
  temperatureUnit: "Metric" | "Imperial";
}) {
  return (
    <div className="flex flex-col sm:flex-row gap-2 flex-wrap items-center">
      {forecast?.DailyForecasts.map((day) => (
        <div key={day.Date} className="border rounded-xl p-4 my-auto">
          <p>
            {new Date(day.Date)
              .toLocaleDateString("en-US", {
                weekday: "long",
              })
              .slice(0, 3)}
          </p>
          <p className="whitespace-nowrap">
            {`${(
              (day.Temperature.Minimum.Value + day.Temperature.Maximum.Value) /
              2
            ).toFixed(0)}° ${day.Temperature.Minimum.Unit}`}
          </p>
        </div>
      ))}
    </div>
  );
}

const useConditions = (cityId: string, mock: boolean) => {
  const [conditions, setConditions] = useState<CurrentConditions | null>(null);

  useEffect(() => {
    getCurrentConditions(cityId, mock).then(setConditions);
  }, [cityId]);

  return conditions;
};

const useForecast = (cityId: string, mock: boolean) => {
  const [forecast, setForecast] = useState<Forecast | null>(null);

  useEffect(() => {
    getForecast(cityId, mock).then(setForecast);
  }, [cityId]);

  return forecast;
};

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

      <Forecast forecast={forecast} temperatureUnit={temperatureUnit} />
    </div>
  );
}
