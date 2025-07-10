import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createStore } from "vuex"; // Or your store import
import Notifications from "@kyvg/vue3-notification"; // Vue 3 alternative
import "./assets/css/main.css";

const app = createApp(App);
const store = createStore({ /* your store config */ });

app.use(router);
app.use(store);
app.use(Notifications);

app.mount("#app");