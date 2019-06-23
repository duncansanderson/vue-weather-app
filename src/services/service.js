import axios from 'axios'
import { LOCATION_BASE_URL, WEATHER_BASE_URL, WEATHER_URL_OPTIONS } from '@/constants'

export default {
    getLocation(coords) {
        const [latitude, longitude] = coords
        
        return axios
            .create({
                baseURL: `${LOCATION_BASE_URL}&latlng=${latitude},${longitude}`,
                withCredentials: false,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .get()
    },
    getWeather(coords) {
        const [latitude, longitude] = coords
        
        return axios
            .create({
                baseURL: `${WEATHER_BASE_URL}${latitude},${longitude}${WEATHER_URL_OPTIONS}`,
                withCredentials: false,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .get()
    }
}