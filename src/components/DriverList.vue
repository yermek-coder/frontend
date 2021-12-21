<template>
	<div>
		<table v-if="paginatedDrivers.length > 0" class="GeneratedTable">
			<thead>
				<tr>
					<th>№</th>
					<th @click="setSelectedSort('Name')">Имя <i class="fas fa-sort"></i></th>
					<th @click="setSelectedSort('Sure_name')">Фамилия <i class="fas fa-sort"></i></th>
					<th @click="setSelectedSort('Date_of_birth')">Дата рождения <i class="fas fa-sort"></i></th>
					<th @click="setSelectedSort('number')">Моб.телефон <i class="fas fa-sort"></i></th>
					<th @click="setSelectedSort('Created')">Дата регистрации <i class="fas fa-sort"></i></th>
					<th @click="setSelectedSort('Auto')">Автомобиль <i class="fas fa-sort"></i></th>
					<th @click="setSelectedSort('Auto_number')">Госномер <i class="fas fa-sort"></i></th>
				</tr>
			</thead>
			<tbody>
					<driver-item v-for="driver in paginatedDrivers" :driver="driver" :key="driver.id"></driver-item>
			</tbody>
		</table>
		<h2 v-else style="color: red">
			Список пуст
		</h2>
	</div>
</template>

<script>
import DriverItem from "@/components/DriverItem";
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'
export default {
  components: {DriverItem},
  methods: {
    ...mapMutations({
      setSelectedSort: 'driver/setSelectedSort',
    })
  },
	computed: {
		...mapState({
			selectedSort: state => state.driver.selectedSort
		}),
		...mapGetters({
      paginatedDrivers: 'driver/paginatedDrivers'
    })
	}
}
</script>

<style scoped>
* {
	font-size: 14px;
}
.user-list-item {
  display: inline-block;
  margin-right: 10px;
}
table.GeneratedTable {
  width: 100%;
  background-color: #ffffff;
  border-collapse: collapse;
  border-width: 1px;
  border-color: #000000;
  border-style: solid;
  color: #000000;
}
table.GeneratedTable th {
  border-width: 1px;
  border-color: #000000;
  border-style: solid;
  padding: 22px 0;
}

table.GeneratedTable thead {
  background-color: #ffffff;
}
</style>








