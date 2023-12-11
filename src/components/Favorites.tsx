import { useFavoriteCities } from "../contexts/FavoriteCitiesContext";

export function Favorites() {
  const { favoriteCities } = useFavoriteCities();
  return (
    <>
      <h2>Favorites</h2>
      <ul>
        {favoriteCities.map((city) => (
          <li key={city.cityId}>{city.name}</li>
        ))}
      </ul>
    </>
  );
}
