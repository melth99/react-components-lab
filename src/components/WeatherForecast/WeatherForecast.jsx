import React from 'react';
import './WeatherForecast.css'
import {WeatherForecasts} from '../../App.jsx'


function DayOfWeek() {
    return (
        <>
      {WeatherForecasts.map((day) => (
        <div className="weather" key={day.time}>
          <h2>{day.day}</h2>
          <img src={day.img} alt={day.imgAlt} />
          <p><span>conditions: </span>{day.conditions}</p>
          <p><span>time: </span>{day.time}</p>
        </div>
      ))}
    </>
  );
}

export default function WeatherForecast() {
    return (
        <section>
            <h1>!!</h1>
            <DayOfWeek/>
        </section>
    )
}

