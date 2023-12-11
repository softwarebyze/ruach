import { useEffect, useState } from "react";
import {
  getCurrentConditions,
  CurrentConditions,
} from "../api/currentConditions";

export default function Weather({
  cityId,
  mock = true,
}: {
  cityId: string;
  mock?: boolean;
}) {
  const [conditions, setConditions] = useState<CurrentConditions | null>(null);
  useEffect(() => {
    getCurrentConditions(cityId, mock).then(setConditions);
  }, [cityId]);
  return <p>{conditions?.[0]?.WeatherText}</p>;
}
