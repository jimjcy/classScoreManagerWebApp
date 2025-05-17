import App from "./App.vue";
import router from "./router";
import colorButton from "./components/colorButton.vue";
import inputBox from "./components/inputBox.vue"
import axios from "axios";

const app = createApp(App);

app.use(router);
app.component("colorButton", colorButton);
app.component("inputBox", inputBox);
app.mount("#app");

// axios.defaults.baseURL = import.meta.env.VITE_BACKEND_ADDR;
// axios.defaults.responseType = "json";  
// axios.defaults.responseEncoding = "utf-8";
// axios.defaults.headers["Content-Type"] = "application/json";