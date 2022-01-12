import axios from "axios";
import moment from 'moment';

export const driverModule = {
    state: () => ({
        drivers: [],
        isDriversLoading: false,
        selectedSort: '',
				isSortReversed: false,
        searchQuery: '',
        page: 1,
        limit: 10,
        totalPages: 0,
				newDriver: {}
    }),
		mutations: {
			setDrivers(state, drivers) {
					state.drivers = drivers;
			},
			setLoading(state, bool) {
					state.isDriversLoading = bool
			},
			setPage(state, page) {
					state.page = page
			},
			setSelectedSort(state, selectedSort) {
					state.selectedSort = selectedSort
			},
			toggleSortReverse(state) {
				if (state.isSortReversed == false) {
					state.isSortReversed = true;
				} else {
					state.isSortReversed = false
				}
			},
			setTotalPages(state, totalPages) {
					state.totalPages = totalPages
			},
			setSearchQuery(state, searchQuery) {
					state.searchQuery = searchQuery
			},
			setNewDriver(state, newDriver) {
				state.newDriver = newDriver
			}
		},
    getters: {
        // sortedDrivers(state) {
				// 	const list = [...state.drivers].sort((driver1, driver2) => driver1[state.selectedSort]?.localeCompare(driver2[state.selectedSort]))
				// 	if (state.isSortReversed) {
				// 		return list
				// 	} else {
				// 		return list.reverse()
				// 	}
        //     // return [...state.drivers].sort((driver1, driver2) => !isSortReversed ? driver1[state.selectedSort]?.localeCompare(driver2[state.selectedSort]) : driver2[state.selectedSort]?.localeCompare(driver1[state.selectedSort]))
        // },
        // sortedAndSearchedDrivers(state, getters) {
        //     return getters.sortedDrivers.filter(driver => driver.Name_vod.toLowerCase().includes(state.searchQuery.toLowerCase()))
				// 		// || driver.Sure_name.toLowerCase().includes(state.searchQuery.toLowerCase()
        // },
				// paginatedDrivers(state, getters) {
				// 	let from = (state.page-1)*state.limit
				// 	let to = from + state.limit
				// 	return getters.sortedAndSearchedDrivers.slice(from, to)
				// }
    },
    actions: {
        async fetchDrivers({state, commit}) {
					try {
							commit('setLoading', true);
							const response = await axios.get('http://127.0.0.1:8000/api/voditeli/', {
								params: {
									page: state.page,
									search: state.searchQuery
								}
							});
							console.log(state.page);
							commit('setTotalPages', Math.ceil(response.data.count / state.limit))
							response.data.results.forEach(function(item) {
								moment.locale('ru');
								item.Created = moment(String(item.Created)).format('DD MMMM YYYY');
							});
							commit('setDrivers', response.data.results)
					} catch (e) {
						alert('Error fetching')
					} finally {
							commit('setLoading', false);
					}
        },
				async postDriver({state, dispatch}) {
					try {
						await axios.post('http://127.0.0.1:8000/api/voditeli/', state.newDriver);
						await dispatch('fetchDrivers');
					} catch (e) {
						alert('Error posting')
					} finally {
							
					}
				}
    },
    namespaced: true
}


