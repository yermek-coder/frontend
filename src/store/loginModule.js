import axios from "axios";
import router from "@/router/router";


export const loginModule = {
    state: () => ({
				username: '',
        password: '',
        isAuth: false,
				isLoading: false,
				passwordIsHidden: true,
				passwordFieldType: "password"
    }),
		mutations: {
			setUsername(state, event) {
					state.username = event.target.value
			},
			setPassword(state, event) {
					state.password = event.target.value
			},
			resetUserInfo(state) {
				state.password = '',
				state.username = ''
			},
			setLoading(state, bool) {
				state.isLoading = bool
			},
			setIsAuth(state, bool) {
					state.isAuth = bool
			},
			togglePasswordVisibility(state){
				state.passwordIsHidden = !state.passwordIsHidden;
			}
		},
    actions: {
        async signIn({state, commit}) {
					try {
							commit('setLoading', true);
							const response = await axios.post('api-token-auth/', {
									username: state.username,
									password: state.password
							});
							const token = response.data.token;
							localStorage.setItem('token', token);
							axios.defaults.headers.get['Authorization'] = `Token ${token}`;
					} catch (e) {
						alert('Error logging')
					} finally {
							commit('setLoading', false);
							commit('setIsAuth', true);
							commit('resetUserInfo');
							router.push('/')
					}
        },
				logOut({commit}) {
					try {
						localStorage.removeItem('token');
						delete axios.defaults.headers.get['Authorization'];
					} catch (e) {
						alert('Error logging out')
					} finally {
						router.push('/login');
						commit('setIsAuth', false);
					}
				},
				checkAuth({commit}) {
					let tokencheck = localStorage.getItem('token');
					if (tokencheck) {
						commit('setIsAuth', true);
					} else {
						commit('setIsAuth', false);
					}
				}
    },
    namespaced: true
}


