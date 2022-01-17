import axios from "axios";
import router from "@/router/router";


export const loginModule = {
    state: () => ({
				username: '',
        password: '',
        isAuth: false,
				isLoading: false
    }),
		mutations: {
			setUsername(state, username) {
					state.username = username;
			},
			setPassword(state, password) {
					state.password = password
			},
			setLoading(state, bool) {
				state.isLoading = bool
			},
			setIsAuth(state, bool) {
					state.isAuth = bool
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
							commit('setUsername', '');
							commit('setPassword', '');
							commit('setLoading', false);
							commit('setIsAuth', true);
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


