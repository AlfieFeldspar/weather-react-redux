import axios from 'axios';

const API_KEY = '1223294114fb8930caf177ea3451f02c';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER'; //a convention to write actions in caps and set to variable

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us&units=imperial`;
  const request = axios.get(url); //a promise

  console.log('Request', request); //'promise'

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}