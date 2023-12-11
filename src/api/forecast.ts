const mockForecast = {
  Headline: {
    EffectiveDate: "2023-12-13T13:00:00+08:00",
    EffectiveEpochDate: 1702443600,
    Severity: 3,
    Text: "Expect rainy weather Wednesday afternoon through Thursday morning",
    Category: "rain",
    EndDate: "2023-12-14T13:00:00+08:00",
    EndEpochDate: 1702530000,
    MobileLink:
      "http://www.accuweather.com/en/cn/fuyang/56914/daily-weather-forecast/56914?lang=en-us",
    Link: "http://www.accuweather.com/en/cn/fuyang/56914/daily-weather-forecast/56914?lang=en-us",
  },
  DailyForecasts: [
    {
      Date: "2023-12-11T07:00:00+08:00",
      EpochDate: 1702249200,
      Temperature: {
        Minimum: {
          Value: 28.0,
          Unit: "F",
          UnitType: 18,
        },
        Maximum: {
          Value: 36.0,
          Unit: "F",
          UnitType: 18,
        },
      },
      Day: {
        Icon: 7,
        IconPhrase: "Cloudy",
        HasPrecipitation: false,
        LocalSource: {
          Id: 7,
          Name: "Huafeng",
          WeatherCode: "02",
        },
      },
      Night: {
        Icon: 35,
        IconPhrase: "Partly cloudy",
        HasPrecipitation: false,
        LocalSource: {
          Id: 7,
          Name: "Huafeng",
          WeatherCode: "01",
        },
      },
      Sources: ["AccuWeather", "Huafeng"],
      MobileLink:
        "http://www.accuweather.com/en/cn/fuyang/56914/daily-weather-forecast/56914?day=1&lang=en-us",
      Link: "http://www.accuweather.com/en/cn/fuyang/56914/daily-weather-forecast/56914?day=1&lang=en-us",
    },
    {
      Date: "2023-12-12T07:00:00+08:00",
      EpochDate: 1702335600,
      Temperature: {
        Minimum: {
          Value: 30.0,
          Unit: "F",
          UnitType: 18,
        },
        Maximum: {
          Value: 43.0,
          Unit: "F",
          UnitType: 18,
        },
      },
      Day: {
        Icon: 3,
        IconPhrase: "Partly sunny",
        HasPrecipitation: false,
        LocalSource: {
          Id: 7,
          Name: "Huafeng",
          WeatherCode: "00",
        },
      },
      Night: {
        Icon: 38,
        IconPhrase: "Mostly cloudy",
        HasPrecipitation: false,
        LocalSource: {
          Id: 7,
          Name: "Huafeng",
          WeatherCode: "01",
        },
      },
      Sources: ["AccuWeather", "Huafeng"],
      MobileLink:
        "http://www.accuweather.com/en/cn/fuyang/56914/daily-weather-forecast/56914?day=2&lang=en-us",
      Link: "http://www.accuweather.com/en/cn/fuyang/56914/daily-weather-forecast/56914?day=2&lang=en-us",
    },
    {
      Date: "2023-12-13T07:00:00+08:00",
      EpochDate: 1702422000,
      Temperature: {
        Minimum: {
          Value: 36.0,
          Unit: "F",
          UnitType: 18,
        },
        Maximum: {
          Value: 39.0,
          Unit: "F",
          UnitType: 18,
        },
      },
      Day: {
        Icon: 12,
        IconPhrase: "Showers",
        HasPrecipitation: true,
        PrecipitationType: "Rain",
        PrecipitationIntensity: "Light",
        LocalSource: {
          Id: 7,
          Name: "Huafeng",
          WeatherCode: "07",
        },
      },
      Night: {
        Icon: 18,
        IconPhrase: "Rain",
        HasPrecipitation: true,
        PrecipitationType: "Rain",
        PrecipitationIntensity: "Light",
        LocalSource: {
          Id: 7,
          Name: "Huafeng",
          WeatherCode: "07",
        },
      },
      Sources: ["AccuWeather", "Huafeng"],
      MobileLink:
        "http://www.accuweather.com/en/cn/fuyang/56914/daily-weather-forecast/56914?day=3&lang=en-us",
      Link: "http://www.accuweather.com/en/cn/fuyang/56914/daily-weather-forecast/56914?day=3&lang=en-us",
    },
    {
      Date: "2023-12-14T07:00:00+08:00",
      EpochDate: 1702508400,
      Temperature: {
        Minimum: {
          Value: 32.0,
          Unit: "F",
          UnitType: 18,
        },
        Maximum: {
          Value: 43.0,
          Unit: "F",
          UnitType: 18,
        },
      },
      Day: {
        Icon: 12,
        IconPhrase: "Showers",
        HasPrecipitation: true,
        PrecipitationType: "Rain",
        PrecipitationIntensity: "Light",
        LocalSource: {
          Id: 7,
          Name: "Huafeng",
          WeatherCode: "08",
        },
      },
      Night: {
        Icon: 25,
        IconPhrase: "Sleet",
        HasPrecipitation: true,
        PrecipitationType: "Ice",
        PrecipitationIntensity: "Moderate",
        LocalSource: {
          Id: 7,
          Name: "Huafeng",
          WeatherCode: "06",
        },
      },
      Sources: ["AccuWeather", "Huafeng"],
      MobileLink:
        "http://www.accuweather.com/en/cn/fuyang/56914/daily-weather-forecast/56914?day=4&lang=en-us",
      Link: "http://www.accuweather.com/en/cn/fuyang/56914/daily-weather-forecast/56914?day=4&lang=en-us",
    },
    {
      Date: "2023-12-15T07:00:00+08:00",
      EpochDate: 1702594800,
      Temperature: {
        Minimum: {
          Value: 32.0,
          Unit: "F",
          UnitType: 18,
        },
        Maximum: {
          Value: 46.0,
          Unit: "F",
          UnitType: 18,
        },
      },
      Day: {
        Icon: 6,
        IconPhrase: "Mostly cloudy",
        HasPrecipitation: false,
        LocalSource: {
          Id: 7,
          Name: "Huafeng",
          WeatherCode: "01",
        },
      },
      Night: {
        Icon: 7,
        IconPhrase: "Cloudy",
        HasPrecipitation: false,
        LocalSource: {
          Id: 7,
          Name: "Huafeng",
          WeatherCode: "02",
        },
      },
      Sources: ["AccuWeather", "Huafeng"],
      MobileLink:
        "http://www.accuweather.com/en/cn/fuyang/56914/daily-weather-forecast/56914?day=5&lang=en-us",
      Link: "http://www.accuweather.com/en/cn/fuyang/56914/daily-weather-forecast/56914?day=5&lang=en-us",
    },
  ],
};

export type Forecast = typeof mockForecast;

export async function getForecast(locationKey: string, mock = true) {
  const forecastApiUrl =
    "http://dataservice.accuweather.com/forecasts/v1/daily/5day/";
  return mock
    ? mockForecast
    : fetch(
        `${forecastApiUrl}${locationKey}?apikey=${
          import.meta.env.VITE_WEATHER_API_KEY
        }`
      ).then((res) => res.json());
}
