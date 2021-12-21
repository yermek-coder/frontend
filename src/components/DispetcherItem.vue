<template>
  <tr @click="$router.push(`dispetchers/${dispetcher.id}`); setSelectedId(this.dispetcher.id)" class="dispetcher">
		<td style="width: 50px">{{dispetcher.id}}</td>
		<td>{{dispetcher.Name}}</td>
		<td>{{dispetcher.Sure_name}}</td>
		<td>{{dispetcher.Date_of_birth}}</td>
		<td>{{dispetcher.Number}}</td>
		<td>{{dispetcher.Created}}</td>
		<td>{{dispetcher.Email}}</td>
  </tr>
</template>

<script>
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex';
export default {
  props: {
    dispetcher: {
      type: Object,
      required: true,
    }
  },
	methods: {
		...mapMutations({
			setSelectedId: 'dispetcher/setSelectedId'
		}),
	},
	// computed: {
	// 	...mapState({
  //     selectedId: state => state.driver.selectedId
  //   }),
	// }
}
</script>

<style scoped>
/* .dispetcher {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.dispetcher__btns {
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


