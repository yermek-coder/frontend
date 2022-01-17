<template>
	<div class="container">
		<form @submit.prevent>
			<h3>Авторизация</h3>
			<div class="form-inputs">
				<ul style="margin-right: 22px">
					<li>
						<my-input
							v-focus
							@update:model-value="setUsername"
							type="text"
							placeholder="Логин"
						/>
					</li>
					<li class="password">
						<div :class="(passwordIsHidden)?'password-shown':'password-hidden'" @click="togglePasswordVisibility"></div>
						<my-input
							@update:model-value="setPassword"
							:type="passwordFieldType"
							placeholder="Пароль"
						/>
					</li>
				</ul>
			</div>
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
import MyInput from "@/components/UI/MyInput";
import MyButtonLarge from "@/components/UI/MyButtonLarge";
import {mapState, mapActions, mapMutations} from 'vuex';

export default {
  components: {
    MyInput,
		MyLoadingCircle,
		MyButtonLarge
  },
	data() {
    return {
      passwordIsHidden: true,
			passwordFieldType: 'password'
    }
  },
  methods: {
    ...mapMutations({
			setUsername: 'login/setUsername',
      setPassword: 'login/setPassword',
    }),
    ...mapActions({
      signIn: 'login/signIn',
    }),
		togglePasswordVisibility(){
			this.passwordIsHidden = !this.passwordIsHidden;
			if (this.passwordIsHidden) {
				this.passwordFieldType = 'password'
			} else {
				this.passwordFieldType = 'text'
			}
		},
		test(e) {
			console.log(e);
		}
	},
  computed: {
    ...mapState({
      username: state => state.login.username,
			password: state => state.login.password,
      isAuth: state => state.login.isAuth,
      isLoading: state => state.login.isLoading
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
