<template>
  <div class="navbar">
		<router-link
			to="/"
			custom
			v-slot="{ href, route, navigate, isActive }"
		>
			<NavLink :href="href" @click="navigate" :class="{'isHomeActive': isActive, 'isNotHomeActive': !isActive}">
			</NavLink>
		</router-link>
    <div class="navbar__btns">
			<router-link
				to="/workers"
				custom
				v-slot="{ href, route, navigate, isActive }"
			>
				<NavLink :href="href" @click="navigate" :class="{'isActive': isActive}">
					Пользователи
				</NavLink>
			</router-link>
			<router-link
				to="/order_history"
				custom
				v-slot="{ href, route, navigate, isActive }"
			>
				<NavLink :href="href" @click="navigate" :class="{'isActive': isActive}">
					История заказов
				</NavLink>
			</router-link>
			<router-link
				to="/settings"
				custom
				v-slot="{ href, route, navigate, isActive }"
			>
				<NavLink :href="href" @click="navigate" :class="{'isActive': isActive}">
					Настройки
				</NavLink>
			</router-link>

    </div>
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
}
.navbar__btns {
  margin-right: auto;
}
.image-wrapper {
	max-height: 100%;
}
.img {
	height: 40px;
	margin-right: 33px;
}
NavLink {
	margin-right: 33px;
}
.isActive {
	position: relative;
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
  width: 42px;
	background-image: url('~@/assets/images/home_passive.svg');
	background-repeat: no-repeat;
	background-size: contain;
}
.isHomeActive {
	height: 40px;
  width: 42px;
	background-image: url('~@/assets/images/home_active.svg');
	background-repeat: no-repeat;
	background-size: contain;
}
</style>
