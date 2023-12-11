import { useFavoriteCities } from "../contexts/FavoriteCitiesContext";

export function FavoriteButton({ cityId }: { cityId: string }) {
  const { addFavoriteCity, favoriteCities, removeFavoriteCity } =
    useFavoriteCities();
  const isFavorite = favoriteCities.includes(cityId);
  const handleClick = () => {
    if (isFavorite) {
      removeFavoriteCity(cityId);
    } else {
      addFavoriteCity(cityId);
    }
  };
  return (
    <button className="p-2" onClick={handleClick}>
      {isFavorite ? "Remove Favorite" : "Add Favorite"}
    </button>
  );
}
