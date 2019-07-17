const LOCATION_API_KEY = process.env.VUE_APP_GEOCODE_API_KEY
const LOCATION_BASE_URL = `https://maps.googleapis.com/maps/api/geocode/json?key=${LOCATION_API_KEY}`

const WEATHER_API_KEY = process.env.VUE_APP_WEATHER_API_KEY
let WEATHER_BASE_URL
if (process.env.NODE_ENV === 'production') {
    WEATHER_BASE_URL = `https://api.darksky.net/forecast/${WEATHER_API_KEY}/`
} else if (process.env.NODE_ENV === 'development') {
    WEATHER_BASE_URL = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${WEATHER_API_KEY}/`
}

const WEATHER_URL_OPTIONS = '?exclude=minutely,alerts,flags&units=uk2'

export { LOCATION_BASE_URL, WEATHER_BASE_URL, WEATHER_URL_OPTIONS }
