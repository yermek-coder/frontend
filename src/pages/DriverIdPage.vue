<template>
  <div class="user-id-page">
		<div class="user-buttons">
			<my-button-arrow-left @click="$router.push({name: 'drivers'})"></my-button-arrow-left>
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
						<th class="bold-big">{{currentItem.Name_vod}}</th>
						<td>Онлайн</td>
					</tr>
					<tr>
						<th>Номер телефона:</th>
						<td>{{currentItem.number}}</td>
					</tr>
					<tr class="mb-24">
						<th>Дата регистрации:</th>
						<td>{{currentItem.Created}}</td>
					</tr>
					<tr>
						<th>ИИН:</th>
						<td></td>
					</tr>
					<tr class="mb-32">
						<th >Номер удостоверения:</th>
						<td></td>
					</tr>
					<tr>
						<th>Модель автомобиля:</th>
						<td>{{currentItem.Auto}}</td>
					</tr>
					<tr>
						<th>Год выпуска автомобиля:</th>
						<td></td>
					</tr>
					<tr>
						<th>Госномер:</th>
						<td>{{currentItem.Auto_number}}</td>
					</tr>
					<tr>
						<th>Водительское удостоверение:</th>
						<td></td>
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
    createDriver(driver) {
      this.drivers.push(driver);
      this.dialogVisible = false;
    },
    removeDriver(driver) {
      this.drivers = this.drivers.filter(p => p.id !== driver.id)
    },
    showDialog() {
      this.dialogVisible = true;
    },
		async fetchID(id) {
			try {
					const response = await axios.get(`api/voditeli/${id}`);
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
.mb-32 {
	margin-bottom: 32px;
}
.mb-24 {
	margin-bottom: 24px;
}
</style>
