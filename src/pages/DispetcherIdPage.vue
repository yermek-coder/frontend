<template>
  <div class="user-id-page">
		<div class="user-buttons">
			<my-button-arrow-left @click="$router.push({name: 'dispetchers'})"></my-button-arrow-left>
			<my-button style="margin-left:auto">Написать сообщение</my-button>
			<my-button style="margin-left: 30px">Заблокировать</my-button>
		</div>
		<div class="user-info">
			<div style="margin-right: 30px">
				<img src="@/assets/images/user-default-pic.svg" alt="User Photo">
			</div>
			<div class="user-info-table">
				<table>
					<tr class="mb-27">
						<th class="bold-big">{{currentItem.Name}} {{currentItem.Sure_name}}</th>
						<td>Онлайн</td>
					</tr>
					<tr>
						<th>Номер телефона:</th>
						<td>{{currentItem.Number}}</td>
					</tr>
					<tr>
						<th class="mb-35">E-mail:</th>
						<td>{{currentItem.Email}}</td>
					</tr>
					<tr>
						<th>ИИН:</th>
						<td></td>
					</tr>
					<tr>
						<th class="mb-35">Номер удостоверения:</th>
						<td></td>
					</tr>
					<tr>
						<th>Дата регистрации:</th>
						<td>{{currentItem.Created}}</td>
					</tr>
				</table>
			</div>
		</div>
  </div>
</template>

<script>
import moment from 'moment';
import MyButtonArrowLeft from '../components/UI/MyButtonArrowLeft.vue';
import axios from "axios";
export default {
		components: {MyButtonArrowLeft},
		data() {
    return {
      dialogVisible: false,
			currentItem: {}
    }
  },
  methods: {
    createDriver(dispetcher) {
      this.dispetchers.push(dispetcher);
      this.dialogVisible = false;
    },
    removeDriver(dispetcher) {
      this.dispetchers = this.dispetchers.filter(p => p.id !== dispetcher.id)
    },
    showDialog() {
      this.dialogVisible = true;
    },
		async fetchID(id) {
			try {
					const response = await axios.get(`api/dispetchery/${id}`);
					const timeConverter = function(time) {
						moment.locale('ru');
						return moment(String(time)).format('DD MMMM YYYY');
					};
					response.data.Created = timeConverter(response.data.Created);
					this.currentItem = response.data;
			} catch (e) {
				alert('Error fetching user data')
			} 
		},
  },
  mounted() {
		this.fetchID(this.currentId)
  },
  computed: {
		currentId() {
			return this.$route.params.id;
    }
  }
}
</script>

<style scoped>
.user-buttons {
	display: flex;
}
.user-info {
	display: flex;
	padding-top: 38px;
}
.user-info-table {
	width: 400px;
}
.user-id-page {
	margin-top: 30px;
}
tr {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 8px;
}
table {
	display: flex;
	flex-direction: column;
}
th {
	font-weight: 300;
	font-size: 14px;
}
.bold-big{
	font-weight: 700;
	font-size: 24px;
}
td {
	font-weight: 500;
	font-size: 14px;
}
.mb-27 {
	margin-bottom: 27px;
}
.mb-35 {
	margin-bottom: 35px;
}
</style>
