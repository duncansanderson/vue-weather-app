<template>
    <div class="location" v-if="locationReceived && weatherReceived">
        <h1 
            class="location__heading"
            v-if="location"
            v-html="location"
        > </h1>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'Location',
    computed: {
        ...mapState({
            coordinates: state => state.coordinates,
            location: state => state.location,
            locationReceived: state => state.locationReceived,
            weatherReceived: state => state.weatherReceived
        })
    },
    watch: {
        coordinates() {
            this.$store.dispatch('getLocation')
        }
    },
    created () {
        this.$store.dispatch('getCoordinates')
    }
}
</script>

<style lang="scss" scoped>
.location {
    &__heading {
        font-size: 2rem;
        text-align: center;
    }
}
</style>