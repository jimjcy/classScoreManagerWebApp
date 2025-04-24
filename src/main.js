import App from './App.vue'
import router from './router'
import colorButton from './components/colorButton.vue'

const app = createApp(App)

app.use(router)
app.component("colorButton", colorButton);
app.mount('#app')
