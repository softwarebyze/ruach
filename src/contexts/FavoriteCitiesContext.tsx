import { createContext, useContext, useReducer, ReactNode } from "react";

export type City = {
  name: string;
  cityId: string;
};

interface FavoriteCitiesContext {
  favoriteCities: City[];
  addFavoriteCity: (city: City) => void;
  removeFavoriteCity: (city: City) => void;
  isFavorite: (city: City) => boolean;
}

const FavoriteCitiesContext = createContext<FavoriteCitiesContext | undefined>(
  undefined
);

const initialFavoriteCities: City[] = [
  {
    cityId: "102669",
    name: "Harbin",
  },
  {
    cityId: "106832",
    name: "Hangzhou",
  },
  {
    cityId: "122438",
    name: "Havana",
  },
];

type Action = { type: "add" | "remove" | "isFavorite"; city: City };

const favoriteCitiesReducer = (state: City[], action: Action): City[] => {
  switch (action.type) {
    case "add":
      return [...state, action.city];
    case "remove":
      return state.filter(({ cityId }) => cityId !== action.city.cityId);
    case "isFavorite":
      return state.filter(({ cityId }) => cityId === action.city.cityId);
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

  const addFavoriteCity = (city: City): void => dispatch({ type: "add", city });
  const removeFavoriteCity = (city: City): void =>
    dispatch({ type: "remove", city });
  const isFavorite = (city: City): boolean =>
    !!favoriteCities.find(({ cityId }) => cityId === city.cityId);

  const contextValue: FavoriteCitiesContext = {
    favoriteCities,
    addFavoriteCity,
    removeFavoriteCity,
    isFavorite,
  };

  return (
    <FavoriteCitiesContext.Provider value={contextValue}>
      {children}
    </FavoriteCitiesContext.Provider>
  );
};
