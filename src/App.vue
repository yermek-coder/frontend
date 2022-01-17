<template>
  <navbar v-if="isAuth"></navbar>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import {mapState, mapActions, mapMutations} from 'vuex';

export default {
  components: {
    Navbar
  },
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

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;700&display=swap');
@import url('https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
	font-family: Open Sans, sans-serif;
  padding: 40px;
}
</style>
