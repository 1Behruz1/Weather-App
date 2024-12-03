import React, { useState } from "react";
import { GoSearch } from "react-icons/go";
import { BiCurrentLocation } from "react-icons/bi";
import "./Header.css";

export default function Header({ onSearch, onCurrentLocation }) {
  const [cityName, setCityName] = useState("");

  const handleSearch = () => {
    if (cityName.trim() !== "") {
      onSearch(cityName);
    }
  };

  return (
    <div className="header">
      <div className="container">
        <div className="header__inner">
          <h2 className="header__inner-logo">Weather</h2>
          <div className="header__inner-box">
            <input
              className="header__inner-box-input"
              type="search"
              placeholder="Enter city name"
              value={cityName}
              onChange={(e) => setCityName(e.target.value)}
            />
            <button
              className="header__inner-box-button-search"
              onClick={handleSearch}
            >
              <GoSearch /> <p>Search</p>
            </button>
            <button
              className="header__inner-box-button-location"
              onClick={onCurrentLocation}
            >
              <BiCurrentLocation /> <p>Current Location</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
