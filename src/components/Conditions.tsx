import { CurrentConditions } from "../api/currentConditions";
import { City } from "../contexts/FavoriteCitiesContext";

export function Conditions({
  conditions,
  city,
  temperatureUnit,
  setMetric,
}: {
  conditions: CurrentConditions;
  city: City;
  temperatureUnit: "Metric" | "Imperial";
  setMetric: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="flex p-2 gap-2">
      <img
        src={`https://developer.accuweather.com/sites/default/files/${String(
          conditions[0].WeatherIcon
        ).padStart(2, "0")}-s.png`}
        alt={conditions[0].WeatherText}
      />
      <div className="text-left">
        <p>{city.name}</p>
        <p onClick={() => setMetric((prevMetric) => !prevMetric)}>
          {`${conditions[0].Temperature[temperatureUnit].Value}° ${conditions[0].Temperature[temperatureUnit].Unit}`}
        </p>
      </div>
    </div>
  );
}
