<template>
	<div class="loader">
		<div class="loading-spinner">
			<svg class="loading-spinner__circle-svg" viewBox="25 25 50 50">
				<circle class="loading-spinner__circle-stroke" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/>
			</svg>
		</div>
	</div>
</template>

<script>
export default {
  name: 'my-loading'
}
</script>

<style scoped>
/* LOADING */

.loading-spinner {
  position: relative;
  margin: 0 auto;
  width: 75px;
}
.loading-spinner:before {
  content: '';
  display: block;
  padding-top: 100%;
}
.loading-spinner__circle-svg {
  animation: loading-spinner-rotate 1.28973s linear infinite;
  transform-origin: center center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.loading-spinner__circle-stroke {
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  animation: loading-spinner-dash 2s ease-in-out infinite;
  stroke-linecap: round;
  stroke-width: 4px;
	stroke: #FF6600;
}
@keyframes loading-spinner-rotate {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes loading-spinner-dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124px;
  }
}
@keyframes loading-spinner-color {
  100%,
  0% {
    stroke: #7d0fe6;
  }
  40% {
    stroke: #28dcd7;
  }
  66% {
    stroke: #ff6100;
  }
  80%,
  90% {
    stroke: #7d0fe6;
  }
}
</style>
