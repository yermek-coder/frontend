<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-button-large'
}
</script>

<style scoped>
.btn {
  padding: 20px 40px;
  background: #FF6600;
	font-size: 14px;
	font-weight: 700;
  color: white;
	border-radius: 19px;
	border: none;
}
</style>
