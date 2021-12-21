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
  background: #FF6600;
	font-size: 14px;
	height: fit-content;
	font-weight: 700;
  color: white;
	border-radius: 500px;
	border: none;
}
</style>
