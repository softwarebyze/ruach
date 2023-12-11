const mockCurrentConditions = [
  {
    LocalObservationDateTime: "2023-12-11T06:52:00+07:00",
    EpochTime: 1702252320,
    WeatherText: "Cloudy",
    WeatherIcon: 7,
    HasPrecipitation: false,
    PrecipitationType: null,
    IsDayTime: true,
    Temperature: {
      Metric: {
        Value: 23.3,
        Unit: "C",
        UnitType: 17,
      },
      Imperial: {
        Value: 74,
        Unit: "F",
        UnitType: 18,
      },
    },
    MobileLink:
      "http://www.accuweather.com/en/vn/hanoi/353412/current-weather/353412?lang=en-us",
    Link: "http://www.accuweather.com/en/vn/hanoi/353412/current-weather/353412?lang=en-us",
  },
];
export type CurrentConditions = typeof mockCurrentConditions;

export async function getCurrentConditions(locationKey: string, mock = true) {
  const currentConditionsApiUrl =
    "https://dataservice.accuweather.com/currentconditions/v1/";
  return mock
    ? mockCurrentConditions
    : fetch(
        `${currentConditionsApiUrl}${locationKey}?apikey=${
          import.meta.env.VITE_WEATHER_API_KEY
        }`
      ).then((res) => res.json());
}
