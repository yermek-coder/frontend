import axios from "axios";
import moment from 'moment';

export const orderModule = {
    state: () => ({
        orders: [],
        isOrdersLoading: false,
        selectedSort: '',
				isSortReversed: false,
        searchQuery: '',
        page: 1,
        limit: 10,
        totalPages: 0,
				newOrder: {}
    }),
		mutations: {
			setOrders(state, orders) {
					state.orders = orders;
			},
			setLoading(state, bool) {
					state.isOrdersLoading = bool
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
			setNewOrder(state, newOrder) {
				state.newOrder = newOrder
			}
		},
    actions: {
        async fetchOrders({state, commit}) {
					try {
							commit('setLoading', true);
							const response = await axios.get('api/orders/', {
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
							commit('setOrders', response.data.results)
					} catch (e) {
						alert('Error fetching')
					} finally {
							commit('setLoading', false);
					}
        },
				async postOrder({state, dispatch}) {
					try {
						await axios.post('api/voditeli/', state.newOrder);
						await dispatch('fetchOrders');
					} catch (e) {
						alert('Error posting')
					} finally {
							
					}
				}
    },
    namespaced: true
}


