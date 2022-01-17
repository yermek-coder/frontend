import axios from "axios";
import moment from 'moment';

export const dispetcherModule = {
    state: () => ({
				dispetchers: [],
        isDispetchersLoading: false,
        selectedSort: '',
				isSortReversed: false,
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
			},
			toggleSortReverse(state) {
				if (state.isSortReversed == false) {
					state.isSortReversed = true;
				} else {
					state.isSortReversed = false
				}
			}
		},
    getters: {

		},
    actions: {
        async fetchDispetchers({state, commit}) {
            try {
                commit('setLoading', true);
                const response = await axios.get('api/dispetchery', {
									params: {
										page: state.page,
										search: state.searchQuery
									}
                });
                commit('setTotalPages', Math.ceil(response.data.count / state.limit))
								response.data.results.forEach(function(item) {
									moment.locale('ru');
									item.Created = moment(String(item.Created)).format('DD MMMM YYYY');
								});
                commit('setDispetchers', response.data.results)
            } catch (e) {
							alert('Error fetching')
            } finally {
                commit('setLoading', false);
            }
        },
				async postDispetcher({state, dispatch}) {
					try {
						await axios.post('api/dispetchery/', state.newDispetcher);
						await dispatch('fetchDispetchers');
					} catch (e) {
						alert('Error posting')
					} finally {
							
					}
				}
    },
    namespaced: true
}


