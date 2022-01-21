<template>
  <Form @submit="createDispetcher" :validation-schema="schema">
    <h3>Регистрация диспетчера</h3>
		<div class="form-inputs">
			<ul style="margin-right: 22px">
				<li>
					<Field
						name="Name"
						v-focus
						type="text"
						placeholder="Имя"
						class="input"
					/>
					<ErrorMessage class="ErrorMessage" name="Name" />
				</li>
				<li>
					<Field
						name="Sure_name"
						type="text"
						placeholder="Фамилия"
						class="input"
					/>
					<ErrorMessage class="ErrorMessage" name="Sure_name" />
				</li>
				<li>
					<Field
						name="Number"
						type="tel"
						placeholder="Номер телефона"
						class="input"
					/>
					<ErrorMessage class="ErrorMessage" name="Number" />
				</li>
			</ul>
			<ul style="margin-left: 22px">
				<li>
					<Field
						name="Date_of_birth"
						type="date"
						placeholder="Дата рождения"
						class="input"
					/>
					<ErrorMessage class="ErrorMessage" name="Date_of_birth" />
				</li>
				<li>
					<Field
						name="Email"
						type="email"
						placeholder="Email"
						class="input"
					/>
					<ErrorMessage class="ErrorMessage" name="Email" />
				</li>
			</ul>
		</div>
    <my-button-large
			type="submit"
      style="justify-self: center; margin-top: 15px"
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
    createDispetcher(values) {
      this.$emit('create', values)
    }
  },
	computed: {
		schema() {
			return yup.object({
				Email: yup.string().email('Неверный формат').required('Пустое поле'),
				Name: yup.string().required('Пустое поле'),
				Sure_name: yup.string().required('Пустое поле'),
				Date_of_birth: yup.string().required('Пустое поле'),
				Number: yup.string().min(11, 'Минимум 11 символов').matches(/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/, 'Неверный формат или пустое поле')
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
