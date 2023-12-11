import { createContext, useContext, useReducer, ReactNode } from "react";

interface FavoriteCitiesContext {
  favoriteCities: string[];
  addFavoriteCity: (cityId: string) => void;
  removeFavoriteCity: (cityId: string) => void;
}

const FavoriteCitiesContext = createContext<
  FavoriteCitiesContext | undefined
>(undefined);

const initialFavoriteCities: string[] = [];

type Action = { type: "add" | "remove"; cityId: string };

const favoriteCitiesReducer = (state: string[], action: Action): string[] => {
  switch (action.type) {
    case "add":
      return [...state, action.cityId];
    case "remove":
      return state.filter((cityId) => cityId !== action.cityId);
    default:
      return state;
  }
};

export const useFavoriteCities = (): FavoriteCitiesContext => {
  const context = useContext(FavoriteCitiesContext);
  if (!context) {
    throw new Error(
      "useFavoriteCities must be used within a FavoriteCitiesProvider"
    );
  }
  return context;
};

interface FavoriteCitiesProviderProps {
  children: ReactNode;
}

export const FavoriteCitiesProvider: React.FC<FavoriteCitiesProviderProps> = ({
  children,
}) => {
  const [favoriteCities, dispatch] = useReducer(
    favoriteCitiesReducer,
    initialFavoriteCities
  );

  const addFavoriteCity = (cityId: string): void =>
    dispatch({ type: "add", cityId });
  const removeFavoriteCity = (cityId: string): void =>
    dispatch({ type: "remove", cityId });

  const contextValue: FavoriteCitiesContext = {
    favoriteCities,
    addFavoriteCity,
    removeFavoriteCity,
  };

  return (
    <FavoriteCitiesContext.Provider value={contextValue}>
      {children}
    </FavoriteCitiesContext.Provider>
  );
};
