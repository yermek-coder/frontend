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
  background-color: #FF6600;
	background-image: url('~@/assets/images/arrow_left.svg');
	height: 36px;
  width: 36px;
	background-repeat: no-repeat;
	background-size: 17px;
	border: none;
	background-position: center;
	border-radius: 500px;
}
.btn-arrow-left:hover {
	background-color: white;
	border: 1px solid #FF6600;
	background-image: url('~@/assets/images/arrow_left_hover.svg');
}
.btn-arrow-left:active {
  background-color: #FF6600;
	box-shadow: inset 0px 0px 15px 1px rgb(0 0 0 / 20%);
	background-image: url('~@/assets/images/arrow_left.svg');
}
</style>
