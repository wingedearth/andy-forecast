import React from 'react';
import { number, object } from 'prop-types';
import { format, fromUnixTime } from 'date-fns';
import './WeatherResult.scss';

// convert and format raw date
const getPrettyDate = (myDate) => format(myDate, 'MMMM do, yyyy');

/**
 * @function WeatherResult
 * @param {String} rawDate - date string
 * @param {Number} resultIndex
 * @param {Object} tempData
 * @param {Object} weather
 * @returns {React.ReactElement}
 */
const WeatherResult = ({ rawDate, resultIndex, tempData, weather }) => {
  // Open Weather Map weather conditions doc: https://openweathermap.org/weather-conditions
  const weatherText = weather?.description || '';

  // Open Weather Map hosts the weather icons referenced in their data
  const weatherIcon = `http://openweathermap.org/img/wn/${weather?.icon}@2x.png`;

  const myDate = fromUnixTime(rawDate);
  const prettyDate = getPrettyDate(myDate);
  const day = format(myDate, 'EEEE');
  console.log('day:', day);

  // reverse each color class by index to alternate bg color
  const reverseColorsClass = resultIndex % 2 === 1 ? 'weather-result--reverse' : '';

  return (
    <div className={`weather-result container ${reverseColorsClass}`}>
      <p>{day}</p>
      <p>{prettyDate}</p>

      <div className="weather-result__forecast">
        <img className="weather-result__icon" src={weatherIcon} />
        <div className="weather-result__details">
          {resultIndex === 0 && <p className="weather-result__current">{tempData?.temp}°F</p>}
          <p className="weather-result__description">{weatherText}</p>
          <p>High: {tempData?.temp_max}°F</p>
          <p>Low: {tempData?.temp_min}°F</p>
        </div>
      </div>
    </div>
  );
};

WeatherResult.propTypes = {
  rawDate: number.isRequired,
  resultIndex: number.isRequired,
  tempData: object.isRequired,
  weather: object.isRequired
};

export default WeatherResult;
