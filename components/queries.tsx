import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useGetWeather = () => {
  const queryInfo = useQuery({
    queryFn: async ({ signal }) => {
      const response = await axios.get<Weather>(
        `https://api.openweathermap.org/data/2.5/weather?q=${process.env.EXPO_PUBLIC_CITY_NAME}&appid=${process.env.EXPO_PUBLIC_OPEN_WEATHER_API_KEY}&units=metric`,
        { signal }
      );

      return response.data;
    },
    queryKey: ['home', 'weather']
  });

  return queryInfo;
};

export type Weather = {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
};
