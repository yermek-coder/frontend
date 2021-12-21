<template>
  <button class="btn-arrow-left">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-button-arrow-left'
}
</script>

<style scoped>
.btn-arrow-left {
  background: #FF6600;
	background-image: url('~@/assets/images/arrow_left.svg');
	height: 36px;
  width: 36px;
	background-repeat: no-repeat;
	background-size: 17px;
	border: none;
	background-position: center;
	border-radius: 500px;
}
</style>
