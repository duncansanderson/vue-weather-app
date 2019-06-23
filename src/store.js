import Vue from 'vue'
import Vuex from 'vuex'

import service from '@/services/service.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        coordinates: [],
        location: null,
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
                })
                .catch(error => {
                    console.log("There was an error:", error.response)
                })
        }
    },
    actions: {
        getCoordinates(context) {
            context.commit('GET_COORDINATES')
        },
        getLocation(context) {
            context.commit('GET_LOCATION')
        }
    }
})