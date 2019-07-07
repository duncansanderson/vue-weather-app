<template>
    <div class="loader">
	    <svg height="70" width="32" xmlns="http://www.w3.org/2000/svg">
		    <rect x="0" class="shape" height="70" width="5" />
		    <rect x="7" class="shape" height="70" width="5" />
		    <rect x="14" class="shape" height="70" width="5" />
		    <rect x="21" class="shape" height="70" width="5" />
		    <rect x="28" class="shape" height="70" width="5" />
	    </svg>
    </div>
</template>

<style lang="scss" scoped>
.loader {
	align-items: center;
	display: flex;
	height: 100%;
	justify-content: center;
	position: absolute;
	width: 100%;

	svg rect {
		animation: loader 1.2s infinite;
		fill: $white;
		transform: scaleY(0.4);
		transform-origin: center;

		&:nth-child(2) {
			animation-delay: 0.1s;
		}

		&:nth-child(3) {
			animation-delay: 0.2s;
		}

		&:nth-child(4) {
			animation-delay: 0.3s;
		}

		&:nth-child(5) {
			animation-delay: 0.4s;
		}
	}
}

@keyframes loader {
    0%, 40%, 100% {
        transform: scaleY(0.4);
        -webkit-transform: scaleY(0.4);
    }
    
	20% {
		transform: scaleY(1);
		-webkit-transform: scaleY(1);
	}
}
</style>