import { City, useFavoriteCities } from "../contexts/FavoriteCitiesContext";

export function FavoriteButton({ city }: { city: City }) {
  const { addFavoriteCity, removeFavoriteCity, isFavorite } =
    useFavoriteCities();
  const isFavoriteCity = isFavorite(city);
  const handleClick = () => {
    if (isFavoriteCity) {
      removeFavoriteCity(city);
    } else {
      addFavoriteCity(city);
    }
  };
  return (
    <button className="p-2" onClick={handleClick}>
      {isFavoriteCity ? "Remove Favorite" : "Add Favorite"}
    </button>
  );
}
