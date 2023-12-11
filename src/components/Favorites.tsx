import { City, useFavoriteCities } from "../contexts/FavoriteCitiesContext";
import { useConditions } from "../hooks/useConditions";

export function Favorites() {
  const { favoriteCities } = useFavoriteCities();
  return (
    <>
      <h2>Favorites</h2>
      <ul>{favoriteCities.map((city) => FavoriteCity(city))}</ul>
    </>
  );
}
function FavoriteCity(city: City) {
  const conditions = useConditions(city.cityId, true);

  return (
    <li className="border p-3" key={city.cityId}>
      <p>{city.name}</p>
      <p>{conditions ? conditions[0].WeatherText : ""}</p>
    </li>
  );
}
