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
        Добавить диспетчера
      </my-button>
    </div>
    <my-dialog v-model:show="dialogVisible">
      <dispetcher-form
        @create="createDispetcher"
      />
    </my-dialog>
    <dispetcher-list
      
      @remove="removeDispetcher"
      v-if="!isDispetchersLoading"
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
//:dispetchers="paginatedDispetchers"
import DispetcherForm from "@/components/DispetcherForm";
import DispetcherList from "@/components/DispetcherList";
import MyButton from "@/components/UI/MyButton";
// import axios from 'axios';
import MySelect from "@/components/UI/MySelect";
import MyInput from "@/components/UI/MyInput";
import MyLoadingCircle from "@/components/UI/MyLoadingCircle";
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'

export default {
  components: {
    MyInput,
    MySelect,
    MyButton,
    DispetcherList,
		DispetcherForm,
		MyLoadingCircle
  },
  data() {
    return {
      dialogVisible: false,
    }
  },
  methods: {
    ...mapMutations({
      setPage: 'dispetcher/setPage',
      setSearchQuery: 'dispetcher/setSearchQuery',
      setSelectedSort: 'dispetcher/setSelectedSort',
			setNewDispetcher: 'dispetcher/setNewDispetcher'
    }),
    ...mapActions({
      fetchDispetchers: 'dispetcher/fetchDispetchers',
			postDispetcher: 'dispetcher/postDispetcher'
    }),
    createDispetcher(dispetcher) {
      this.setNewDispetcher(dispetcher);
			this.postDispetcher();
      this.dialogVisible = false;
    },
    removeDispetcher(dispetcher) {
      this.dispetchers = this.dispetchers.filter(p => p.id !== dispetcher.id)
    },
    showDialog() {
      this.dialogVisible = true;
    }
  },
  mounted() {
    this.fetchDispetchers();
  },
  computed: {
    ...mapState({
      dispetchers: state => state.dispetcher.dispetchers,
			newDispetcher: state => state.dispetcher.newDispetcher,
      isDispetchersLoading: state => state.dispetcher.isDispetchersLoading,
      selectedSort: state => state.dispetcher.selectedSort,
      searchQuery: state => state.dispetcher.searchQuery,
      page: state => state.dispetcher.page,
      limit: state => state.dispetcher.limit,
      totalPages: state => state.dispetcher.totalPages,
    }),
    ...mapGetters({
      sortedDispetchers: 'dispetcher/sortedDispetchers',
      sortedAndSearchedDispetchers: 'dispetcher/sortedAndSearchedDispetchers',
      paginatedDispetchers: 'dispetcher/paginatedDispetchers'
    })
  },
  watch: {
    // page() {
    //   this.fetchDispetchers()
    // }
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
