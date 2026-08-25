"use client";

import { useState, useEffect } from "react";
import {
  fetchClientWeatherData,
  fallbackWeatherData,
  WeatherData,
} from "@/src/services/weather";

export default function WeatherBadge() {
  const [weather, setWeather] = useState<WeatherData>(fallbackWeatherData);

  useEffect(() => {
    fetchClientWeatherData().then((data) => {
      setWeather(data);
    });
  }, []);

  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-950/50 backdrop-blur-md border border-white/15 text-white/90 text-xs md:text-sm shadow-md">
      {/* Ícone dinâmico vindo da WeatherAPI */}
      <img
        src={`https:${weather.iconUrl}`}
        alt={weather.condition}
        className="w-6 h-6 object-contain"
      />
      <span>Natal, RN</span>
      <span className="text-white/40">•</span>
      <span>{weather.temp}°C</span>
      <span className="text-white/40">•</span>
      <span className="text-white/80">{weather.condition}</span>
    </div>
  );
}
