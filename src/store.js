import Vue from 'vue'
import Vuex from 'vuex'

import service from '@/services/service.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        coordinates: [],
        location: null,
        currentWeather: {},
        chartLabels: [],
        chartData:[],
        locationReceived: false,
        weatherReceived: false
    },
    mutations: {
        GET_COORDINATES(state) {

            if (!navigator.geolocation) {
                alert('Geolocation is not supported by your browser')
            } else {
                navigator.geolocation.getCurrentPosition(success, error)
            }

            function success(position) {
                state.coordinates = [ position.coords.latitude, position.coords.longitude ]
                return
            }
    
            function error() {
                alert('Unable to retrieve your location')
            }
        },
        GET_LOCATION(state) {
            service
                .getLocation(state.coordinates)
                .then(response => {
                    let city = ''
                    response.data.results[0].address_components.forEach((address_component) => {
                        if (address_component.types.includes('locality') || address_component.types.includes('postal_town') && city === '') {
                            city = address_component.long_name
                        }
                    })
                    state.location = city
                    state.locationReceived = true
                })
                .catch(error => {
                    console.log('There was an error getting the location data:', error.response)
                })
        },
        GET_WEATHER(state) {
            const days = [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ]

            service
                .getWeather(state.coordinates)
                .then(response => {
                    
                    // Set current weather.
                    state.currentWeather = {
                        summary: response.data.currently.summary,
                        icon: response.data.currently.icon,
                        temperature: Math.round( response.data.currently.temperature ),
                        temperatureMax: Math.round( response.data.daily.data[0].temperatureMax ),
                        temperatureMin: Math.round( response.data.daily.data[0].temperatureMin )
                    }

                    // Set chart data and labels (hourly weather).
                    response.data.hourly.data.splice(6)
                    
                    response.data.hourly.data.forEach(hour => {
                        state.chartLabels.push(new Date(hour.time * 1000).getHours().toString() + ':00')
                        state.chartData.push(Math.round(hour.temperature))
                    })

                    state.chartLabels[0] = 'Now'

                    state.weatherReceived = true
                })
                .catch(error => {
                    console.log('There was an error getting the weather data', error.response)
                })
        }
    },
    actions: {
        getCoordinates(context) {
            context.commit('GET_COORDINATES')
        },
        getLocation(context) {
            context.commit('GET_LOCATION')
        },
        getWeather(context) {
            context.commit('GET_WEATHER')
        }
    }
})