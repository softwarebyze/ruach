import { useState } from "react";
import { Conditions } from "./Conditions";
import { FavoriteButton } from "./FavoriteButton";
import { FiveDayForecast } from "./FiveDayForecast";
import { useConditions } from "../hooks/useConditions";
import { useForecast } from "../hooks/useForecast";
import { City } from "../contexts/FavoriteCitiesContext";

export default function Weather({
  city,
  mock = true,
}: {
  city: City;
  mock?: boolean;
}) {
  const [metric, setMetric] = useState(true);
  const temperatureUnit = metric ? "Metric" : "Imperial";

  const conditions = useConditions(city.cityId, mock);
  const forecast = useForecast(city.cityId, mock);

  return !conditions ? (
    <p>null</p>
  ) : (
    <div className="border rounded-md">
      <div className="flex justify-between">
        <Conditions
          conditions={conditions}
          city={city}
          temperatureUnit={temperatureUnit}
          setMetric={setMetric}
        />
        <FavoriteButton city={city} />
      </div>
      <p className="text-5xl m-12">{conditions[0].WeatherText}</p>

      <FiveDayForecast forecast={forecast} temperatureUnit={temperatureUnit} />
    </div>
  );
}
