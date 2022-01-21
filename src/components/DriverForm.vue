<template>
  <Form @submit="createDriver" :validation-schema="schema">
    <h3>Регистрация водителя</h3>
		<div class="form-inputs">
			<ul style="margin-right: 22px">
				<li>
					<Field
						v-focus
						type="text"
						placeholder="Имя и фамилия"
						name="Name_vod"
						class="input"
					/>
					<ErrorMessage class="ErrorMessage" name="Name_vod" />
				</li>
				<li>
					<Field
						name="number"
						type="tel"
						placeholder="Номер телефона"
						class="input"
					/>
					<ErrorMessage class="ErrorMessage" name="number" />
				</li>
			</ul>
			<ul style="margin-left: 22px">
				<li>
					<Field
						type="date"
						placeholder="Дата рождения"
						class="input"
						name="Date_of_birth"
					/>
					<ErrorMessage class="ErrorMessage" name="Date_of_birth" />
				</li>
				<li>
					<Field
						name="Auto"
						type="text"
						placeholder="Модель Автомобиля"
						class="input"
					/>
					<ErrorMessage class="ErrorMessage" name="Auto" />
				</li>
				<li>
					<Field
						name="Auto_number"
						type="text"
						placeholder="Госномер"
						class="input"
					/>
					<ErrorMessage class="ErrorMessage" name="Auto_number" />
				</li>
			</ul>
		</div>
    <my-button-large
      style="justify-self: center;"
			type="submit"
    >
      Зарегистрировать
    </my-button-large>
  </Form>
</template>

<script>
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
export default {
	components: {
		Form,
    Field,
		ErrorMessage
  },
  data() {
    return {
			min: 6,
    }
  },
  methods: {
    createDriver(values) {
      this.$emit('create', values)
    }
  },
	computed: {
		schema() {
			return yup.object({
				Email: yup.string().email('Неверный формат').required('Пустое поле'),
				Auto: yup.string().required('Пустое поле'),
				Auto_number: yup.string().required('Пустое поле'),
				Name_vod: yup.string().required('Пустое поле'),
				Date_of_birth: yup.string().required('Пустое поле'),
				number: yup.string().min(11, 'Минимум 11 символов').matches(/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/, 'Неверный формат или пустое поле')
			});
		},
	}
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
	width: 240px;
	height: 50px;
}
my-button-large {
	justify-self: center;
}
.input {
	font-family: FontAwesome, 'Open Sans', sans-serif;
	font-size: 13px;
	font-weight: 400;
  outline: 0;
  border-width: 0 0 1px;
  border-color: black;
  padding: 5px 2px;
	width: 100%;
}
.ErrorMessage {
	font-size: 12px;
	color: red;
}
</style>
