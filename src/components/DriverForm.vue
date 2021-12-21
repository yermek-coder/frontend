<template>
  <form @submit.prevent>
    <h3>Регистрация водителя</h3>
		<div class="form-inputs">
			<ul style="margin-right: 22px">
				<li>
					<my-input
						v-focus
						v-model="driver.Name"
						type="text"
						placeholder="Имя"
					/>
				</li>
				<li>
					<my-input
						v-model="driver.Sure_name"
						type="text"
						placeholder="Фамилия"
					/>
				</li>
				<li>
					<my-input
						v-model="driver.number"
						type="text"
						placeholder="Номер телефона"
					/>
				</li>
			</ul>
			<ul style="margin-left: 22px">
				<li>
					<my-input
						v-model="driver.Date_of_birth"
						type="text"
						placeholder="Дата рождения"
					/>
				</li>
				<li>
					<my-input
						v-model="driver.Auto"
						type="text"
						placeholder="Модель Автомобиля"
					/>
				</li>
				<li>
					<my-input
						v-model="driver.Auto_number"
						type="text"
						placeholder="Госномер"
					/>
				</li>
			</ul>
		</div>
    <my-button-large
      style="justify-self: center;"
      @click="createDriver"
    >
      Зарегистрировать
    </my-button-large>
  </form>
</template>

<script>
export default {
  data() {
    return {
      driver: {
        Name: '',
        Sure_name: '',
        number: '',
        Auto: '',
        Auto_number: '',
        Date_of_birth: '',
      }
    }
  },
  methods: {
    createDriver() {
      // this.driver.id = Date.now();
      this.$emit('create', this.driver)
      this.driver = {
        Name: '',
        Sure_name: '',
        number: '',
        Auto: '',
        Auto_number: '',
        Date_of_birth: '',
      }
    }
  },
}
</script>

<style scoped>
h3 {
	text-align: center;
	margin-bottom: 23px;
}
form {
  display: grid;
  flex-direction: column;
	/* align-content: center;
	justify-content: center;
	align-items: center; */
}
.form-inputs {
	display: flex;
  flex-direction: row;
	justify-content: space-between;

}
ul {
	list-style-type:none;
	/* margin: 5px 20px; */
}
li {
	margin-bottom: 30px;
	width: 240px;
}
my-button-large {
	justify-self: center;
}

</style>
