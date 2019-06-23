import axios from 'axios'
import { LOCATION_BASE_URL } from '@/constants'

export default {
    getLocation(coords) {
        const [latitude, longitude] = coords;
        console.log(`${LOCATION_BASE_URL}&latlng=${latitude},${longitude}`)
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
    }
}