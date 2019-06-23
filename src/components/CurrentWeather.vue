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
                {{ currentWeather.temperature }}
                <span>&deg;c</span>
            </div>
            <div class="current__temperature__day">
                <div class="current__temperature__day__max">
                    {{ currentWeather.temperatureMax }}
                    <span>&deg;c</span>
                </div>
                <div class="current__temperature__day__min">
                    {{ currentWeather.temperatureMin }}
                    <span>&deg;c</span>
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

<style lang="scss" scoped>
.current {
    margin-top: 7rem;
    padding: 0 3.2rem;

    &__summary {
        align-items: center;
        display: flex;
        height: 3rem;

        &__icon {
            img {
                height: 30px;
                width: 30px;
            }
        }

        &__text {
            font-size: 24px;
            font-size: 2.4rem;
            margin-left: 1rem;
        }
    }

    &__temperature {
        align-items: flex-end;
        display: flex;

        &__now {
            font-size: 80px;
            font-size: 8rem;
        }

        &__day {
            margin-left: 1rem;
            padding-bottom: 1.5rem;

            &__max, &__min {
                font-size: 2.4rem;
                text-align: right;
            }

            &__max::after {
                content: '';
                height: 1px;
                width: 100%;
                background-color: $white;
                display: block;
                position: relative;
            }

            &__min {
                padding-top: .2rem;
            }
        }
    }
}
</style>