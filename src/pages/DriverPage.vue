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
      <my-button
        @click="showDialog"
      >
        Добавить водителя
      </my-button>
    </div>
    <my-dialog v-model:show="dialogVisible">
      <driver-form
        @create="createDriver"
      />
    </my-dialog>
    <driver-list
      
      @remove="removeDriver"
      v-if="!isDriversLoading"
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
import DriverForm from "@/components/DriverForm";
import DriverList from "@/components/DriverList";
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
    DriverList,
		DriverForm,
		MyLoadingCircle
  },
  data() {
    return {
      dialogVisible: false,
    }
  },
  methods: {
    ...mapMutations({
			setDrivers: 'driver/setDrivers',
      setPage: 'driver/setPage',
      setSearchQuery: 'driver/setSearchQuery',
      setSelectedSort: 'driver/setSelectedSort',
			setNewDriver: 'driver/setNewDriver'
    }),
    ...mapActions({
      fetchDrivers: 'driver/fetchDrivers',
			postDriver: 'driver/postDriver',
    }),
    createDriver(driver) {
      this.setNewDriver(driver);
			this.postDriver();
      this.dialogVisible = false;
    },
    removeDriver(driver) {
      this.drivers = this.drivers.filter(p => p.id !== driver.id)
    },
    showDialog() {
      this.dialogVisible = true;
    }
  },
  mounted() {
    this.fetchDrivers();
  },
  computed: {
    ...mapState({
      drivers: state => state.driver.drivers,
			newDriver: state => state.driver.newDriver,
      isDriversLoading: state => state.driver.isDriversLoading,
      selectedSort: state => state.driver.selectedSort,
      searchQuery: state => state.driver.searchQuery,
      page: state => state.driver.page,
      limit: state => state.driver.limit,
      totalPages: state => state.driver.totalPages,
    }),
    ...mapGetters({
      sortedDrivers: 'driver/sortedDrivers',
      sortedAndSearchedDrivers: 'driver/sortedAndSearchedDrivers',
      paginatedDrivers: 'driver/paginatedDrivers'
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
