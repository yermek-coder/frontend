<template>
  <div class="choise-bar">
		<router-link
			to="/workers/dispetchers"
			custom
			v-slot="{ href, route, navigate, isActive}"
		>
			<NavLink :href="href" @click="navigate" :class="{'isActive': isActive}">
				Диспетчеры
			</NavLink>
		</router-link>	
		<router-link
			to="/workers/drivers"
			custom
			v-slot="{ href, route, navigate, isActive }"
		>
			<NavLink :href="href" @click="navigate" :class="{'isActive': isActive}">
				Водители
			</NavLink>
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
	width: fit-content;
	height: fit-content;

}
NavLink {
	font-weight: 700;
	font-size: 18px;
	padding: 22px 25px;
	width: 172px;
	text-align: center;
}
NavLink:hover {
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
