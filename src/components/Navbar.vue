<template>
  <div class="navbar">
		<router-link
			to="/"
			custom
			v-slot="{ href, navigate, isActive }"
		>
			<a :href="href" @click="navigate" :class="{'isHomeActive': isActive, 'isNotHomeActive': !isActive}">
			</a>
		</router-link>
    <div class="navbar__btns">
			<router-link
				to="/workers"
				custom
				v-slot="{ href, navigate, isActive }"
			>
				<a class="link" title='Пользователи' :href="href" @click="navigate" :class="{'isActive': isActive}">
					Пользователи
				</a>
			</router-link>
			<router-link
				to="/order_history"
				custom
				v-slot="{ href, navigate, isActive }"
			>
				<a class="link" title='История заказов' :href="href" @click="navigate" :class="{'isActive': isActive}">
					История заказов
				</a>
			</router-link>
			<router-link
				to="/settings"
				custom
				v-slot="{ href, navigate, isActive }"
			>
				<a class="link" title='Настройки' :href="href" @click="navigate" :class="{'isActive': isActive}">
					Настройки
				</a>
			</router-link>
    </div>
		<my-task-buttons></my-task-buttons>
		<router-link
			to="/user"
			custom
			v-slot="{ href, navigate, isActive }"
			>
			<a :href="href" @click="navigate" :class="{'user-icon-active': isActive, 'user-icon-passive': !isActive}">
				<div class="user-icon"></div>
			</a>
		</router-link>
  </div>
</template>

<script>
export default {
	data () {
		return {
			publicPath: process.env.BASE_URL
		}
}
}
</script>

<style scoped>
.navbar {
  height: 80px;
  background-color: #FF6600;
  box-shadow: 0px 8px 5px -5px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  padding: 0 40px;
	color: white;
	font-family: 'Open Sans', sans-serif;
	text-align: center;
}
.navbar__btns {
  margin-right: auto;
	margin-left: 2%;
	display: flex;
}
.link {
	font-weight: 300;
	font-size: 18px;
	margin-right: 33px;
	text-decoration: none;
	color: white;
	display: inline-block;
}
.link:hover {
	font-weight: 700;
}
.link::before {
	display: block;
	content: attr(title);
	font-weight: 700;
	height: 0px;
	overflow: hidden;
	visibility: hidden;
}
.image-wrapper {
	max-height: 100%;
}
.img {
	height: 40px;
	margin-right: 33px;
}

.isActive {
	position: relative;
	font-weight: 700;
}
.isActive::after {
	position: absolute;
	content: '';
	height: 3px;
	bottom: -5px;
	left: 0;
	right: 0;
	background: white;
}
.isNotHomeActive {
	height: 40px;
  min-width: 42px;
	background-image: url('~@/assets/images/home_passive.svg');
	background-repeat: no-repeat;
	background-size: contain;
}
.isNotHomeActive:hover {
	height: 40px;
  min-width: 42px;
	background-image: url('~@/assets/images/home_active.svg');
	background-repeat: no-repeat;
	background-size: contain;
}
.isHomeActive {
	height: 40px;
  min-width: 42px;
	background-image: url('~@/assets/images/home_active.svg');
	background-repeat: no-repeat;
	background-size: contain;
}
.user-icon {
	height: 55px;
	width: 55px;
	background-image: url('~@/assets/images/user-default-pic.svg');
	background-repeat: no-repeat;
	background-size: contain;
}
.user-icon-passive{
	padding: 3px;
	border: 4px solid rgba(255,255,255, 0);
	border-radius: 500px;
	transition: border .2s ease-in-out;
}
.user-icon-passive:hover{
	padding: 3px;
	border: 4px solid rgba(255, 255, 255, 0.5);
	border-radius: 500px;
}
.user-icon-active {
	padding: 3px;
	border-radius: 500px;
	border: 4px solid rgba(255,255,255, 1);
}
/* BUTTONS */

</style>
