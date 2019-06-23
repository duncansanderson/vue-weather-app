<template>
    <div class="location">
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
            location: state => state.location
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
    display: flex;
    justify-content: center;
    width: 100%;

    &__heading {
        font-size: 2rem;
        font-size: 20px;
    }
}
</style>