<template>
    <div class="current" v-if="currentWeather">
        <div class="current__summary">
            <div class="current__summary__icon">
                <img :src="getImgUrl(currentWeather.icon)" :alt="currentWeather.icon">
            </div>
            <div class="current__summary__text">{{ currentWeather.summary }}</div>
        </div>
        <div class="current__temperature">
            <div class="current__temperature__now">
                {{ currentWeather.temperature }}<span>&deg;c</span>
            </div>
            <div class="current__temperature__day">
                <div class="current__temperature__day__max">
                    {{ currentWeather.temperatureMax }}<span>&deg;c</span>
                </div>
                <div class="current__temperature__day__min">
                    {{ currentWeather.temperatureMin }}<span>&deg;c</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'CurrentWeather',
    computed: {
        ...mapState({
            coordinates: state => state.coordinates,
            currentWeather: state => state.currentWeather
        })
    },
    watch: {
        coordinates() {
            this.$store.dispatch('getWeather')
        }
    },
    methods: {
        getImgUrl(icon) {
            if (icon) {
                const images = require.context('../assets/', false, /\.svg$/)
                return images(`./${icon}.svg`)
            }
        }
    }
}
</script>

<style lang="scss">
.current {
    margin: 0 auto;
    // padding: 0 3rem;

    &__summary {
        align-items: center;
        display: flex;
        padding: 0 1rem;

        &__icon {
            // margin-top: 0.3rem;
            margin-right: 0.5rem;
            // margin-left: 0.7rem;

            img {
                height: 40px;
                width: 40px;
            }
        }

        &__text {
            // font-size: 1.5rem;
            font-size: 2.2rem;
        }
    }

    &__temperature {
        align-items: flex-end;
        display: flex;

        &__now {
            font-size: 10rem;
            margin-right: 3rem;
            position: relative;

            span {
                font-size: 2rem;
                position: absolute;
                top: 1.5rem;
            }
        }

        &__day {
            margin-bottom: 1.5rem;

            &__max, &__min {
                font-size: 2rem;
                position: relative;
                text-align: right;

                span {
                    font-size: 1.5rem;
                    position: relative;
                    top: -0.4rem;
                }
            }

            &__max::after {
                background-color: $white;
                content: '';
                display: block;
                height: 1px;
                margin: .2rem 0;
                position: relative;
                width: 100%;
            }
        }
    }
}
</style>