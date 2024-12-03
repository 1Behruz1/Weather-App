import React from 'react'

const ForecastItem = ({data}) => {
    const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    const forecastData = {
        deg: data?.main.temp,
        date: new Date(data?.dt*1000).getDate(),
        month: new Date(data?.dt*1000).getDate(),
        day: (new Date(data?.dt*1000)).getDay() - 1 != '-1' ? weekDays[(new Date(data?.dt*1000)).getDay() -1] : 'Sunday',
        icon: data?.weather[0].icon,
        month: monthNames[(new Date(data?.dt*1000)).getMonth()]
    }
  return (
    <li className="sidebar__forecast-item">
              <img
                src={`https://openweathermap.org/img/wn/${forecastData.icon}@2x.png`}
                alt="Weather Icon"

              />
              <h3>{forecastData.deg} &deg;C</h3>
              <p>{forecastData.date} {forecastData?.month?.slice(0, 3)}</p>
              <p>{forecastData.day}</p>
            </li>
  )
}

export default ForecastItem