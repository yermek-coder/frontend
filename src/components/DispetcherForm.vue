<template>
  <form @submit.prevent>
    <h3>Регистрация диспетчера</h3>
		<div class="form-inputs">
			<ul style="margin-right: 22px">
				<li>
					<my-input
						v-focus
						v-model="dispetcher.Name"
						type="text"
						placeholder="Имя"
					/>
				</li>
				<li>
					<my-input
						v-model="dispetcher.Sure_name"
						type="text"
						placeholder="Фамилия"
					/>
				</li>
				<li>
					<my-input
						v-model="dispetcher.Number"
						type="text"
						placeholder="Номер телефона"
					/>
				</li>
			</ul>
			<ul style="margin-left: 22px">
				<li>
					<my-input
						v-model="dispetcher.Date_of_birth"
						type="text"
						placeholder="Дата рождения"
					/>
				</li>
				<li>
					<my-input
						v-model="dispetcher.Email"
						type="text"
						placeholder="Модель Автомобиля"
					/>
				</li>
			</ul>
		</div>
    <my-button-large
      style="justify-self: center; margin-top: 15px"
      @click="createDispetcher"
    >
      Зарегистрировать
    </my-button-large>
  </form>
</template>

<script>
export default {
  data() {
    return {
      dispetcher: {
        Name: '',
        Sure_name: '',
        Date_of_birth: '',
        Number: '',
        Email: ''
      }
    }
  },
  methods: {
    createDispetcher() {
      // this.dispetcher.id = Date.now();
      this.$emit('create', this.dispetcher)
      this.dispetcher = {
        Name: '',
        Sure_name: '',
        Date_of_birth: '',
        Number: '',
        Email: ''
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
