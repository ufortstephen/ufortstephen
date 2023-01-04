import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import './index.css'

// Importing Layouts
import AuthLayout from './layouts/Auth.vue'


import './assets/tailwind.css'
import 'tw-elements';



const app = createApp(App)
app.component('auth-layout', AuthLayout);

app.use(router)
app.mount('#app')
