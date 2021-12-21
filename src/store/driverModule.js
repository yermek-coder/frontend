import axios from "axios";

export const driverModule = {
    state: () => ({
        drivers: [],
        isDriversLoading: false,
        selectedSort: '',
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
        sortedDrivers(state) {
            return [...state.drivers].sort((driver1, driver2) => driver1[state.selectedSort]?.localeCompare(driver2[state.selectedSort]))
        },
        sortedAndSearchedDrivers(state, getters) {
            return getters.sortedDrivers.filter(driver => driver.Name.toLowerCase().includes(state.searchQuery.toLowerCase()) || driver.Sure_name.toLowerCase().includes(state.searchQuery.toLowerCase()))
        },
				paginatedDrivers(state, getters) {
					let from = (state.page-1)*state.limit
					let to = from + state.limit
					return getters.sortedAndSearchedDrivers.slice(from, to)
				}
    },
    actions: {
        async fetchDrivers({state, commit}) {
					try {
							commit('setLoading', true);
							const response = await axios.get('http://127.0.0.1:8000/api/voditeli/', {
							});
							commit('setTotalPages', Math.ceil(response.data['length'] / state.limit))
							commit('setDrivers', response.data)
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


