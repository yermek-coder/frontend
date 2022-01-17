<template>
	<div class="btns-group">
		<div class="btn notifications"></div>
		<div class="btn messages"></div>
		<div
			v-if="isAuth"
			class="btn logout"
			@click = "logOut"
		></div>
  </div>
</template>

<script>
import {mapState, mapActions, mapMutations} from 'vuex';
export default {
  name: 'my-task-buttons',

	methods: {
    ...mapMutations({
			setUsername: 'login/setUsername',
      setPassword: 'login/setPassword',
			setAuth: 'login/setAuth'
    }),
    ...mapActions({
      signIn: 'login/signIn',
			logOut: 'login/logOut',
			checkAuth: 'login/checkAuth'
    }),
	},
	computed: {
    ...mapState({
      username: state => state.login.username,
			password: state => state.login.password,
      isAuth: state => state.login.isAuth,
      isLoading: state => state.login.isLoading
    })
  },
	mounted() {
    this.checkAuth();
  },
	
}

</script>

<style scoped>
	.btns-group {
		display: flex;
		margin-right: 7px;
		align-items: center;
		height: fit-content;
	}
	.btn {
		height: 28px;
		width: 28px;
		margin: 0 11px;
		background-repeat: no-repeat;
		background-size: contain;
		background-position: center;
		cursor: pointer;
	}
	.notifications {
		background-image: url('~@/assets/images/notifications.svg');
	}
	.notifications:hover {
		background-image: url('~@/assets/images/notifications-hover.svg');
	}
	.messages {
		background-image: url('~@/assets/images/messages.svg');
	}
	.messages:hover {
		background-image: url('~@/assets/images/messages-hover.svg');
	}
	.logout {
		background-image: url('~@/assets/images/logout.svg');
	}
	.logout:hover {
		background-image: url('~@/assets/images/logout-hover.svg');
	}

</style>