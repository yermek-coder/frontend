<template>
  <div class="choise-bar">
		<router-link
			to="/workers/dispetchers"
			custom
			v-slot="{ href, route, navigate, isActive}"
		>
			<a :href="href" @click="navigate" :class="{'isActive': isActive}">
				Диспетчеры
			</a>
		</router-link>	
		<router-link
			to="/workers/drivers"
			custom
			v-slot="{ href, route, navigate, isActive }"
		>
			<a :href="href" @click="navigate" :class="{'isActive': isActive}">
				Водители
			</a>
		</router-link>

  </div>
	<router-view></router-view>
</template>

<script>
export default {

}
</script>

<style scoped>
.choise-bar {
	border: 1px solid black;
	display: flex;
	align-items: center;
	width: 344px;
	height: 66px;
}
a {
	font-weight: 700;
	font-size: 18px;
	width: 100%;
	height: 100%;
	text-decoration: none;
	color: black;
	display: flex;
	align-items: center;
	justify-content: center;
}
a:hover {
	background-color: #f1f1f1;
}
.isActive {
	background-color: #5C5C5C;
	color: white;
}
.isActive:hover {
	background-color: #5C5C5C;
}
</style>
