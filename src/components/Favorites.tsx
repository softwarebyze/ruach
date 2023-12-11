import { City, useFavoriteCities } from "../contexts/FavoriteCitiesContext";
import { useConditions } from "../hooks/useConditions";
import { Conditions } from "./Conditions";

export function Favorites() {
  const { favoriteCities } = useFavoriteCities();
  return (
    <>
      <ul className="gap-3 flex-col flex sm:flex-row">
        {favoriteCities.map((city) => FavoriteCity(city))}
      </ul>
    </>
  );
}
function FavoriteCity(city: City) {
  const conditions = useConditions(city.cityId, true);

  return (
    <li className="border p-3" key={city.cityId}>
      {conditions && <Conditions conditions={conditions} city={city} />}
      <p className="my-20">{conditions ? conditions[0].WeatherText : ""}</p>
    </li>
  );
}
