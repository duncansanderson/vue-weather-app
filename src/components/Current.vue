<template>
    <div class="current" v-if="sharedState.todayWeather">
        <div class="current__summary">
            <div class="current__summary__icon">
                <font-awesome-icon :icon="[ 'fas', sharedState.todayWeather.icon ]" size="2x" />
            </div>
            <div class="current__summary__text">{{ sharedState.todayWeather.summary }}</div>
        </div>
        <div class="current__temperature">
            <div class="current__temperature__now">{{ sharedState.todayWeather.temperature }}&deg;</div>
            <div class="current__temperature__day">
                <div class="current__temperature__day__max">{{ sharedState.todayWeather.temperatureMax }}&deg;</div>
                <div class="current__temperature__day__min">{{ sharedState.todayWeather.temperatureMin }}&deg;</div>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '@/store.js'

export default {
    name: 'Current',
    data () {
        return {
            sharedState: store.state
        }
    },
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