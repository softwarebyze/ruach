import { useEffect, useState } from "react";
import {
  getCurrentConditions,
  CurrentConditions,
} from "../api/currentConditions";

export const useConditions = (cityId: string, mock: boolean) => {
  const [conditions, setConditions] = useState<CurrentConditions | null>(null);

  useEffect(() => {
    getCurrentConditions(cityId, mock).then(setConditions);
  }, []);

  return conditions;
};
