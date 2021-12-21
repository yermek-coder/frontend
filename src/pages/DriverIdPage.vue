<template>
  <div class="user-id-page">
		<div class="user-buttons">
			<my-button-arrow-left @click="$router.push({name: 'drivers'})"></my-button-arrow-left>
			<my-button style="margin-left:auto">Написать сообщение</my-button>
			<my-button style="margin-left: 30px">Заблокировать</my-button>
		</div>
		<div v-if="!isDriversLoading" class="user-info">
			<div style="margin-right: 30px">
				<img src="@/assets/images/default_user_pic.png" alt="User Photo">
			</div>
			<div class="user-info-table">
				<table>
					<tr class="mb-27">
						<th class="bold-big">{{drivers[$route.params.id-1]['Name']}} {{drivers[$route.params.id-1]['Sure_name']}}</th>
						<td>Онлайн</td>
					</tr>
					<tr>
						<th>Номер телефона:</th>
						<td>{{drivers[$route.params.id-1]['number']}}</td>
					</tr>
					<tr class="mb-24">
						<th>Дата регистрации:</th>
						<td>{{drivers[$route.params.id-1]['Created']}}</td>
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
						<td>{{drivers[$route.params.id-1]['Auto']}}</td>
					</tr>
					<tr>
						<th>Год выпуска автомобиля:</th>
						<td></td>
					</tr>
					<tr>
						<th>Госномер:</th>
						<td>{{drivers[$route.params.id-1]['Auto_number']}}</td>
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
import {mapState, mapMutations, mapGetters, mapActions} from 'vuex'
import MyButtonArrowLeft from '../components/UI/MyButtonArrowLeft.vue';
export default {
		components: {MyButtonArrowLeft},
		data() {
    return {
      dialogVisible: false,
    }
  },
  methods: {
    ...mapActions({
      fetchDrivers: 'driver/fetchDrivers',
    }),
    createDriver(driver) {
      this.drivers.push(driver);
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
	created() {this.fetchDrivers()},
  computed: {
    ...mapState({
      drivers: state => state.driver.drivers,
      isDriversLoading: state => state.driver.isDriversLoading,
    })
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
.user-id-page {
	position: absolute;
	width: 100%;
	min-height: 100%;
	height: fit-content;
	background-color: white;
}
.user-info-table {
	width: 400px;
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
