import { weatherTranslations } from "@/src/constants/weather-translations";

export interface WeatherData {
  temp: number;
  condition: string;
  iconUrl: string;
}

interface WeatherApiResponse {
  current: {
    temp_c: number;
    is_day: number;
    condition: {
      text: string;
      icon: string;
    };
  };
}

export async function getWeatherData(): Promise<WeatherData> {
  const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
  const city = "Natal";

  const fallbackData: WeatherData = {
    temp: 28,
    condition: "Ensolarado",
    iconUrl: "//cdn.weatherapi.com/weather/64x64/day/113.png",
  };

  if (!apiKey) return fallbackData;

  try {
    const res = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`,
      { next: { revalidate: 3600 } },
    );

    if (!res.ok) return fallbackData;

    const data: WeatherApiResponse = await res.json();

    const conditionText = data.current.condition.text;
    const isDay = data.current.is_day === 1;

    let iconUrl = data.current.condition.icon;

    if (!isDay) {
      iconUrl = iconUrl.replace("/day/", "/night/");
    }

    return {
      temp: Math.round(data.current.temp_c),
      condition: weatherTranslations[conditionText] || conditionText,
      iconUrl: iconUrl,
    };
  } catch {
    return fallbackData;
  }
}
