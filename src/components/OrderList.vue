<template>
	<div>
		<table v-if="orders.length > 0" class="GeneratedTable">
			<thead>
				<tr>
					<th>№</th>
					<th 
						@click="setSelectedSort('Name_people'); toggleSortReverse()"
					>Ф.И.О. <i v-if="selectedSort == 'Name_people'" class="fas fa-sort"></i></th>
					<th
						@click="setSelectedSort('Name_vodil'); toggleSortReverse()"
					>Дата рождения <i v-if="selectedSort == 'Name_vodil'" class="fas fa-sort"></i></th>
					<th 
						@click="setSelectedSort('Marshrut'); toggleSortReverse()"
					>Моб.телефон <i v-if="selectedSort == 'number'" class="fas fa-sort"></i></th>
					<th 
						@click="setSelectedSort('Created'); toggleSortReverse()"
					>Дата регистрации <i v-if="selectedSort == 'Created'" class="fas fa-sort"></i></th>
					<th 
						@click="setSelectedSort('Status'); toggleSortReverse()"
					>Автомобиль <i v-if="selectedSort == 'Auto'" class="fas fa-sort"></i></th>
					<th 
						@click="setSelectedSort('Order_number'); toggleSortReverse()"
					>Госномер <i v-if="selectedSort == 'Auto_number'" class="fas fa-sort"></i></th>
				</tr>
			</thead>
			<tbody>
					<order-item v-for="order in orders" :order="order" :key="order.id"></order-item>
			</tbody>
		</table>
		<h2 v-else style="color: red">
			Список пуст
		</h2>
	</div>
</template>

<script>
import OrderItem from "@/components/OrderItem";
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'
export default {
  components: {OrderItem},
  methods: {
    ...mapMutations({
      setSelectedSort: 'order/setSelectedSort',
			toggleSortReverse: 'order/toggleSortReverse'
    })
  },
	computed: {
		...mapState({
			selectedSort: state => state.order.selectedSort,
			orders: state => state.order.orders,
			isSortReversed: state => state.order.isSortReversed
		}),
		// ...mapGetters({
    //   paginatedOrders: 'order/paginatedOrders'
    // })
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








