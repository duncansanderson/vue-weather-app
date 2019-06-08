<template>
    <div id="location">
        <h1 
            class="heading1"
            v-test="{ id: 'location' }"
            v-html="sharedState.currentLocation"></h1>
    </div>
</template>

<script>
import { store } from '@/store.js'
import Test from '@/directives/test.js'

export default {
    name: 'Location',
    directives: { Test },
    data () {
        return {
            sharedState: store.state
        }
    },
    mounted () {
        store.getCoordinates()
    },
}
</script>

<style lang="scss" scoped>
#location {
    display: flex;
    justify-content: center;
    width: 100%;
    .heading1 {
        font-size: 2rem;
        font-size: 20px;
    }
}
</style>