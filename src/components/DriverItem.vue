<template>
  <tr @click="$router.push(`drivers/${driver.id}`); setSelectedId(this.driver.id)" class="driver">
		<td style="width: 50px">{{driver.id}}</td>
		<td>{{driver.Name}}</td>
		<td>{{driver.Sure_name}}</td>
		<td>{{driver.Date_of_birth}}</td>
		<td>{{driver.number}}</td>
		<td>{{driver.Created}}</td>
		<td>{{driver.Auto}}</td>
		<td>{{driver.Auto_number}}</td>
  </tr>
</template>

<script>
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex';
export default {
  props: {
    driver: {
      type: Object,
      required: true,
    }
  },
	methods: {
		...mapMutations({
			setSelectedId: 'driver/setSelectedId'
		}),
	},
	computed: {
		...mapState({
      selectedId: state => state.driver.selectedId
    }),
	}
}
</script>

<style scoped>
/* .driver {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.driver__btns {
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


