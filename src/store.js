export const store = {
    state: {
        currentLocation: '',
        geocoderApiKey: process.env.VUE_APP_GOOGLE_GEOCODE_API_KEY
    },
    getCoordinates() {
        let _this = this

        function success(position) {
            const latitude = position.coords.latitude
            const longitude = position.coords.longitude
    
            _this.getLocation(latitude, longitude)
        }
    
        function error() {
            alert('Unable to retrieve your location')
        }

        if (!navigator.geolocation) {
            alert('Geolocation is not supported by your browser')
        } else {
            navigator.geolocation.getCurrentPosition(success, error)
        }
    },
    getLocation(latitude, longitude) {
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
    }
}