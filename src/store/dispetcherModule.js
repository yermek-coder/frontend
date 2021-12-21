import axios from "axios";

export const dispetcherModule = {
    state: () => ({
				dispetchers: [],
        isDispetchersLoading: false,
        selectedSort: '',
				selectedId: '',
        searchQuery: '',
        page: 1,
        limit: 10,
        totalPages: 0,
				newDispetcher: {}
    }),
		mutations: {
			setDispetchers(state, dispetchers) {
					state.dispetchers = dispetchers;
			},
			setLoading(state, bool) {
					state.isDispetchersLoading = bool
			},
			setPage(state, page) {
					state.page = page
			},
			setSelectedId(state, selectedId) {
				state.selectedId = selectedId
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
			setNewDispetcher(state, newDispetcher) {
				state.newDispetcher = newDispetcher
			}
		},
    getters: {
        sortedDispetchers(state) {
            return [...state.dispetchers].sort((dispetcher1, dispetcher2) => dispetcher1[state.selectedSort]?.localeCompare(dispetcher2[state.selectedSort]))
        },
        sortedAndSearchedDispetchers(state, getters) {
					return getters.sortedDispetchers.filter(dispetcher => dispetcher.Name.toLowerCase().includes(state.searchQuery.toLowerCase()) || dispetcher.Sure_name.toLowerCase().includes(state.searchQuery.toLowerCase()))
        },
				paginatedDispetchers(state, getters) {
					let from = (state.page-1)*state.limit
					let to = from + state.limit
					return getters.sortedAndSearchedDispetchers.slice(from, to)
				}
    },
    actions: {
        async fetchDispetchers({state, commit}) {
            try {
                commit('setLoading', true);
                const response = await axios.get('http://127.0.0.1:8000/api/dispetchery', {
                });
                commit('setTotalPages', Math.ceil(response.data['length'] / state.limit))
                commit('setDispetchers', response.data)
            } catch (e) {
							alert('Error fetching')
            } finally {
                commit('setLoading', false);
            }
        },
				async postDispetcher({state, dispatch}) {
					try {
						await axios.post('http://127.0.0.1:8000/api/dispetchery/', state.newDispetcher);
						await dispatch('fetchDispetchers');
					} catch (e) {
						alert('Error posting')
					} finally {
							
					}
				}
    },
    namespaced: true
}


