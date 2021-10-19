import { createApp } from 'vue'
import App from './app.vue'
import { Icon } from '@dd-plus/components/icon'

const app = createApp(App)
// @ts-ignore
app.use(Icon)
app.mount('#app')
