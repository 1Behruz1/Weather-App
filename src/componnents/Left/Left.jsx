import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { IoCalendarClearOutline } from "react-icons/io5";
import './Left.css'
import ForecastItem from '../ForecastItem/ForecastItem';
const Left = ({forecast, currentWeather}) => {
  const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
 
  const date = {
      deg: currentWeather?.main.temp,
      date: new Date(currentWeather?.dt*1000).getDate(),
      month: new Date(currentWeather?.dt*1000).getDate(),
      day: (new Date(currentWeather?.dt*1000)).getDay() - 1 != '-1' ? weekDays[(new Date(currentWeather?.dt*1000)).getDay() -1] : 'Sunday',
      icon: currentWeather?.weather[0].icon,
      month: monthNames[(new Date(currentWeather?.dt*1000)).getMonth()],
      year: (new Date(currentWeather?.dt*1000)).getFullYear(),
      description: currentWeather?.weather[0].description

  }
  return (
    <div className="sidebar__box">
      <div className="sidebar__current">
        <h3 className="sidebar__current-title">Now</h3>
        <div className="sidebar__current-temp">
          <h2>{date.deg} &deg;C</h2>
          <img
            src={`https://openweathermap.org/img/wn/${date.icon}@2x.png`}
            alt="Current Weather"
          />
        </div>
        <div className="sidebar__current-weather">
          <p>{date.description}</p>
        </div>
        <div className="sidebar__current-info">
          <ul>
            <li className="sidebar__current-date">
              <IoCalendarClearOutline />
              <p>{date.day}, {date.date}, {date?.month?.slice(0 ,3)} {date.year}</p>
            </li>
            <li className="sidebar__current-location">
              <CiLocationOn />
              <p>{currentWeather?.name}, {currentWeather?.sys.country}</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="sidebar__forecast">
        <h2 className="sidebar__forecast-title">5 days Forecast</h2>
        <ul className="sidebar__forecast-list">
            <ForecastItem data={forecast?.list[7]}/>
            <ForecastItem data={forecast?.list[15]}/>
            <ForecastItem data={forecast?.list[23]}/>
            <ForecastItem data={forecast?.list[31]}/>
            <ForecastItem data={forecast?.list[39]}/>
        </ul>
      </div>
      </div>
  )
}

export default Left