import '@/styles/index.scss'
import 'element-plus/theme-chalk/src/message.scss'
import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import { GetterTypes } from './store/types'
import router from './router'
import { createI18nWithLocale } from '@/locale'

const i18n = createI18nWithLocale(store.getters[GetterTypes.APP.LANGUAGE])

const app = createApp(App)
app.use(store)
app.use(i18n)
app.use(router)

app.mount('#app')
