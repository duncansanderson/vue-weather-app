export const store = {
    state: {
        geocoderApiKey: process.env.VUE_APP_GOOGLE_GEOCODE_API_KEY,
        weatherApiKey: process.env.VUE_APP_DARKSKY_API_KEY,
        currentLocation: null,
        coordinates: [],
        todayWeather: null
    },
    getCoordinates() {
        let _this = this

        if (!navigator.geolocation) {
            alert('Geolocation is not supported by your browser')
        } else {
            navigator.geolocation.getCurrentPosition(success, error)
        }

        function success(position) {
            _this.state.coordinates = [ position.coords.latitude, position.coords.longitude ]
            return
        }
    
        function error() {
            alert('Unable to retrieve your location')
        }
    },
    getLocation() {
        const latitude = this.state.coordinates[0]
        const longitude = this.state.coordinates[1]
        const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${this.state.geocoderApiKey}`
    
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                let city = ''
                data.results[0].address_components.forEach((address_component) => {
                    if (address_component.types.includes('locality') || address_component.types.includes('postal_town') && city === '') {
                        city = address_component.long_name
                    }
                })
                this.state.currentLocation = city
            })
            .catch((error) => console.error(error))
    },
    getWeather() {
        const latitude = this.state.coordinates[0]
        const longitude = this.state.coordinates[1]
	    const url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${this.state.weatherApiKey}/${latitude},${longitude}?exclude=minutely,alerts,flags&units=uk2`
        const days = [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ]
        const weatherIcons = {
            'clear-day': 'sun',
            'clear-night': 'moon',
            'rain': 'cloud-rain',
            'snow': 'snowflake',
            'sleet': 'snowflake',
            'wind': 'wind',
            'cloudy': 'cloud',
            'partly-cloudy-day': 'cloud-sun',
            'partly-cloudy-night': 'cloud-moon'
        }
        
        fetch( url )
            .then( ( resp ) => resp.json() )
            .then( ( data ) => {
                console.log(data)
                // Get today's data
                this.state.todayWeather = {
				    summary: data.currently.summary,
				    icon: weatherIcons[ data.currently.icon ],
                    temperature: Math.round( data.currently.temperature ),
                    temperatureMax: Math.round( data.daily.data[0].temperatureMax ),
                    temperatureMin: Math.round( data.daily.data[0].temperatureMin )
			    }
            })
    }
}