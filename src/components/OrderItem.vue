<template>
  <tr @click="$router.push(`orders/${order.id}`); setSelectedId(this.order.id)" class="order">
		<td style="width: 50px">{{order.id}}</td>
		<td>{{order.Name_people}}</td>
		<td>{{order.Name_vodil}}</td>
		<td>{{order.Marshrut}}</td>
		<td>{{order.Created}}</td>
		<td>{{order.Status}}</td>
		<td>{{order.Order_number}}</td>
  </tr>
</template>

<script>
//2021-12-21T12:33:29.707336+06:00
import {mapMutations} from 'vuex';
export default {
  props: {
    order: {
      type: Object,
      required: true,
    }
  },
	methods: {
		...mapMutations({
			setSelectedId: 'order/setSelectedId'
		}),
	}
}
</script>

<style scoped>
/* .order {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.order__btns {
  display: flex;
} */
table.GeneratedTable td{
  border-width: 1px;
  border-color: #000000;
  border-style: solid;
  padding: 16px;
}
table.GeneratedTable tr:hover{
	background-color: #d1d1d1;
}
</style>


