import React, { useEffect, useState } from "react";
import Header from "../../componnents/Header/Header";
import SideBar from "../../componnents/Sidebar/Sidebar";
import axios from "axios";

const Home = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [air, setAir] = useState(null);

  const API = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5/",
  });
  const API_KEY = "a0397a8aa6e8887e69e641f3b7f23484";

  const fetchData = async (city_name) => {
    try {
      const weatherResponse = await API.get(
        `weather?q=${city_name}&appid=${API_KEY}&units=metric`
      );
      setCurrentWeather(weatherResponse.data);

      const forecastResponse = await API.get(
        `forecast?q=${city_name}&appid=${API_KEY}&units=metric`
      );
      setForecast(forecastResponse.data);

      if (
        weatherResponse.data?.coord?.lat &&
        weatherResponse.data?.coord?.lon
      ) {
        const airResponse = await API.get(
          `air_pollution?lat=${weatherResponse.data.coord.lat}&lon=${weatherResponse.data.coord.lon}&appid=${API_KEY}`
        );
        setAir(airResponse.data);
      }
    } catch (error) {
      console.error("API çağrısında hata oluştu:", error);
    }
  };

  const fetchDataByCoords = async (lat, lon) => {
    try {
      const weatherResponse = await API.get(
        `weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      );
      setCurrentWeather(weatherResponse.data);

      const forecastResponse = await API.get(
        `forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      );
      setForecast(forecastResponse.data);

      const airResponse = await API.get(
        `air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`
      );
      setAir(airResponse.data);
    } catch (error) {
      console.error("API topilmadi", error);
    }
  };

  const handleCurrentLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchDataByCoords(latitude, longitude);
        },
        (error) => {
          console.error("Joyin topilmadi", error);
        }
      );
    } else {
      console.error("Ruxsat berilmapdi");
    }
  };

  useEffect(() => {
    fetchData("Tashkent");
  }, []);

  return (
    <>
      <Header
        onSearch={(cityName) => fetchData(cityName)}
        onCurrentLocation={handleCurrentLocation}
      />
      <SideBar air={air} currentWeather={currentWeather} forecast={forecast} />
    </>
  );
};

export default Home;
