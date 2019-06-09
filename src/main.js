import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCloudMoon, faCloudRain, faCloudSun, faMoon, faSnowflake, faSun, faWind } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCloudMoon, faCloudRain, faCloudSun, faMoon, faSnowflake, faSun, faWind)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
	render: h => h(App),
}).$mount('#app')
