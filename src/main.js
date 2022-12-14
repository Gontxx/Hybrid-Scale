import { createApp } from 'vue'
import App from './App.vue'
import router from './js/router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './common/font.css'
import './common/style.css'
import store from "@/js/storage/store";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(ElementPlus).use(router).use(store).mount('#app')
