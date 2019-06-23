const LOCATION_API_KEY = process.env.VUE_APP_GEOCODE_API_KEY
const LOCATION_BASE_URL = `https://maps.googleapis.com/maps/api/geocode/json?key=${LOCATION_API_KEY}`

export { LOCATION_BASE_URL }
