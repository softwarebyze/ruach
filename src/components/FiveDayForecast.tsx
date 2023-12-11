import { Forecast } from "../api/forecast";

export function FiveDayForecast({
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
