<template>
	<div class="container">
		<Form @submit="onSubmit" :validation-schema="schema">
			<h3>Авторизация</h3>
				<ul class="form-inputs">
					<li>
						<Field
							v-focus
							class="input"
							name="username"
							type="text"
							placeholder="Логин"
						/>
						<ErrorMessage class="ErrorMessage" name="username" />
					</li>
					<li class="password">
						<div 
							:class="(passwordIsHidden)?'password-shown':'password-hidden'" 
							@click="togglePasswordVisibility"
						></div>
						<Field
							class="input"
							name="password"
							:type="(passwordIsHidden)?'password':'text'"
							placeholder="Пароль"
						/>
						<ErrorMessage class="ErrorMessage" name="password" />
					</li>
				</ul>
			<my-button-large
				type="submit"
				style="justify-self: center;"
			>
				Войти
			</my-button-large>
			<p class="error-from-api">{{errorMessage}}</p>
			<my-loading class="loading" v-if="isLoading"/>
		</Form>
	</div>
</template>

<script>
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import MyLoadingCircle from "@/components/UI/MyLoadingCircle";
import MyButtonLarge from "@/components/UI/MyButtonLarge";
import {mapState, mapActions, mapMutations} from 'vuex';
export default {
  components: {
		MyLoadingCircle,
		MyButtonLarge,
		Form,
    Field,
		ErrorMessage
  },
	data: () => ({
    min: 6,
  }),
  methods: {
    ...mapMutations({
			setUsername: 'login/setUsername',
      setPassword: 'login/setPassword',
			togglePasswordVisibility: 'login/togglePasswordVisibility',
			setErrorMessage: 'login/setErrorMessage'
    }),
    ...mapActions({
      signIn: 'login/signIn',
    }),
		onSubmit(values) {
      this.$store.commit('login/setUsername', values.username);
      this.$store.commit('login/setPassword', values.password);
      this.$store.dispatch('login/signIn');
    }
	},
  computed: {
    ...mapState({
      isLoading: state => state.login.isLoading,
      errorMessage: state => state.login.errorMessage,
      passwordIsHidden: state => state.login.passwordIsHidden,
    }),
		schema() {
			return yup.object({
				password: yup.string().required('Пустое поле').min(this.min, 'Слишком короткий пароль	'),
				username: yup.string().required('Пустое поле'),
			});
		},
  }
}
</script>

<style scoped>
.container {
	background-color: #FF6600;
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	display: flex;
	justify-content: center;
	align-items: center;
}
h3 {
	text-align: center;
	margin-bottom: 23px;
}
form {
  display: flex;
  flex-direction: column;
	align-items: center;
	background-color: white;
	padding: 33px;
	border-radius: 19px;
	position: relative;
}
.form-inputs {
	display: flex;
  flex-direction: column;
	justify-content: space-between;
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
ul {
	list-style-type:none;
}
li {
	width: 240px;
	height: 50px;
}
my-button-large {
	justify-self: center;
}
.loading {
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	right: 0;
	left: 0;
	top: 0;
	bottom: 0;
}
.password {
	position: relative;
}
.password-hidden {
	background-image: url('~@/assets/images/password-hidden.svg');
	background-repeat: no-repeat;
	background-position: center;
	background-size: contain;
	z-index: 1;
	position: absolute;
	width: 20px;
	height: 20px;
	top: 3px;
  right: 5px;
}
.password-shown {
	background-image: url('~@/assets/images/password-shown.svg');
	background-repeat: no-repeat;
	background-position: center;
	background-size: contain;
	z-index: 1;
	position: absolute;
	width: 20px;
	height: 20px;
	top: 3px;
  right: 5px;
}
.ErrorMessage {
	font-size: 12px;
	color: red;
}
.error-from-api {
	font-size: 12px;
	color: red;
	position: absolute;
	bottom: 10px;
}
</style>
