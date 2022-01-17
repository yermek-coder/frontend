import { createApp } from 'vue'
import App from './App'
import components from '@/components/UI';
import router from "@/router/router";
import directives from '@/directives';
import store from '@/store';
import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:8000/';
axios.defaults.headers.get['Authorization'] = `Token ${localStorage.token}`;
// axios.defaults.headers.post['Authorization'] = `Token ${localStorage.token}`;


const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})

directives.forEach(directive => {
    app.directive(directive.name, directive)
})

app
    .use(router)
    .use(store)
    .mount('#app');

