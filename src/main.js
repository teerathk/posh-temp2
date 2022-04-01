import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';
//const dev = process.env.NODE_ENV != 'production';
// axios.defaults.baseURL="https://posh-marketplace.plego.pro/api/";
// const url = 'http://127.0.0.1:8000'
const url = 'https://posh-marketplace.plego.pro';

axios.defaults.baseURL=url+"/api/";

//app.config.globalProperties.$assets = assets+"/src/assets";
createApp(App).use(router, axios).mount('#app')