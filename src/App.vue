<template>
  	<div id="app">
    	<Location />
        <CurrentWeather />
        <div class="chart-wrapper">
            <TemperatureChart />
        </div>
  	</div>
</template>

<script>
import Location from './components/Location'
import CurrentWeather from './components/CurrentWeather'
import TemperatureChart from './components/TemperatureChart'

export default {
	name: 'app',
  	components: {
        Location,
        CurrentWeather,
        TemperatureChart
	},
}
</script>

<style lang="scss">
* {
	box-sizing: border-box;
	font-family: $roboto;
	font-weight: 100;
	// font-size: 3.25vh;
}

body {
	align-items: center;
	background: #e7e7ef;
	display: flex;
	justify-content: center;
}

html, body {
	font-size: 1rem;
	height: 100%;
	margin: 0;
	padding: 0;
	width: 100%;
}

#app {
    // align-items: center;
	background-color: $blue;
	box-shadow: 0 0 4vh rgba(0, 0, 0, 0.1);
    color: $white;
    // display: flex;
    // flex-direction: column;
	height: 100vh;
  	overflow: hidden;
    width: 100vw;
    
    display: grid;
    // grid-template-rows: repeat(3, 1fr);
    grid-template-rows: 22vh 1fr 200px;
  
  	@media (min-width: 576px) {
    	height: 580px;
    	width: 320px;
      }
      
      .chart-wrapper {
          height: 200px;

          canvas {
              height: 200px !important;
              width: 100% !important;
          }
      }
}
</style>