<template>
	<div class="container">
		<form @submit.prevent>
			<h3>Авторизация</h3>
				<ul style="margin-right: 22px" class="form-inputs">
					<li>
						<input
							v-focus
							class="input"
							@input="setUsername"
							type="text"
							placeholder="Логин"
						/>
					</li>
					<li class="password">
						<div 
							:class="(passwordIsHidden)?'password-shown':'password-hidden'" 
							@click="togglePasswordVisibility"
						></div>
						<input
							class="input"
							@input="setPassword"
							:type="(passwordIsHidden)?'password':'text'"
							placeholder="Пароль"
						/>
					</li>
				</ul>
			<my-button-large
				style="justify-self: center;"
				@click="signIn"
			>
				Войти
			</my-button-large>
			<my-loading class="loading" v-if="isLoading"/>
		</form>
	</div>
</template>

<script>
import MyLoadingCircle from "@/components/UI/MyLoadingCircle";
import MyButtonLarge from "@/components/UI/MyButtonLarge";
import {mapState, mapActions, mapMutations} from 'vuex';

export default {
  components: {
		MyLoadingCircle,
		MyButtonLarge
  },
  methods: {
    ...mapMutations({
			setUsername: 'login/setUsername',
      setPassword: 'login/setPassword',
			togglePasswordVisibility: 'login/togglePasswordVisibility'
    }),
    ...mapActions({
      signIn: 'login/signIn',
    }),
		log(e) {
			console.log(e)
		}
	},
  computed: {
    ...mapState({
      username: state => state.login.username,
			password: state => state.login.password,
      isAuth: state => state.login.isAuth,
      isLoading: state => state.login.isLoading,
      passwordIsHidden: state => state.login.passwordIsHidden,
    })
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
  flex-direction: row;
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
	margin-bottom: 30px;
	width: 240px;
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
	top: 50%;
  right: 0;
	transform: translate(-50%, -50%);
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
	top: 50%;
  right: 0;
	transform: translate(-50%, -50%);
}
</style>
