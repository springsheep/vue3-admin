import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './route/index.js'
//初始化css
import 'normalize.css/normalize.css'
let app = createApp(App)
app.use(router())
app.use(ElementPlus)
app.mount('#app')
