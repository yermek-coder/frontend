<template>
	<div>
		<table v-if="dispetchers.length > 0" class="GeneratedTable">
			<thead>
				<tr>
					<th>№</th>
					<th @click="setSelectedSort('Name'); toggleSortReverse()">Имя <i v-if="selectedSort == 'Name'" class="fas fa-sort"></i></th>
					<th @click="setSelectedSort('Sure_name'); toggleSortReverse()">Фамилия <i v-if="selectedSort == 'Sure_name'" class="fas fa-sort"></i></th>
					<th @click="setSelectedSort('Date_of_birth'); toggleSortReverse()">Дата рождения <i v-if="selectedSort == 'Date_of_birth'" class="fas fa-sort"></i></th>
					<th @click="setSelectedSort('number'); toggleSortReverse()">Моб.телефон <i v-if="selectedSort == 'number'" class="fas fa-sort"></i></th>
					<th @click="setSelectedSort('Created'); toggleSortReverse()">Дата регистрации <i v-if="selectedSort == 'Created'" class="fas fa-sort"></i></th>
					<th @click="setSelectedSort('Email'); toggleSortReverse()">e-mail <i v-if="selectedSort == 'Email'" class="fas fa-sort"></i></th>
				</tr>
			</thead>
			<tbody>
					<dispetcher-item v-for="dispetcher in dispetchers" :dispetcher="dispetcher"	:key="dispetcher.id"></dispetcher-item>
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
			toggleSortReverse: 'dispetcher/toggleSortReverse'
    })
  },
	computed: {
		...mapState({
			selectedSort: state => state.dispetcher.selectedSort,
			dispetchers: state => state.dispetcher.dispetchers,
			isSortReversed: state => state.dispetcher.isSortReversed
		}),
		// ...mapGetters({
    //   dispetchers: 'dispetcher/dispetchers'
    // })
	},
	watch: {
    page() {
      this.fetchDrivers()
    },
		searchQuery() {
			this.fetchDrivers()
		}
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








