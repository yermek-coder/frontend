<template>
	<div>
		<table v-if="paginatedDispetchers.length > 0" class="GeneratedTable">
			<thead>
				<tr>
					<th>№</th>
					<th @click="setSelectedSort('Name')">Имя <i class="fas fa-sort"></i></th>
					<th @click="setSelectedSort('Sure_name')">Фамилия <i class="fas fa-sort"></i></th>
					<th @click="setSelectedSort('Date_of_birth')">Дата рождения <i class="fas fa-sort"></i></th>
					<th @click="setSelectedSort('number')">Моб.телефон <i class="fas fa-sort"></i></th>
					<th @click="setSelectedSort('Created')">Дата регистрации <i class="fas fa-sort"></i></th>
					<th @click="setSelectedSort('Email')">e-mail <i class="fas fa-sort"></i></th>
				</tr>
			</thead>
			<tbody>
					<dispetcher-item v-for="dispetcher in paginatedDispetchers" :dispetcher="dispetcher"	:key="dispetcher.id"></dispetcher-item>
			</tbody>
		</table>
		<h2 v-else style="color: red">
			Список пуст
		</h2>
	</div>
</template>

<script>
import DispetcherItem from "@/components/DispetcherItem";
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'
export default {
  components: {DispetcherItem},
  // props: {
  //   dispetchers: {
  //     type: Array,
  //     required: true
  //   }
  // },
  methods: {
    ...mapMutations({
      setSelectedSort: 'dispetcher/setSelectedSort',
    })
  },
	computed: {
		...mapState({
			selectedSort: state => state.dispetcher.selectedSort
		}),
		...mapGetters({
      paginatedDispetchers: 'dispetcher/paginatedDispetchers'
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








