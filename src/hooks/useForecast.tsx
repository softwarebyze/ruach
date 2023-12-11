import { useEffect, useState } from "react";
import { Forecast, getForecast } from "../api/forecast";

export const useForecast = (cityId: string, mock: boolean) => {
  const [forecast, setForecast] = useState<Forecast | null>(null);

  useEffect(() => {
    getForecast(cityId, mock).then(setForecast);
  }, []);

  return forecast;
};
