<template>

  <div style="position: relative">
		<router-view></router-view>
    <div class="app__btns">
			<my-input
				:model-value="searchQuery"
				@update:model-value="setSearchQuery"
				placeholder=' &#xf002;  Поиск...'
				v-focus
				style="margin-left: 20px; font-size: 14px; border-color: #C4C4C4; border-width: 0 0 2px; width: 28%"
    	/>
    </div>
    <order-list
      
      @remove="removeOrder"
      v-if="!isOrdersLoading"
    />
    <my-loading v-else></my-loading>
    <div class="page__wrapper">
      <div
        v-for="pageNumber in totalPages"
        :key="pageNumber"
        class="page"
        :class="{
              'current-page': page === pageNumber
            }"
        @click="setPage(pageNumber)"
      >
        {{ pageNumber }}
      </div>
    </div>
  </div>

</template>

<script>
//:orders="paginatedOrders"
import OrderList from "@/components/OrderList";
import MyButton from "@/components/UI/MyButton";
import MySelect from "@/components/UI/MySelect";
import MyInput from "@/components/UI/MyInput";
import MyLoadingCircle from "@/components/UI/MyLoadingCircle";
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex';

export default {
  components: {
    MyInput,
    MySelect,
    MyButton,
    OrderList,
		MyLoadingCircle
  },
  methods: {
    ...mapMutations({
			setOrders: 'order/setOrders',
      setPage: 'order/setPage',
      setSearchQuery: 'order/setSearchQuery',
      setSelectedSort: 'order/setSelectedSort',
			setNewOrder: 'order/setNewOrder'
    }),
    ...mapActions({
      fetchOrders: 'order/fetchOrders',
			postOrder: 'order/postOrder',
    }),
    createOrder(order) {
      this.setNewOrder(order);
			this.postOrder();
    },
    removeOrder(order) {
      this.orders = this.orders.filter(p => p.id !== order.id)
    },
  },
  mounted() {
    this.fetchOrders();
  },
  computed: {
    ...mapState({
      orders: state => state.order.orders,
			newOrder: state => state.order.newOrder,
      isOrdersLoading: state => state.order.isOrdersLoading,
      selectedSort: state => state.order.selectedSort,
      searchQuery: state => state.order.searchQuery,
      page: state => state.order.page,
      limit: state => state.order.limit,
      totalPages: state => state.order.totalPages,
    }),
    ...mapGetters({
      sortedOrders: 'order/sortedOrders',
      sortedAndSearchedOrders: 'order/sortedAndSearchedOrders',
      paginatedOrders: 'order/paginatedOrders'
    })
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

.app__btns {
  margin-bottom: 25px;
	margin-top: 20px;
  display: flex;
  justify-content: space-between;
	align-items: center;
}
.page__wrapper {
  display: flex;
  margin-top: 15px;
}
.page {
  border: 1px solid black;
  padding: 10px;
}
.current-page {
  border: 2px solid #FF6600;
}

.observer {
  height: 30px;
  background: green;
}
</style>
