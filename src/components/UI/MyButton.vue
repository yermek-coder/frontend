<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-button'
}
</script>

<style scoped>
.btn {
  padding: 9px 16px;
  background-color: #FF6600;
	font-size: 14px;
	height: fit-content;
	font-weight: 700;
  color: white;
	border-radius: 500px;
	border: none;
}
.btn:hover {
	background-color: #FF8E43;
}
.btn:active {
  background-color: #FF6600;
	box-shadow: inset 0px 0px 15px 1px rgb(0 0 0 / 20%);
}
</style>
