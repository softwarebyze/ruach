const mockAutocompleteResults = [
  {
    Version: 1,
    Key: "353412",
    Type: "City",
    Rank: 10,
    LocalizedName: "Hanoi",
    Country: {
      ID: "VN",
      LocalizedName: "Vietnam",
    },
    AdministrativeArea: {
      ID: "HN",
      LocalizedName: "Hanoi",
    },
  },
  {
    Version: 1,
    Key: "102669",
    Type: "City",
    Rank: 11,
    LocalizedName: "Harbin",
    Country: {
      ID: "CN",
      LocalizedName: "China",
    },
    AdministrativeArea: {
      ID: "HL",
      LocalizedName: "Heilongjiang",
    },
  },
  {
    Version: 1,
    Key: "106832",
    Type: "City",
    Rank: 11,
    LocalizedName: "Hangzhou",
    Country: {
      ID: "CN",
      LocalizedName: "China",
    },
    AdministrativeArea: {
      ID: "ZJ",
      LocalizedName: "Zhejiang",
    },
  },
  {
    Version: 1,
    Key: "102325",
    Type: "City",
    Rank: 13,
    LocalizedName: "Handan",
    Country: {
      ID: "CN",
      LocalizedName: "China",
    },
    AdministrativeArea: {
      ID: "HE",
      LocalizedName: "Hebei",
    },
  },
  {
    Version: 1,
    Key: "60453",
    Type: "City",
    Rank: 13,
    LocalizedName: "Hanzhong",
    Country: {
      ID: "CN",
      LocalizedName: "China",
    },
    AdministrativeArea: {
      ID: "SN",
      LocalizedName: "Shaanxi",
    },
  },
  {
    Version: 1,
    Key: "57465",
    Type: "City",
    Rank: 15,
    LocalizedName: "Haidian District",
    Country: {
      ID: "CN",
      LocalizedName: "China",
    },
    AdministrativeArea: {
      ID: "BJ",
      LocalizedName: "Beijing",
    },
  },
  {
    Version: 1,
    Key: "122438",
    Type: "City",
    Rank: 20,
    LocalizedName: "Havana",
    Country: {
      ID: "CU",
      LocalizedName: "Cuba",
    },
    AdministrativeArea: {
      ID: "03",
      LocalizedName: "La Habana",
    },
  },
  {
    Version: 1,
    Key: "353558",
    Type: "City",
    Rank: 20,
    LocalizedName: "Harare",
    Country: {
      ID: "ZW",
      LocalizedName: "Zimbabwe",
    },
    AdministrativeArea: {
      ID: "HA",
      LocalizedName: "Harare",
    },
  },
  {
    Version: 1,
    Key: "58633",
    Type: "City",
    Rank: 21,
    LocalizedName: "Haikou",
    Country: {
      ID: "CN",
      LocalizedName: "China",
    },
    AdministrativeArea: {
      ID: "HI",
      LocalizedName: "Hainan",
    },
  },
  {
    Version: 1,
    Key: "178556",
    Type: "City",
    Rank: 21,
    LocalizedName: "Hamburg",
    Country: {
      ID: "DE",
      LocalizedName: "Germany",
    },
    AdministrativeArea: {
      ID: "HH",
      LocalizedName: "Hamburg",
    },
  },
];
export type AutocompleteResult = (typeof mockAutocompleteResults)[0];
export type AutocompleteResults = AutocompleteResult[];

export async function getAutocompleteLocations(
  query: string,
  mock = true
): Promise<typeof mockAutocompleteResults> {
  const autocompleteApiUrl =
    "https://dataservice.accuweather.com/locations/v1/cities/autocomplete";

  return !query
    ? []
    : mock
    ? mockAutocompleteResults.filter(
        (result) => result.LocalizedName.length > query.length
      )
    : fetch(
        `${autocompleteApiUrl}?apikey=${
          import.meta.env.VITE_WEATHER_API_KEY
        }&q=${query}`
      ).then((res) => res.json());
}
