<template>
  	<div id="app">
    	<Location />
        <CurrentWeather />
  	</div>
</template>

<script>
import Location from './components/Location'
import CurrentWeather from './components/CurrentWeather'

export default {
	name: 'app',
  	components: {
        Location,
        CurrentWeather
	},
}
</script>

<style lang="scss">
* {
	box-sizing: border-box;
	font-family: $roboto;
	font-weight: 300;
	font-size: 3.25vh;
}

body {
	align-items: center;
	background: #e7e7ef;
	display: flex;
	justify-content: center;
}

html, body {
	font-size: 62.5%;
	height: 100%;
	margin: 0;
	padding: 0;
	width: 100%;
}

#app {
	background-color: $blue;
	box-shadow: 0 0 4vh rgba(0, 0, 0, 0.1);
	color: $white;
	height: 100vh;
  	overflow: hidden;
  	width: 100vw;
  
  	@media (min-width: 576px) {
    	height: 96vh;
    	width: 54vh;
  	}
}
</style>