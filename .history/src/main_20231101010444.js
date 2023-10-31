import "bootstrap/dist/css/bootstrap.css";
import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/js/bootstrap.js";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import "./assets/scss/index.scss";
import router from "./router.js";
import { store } from "./stores/store";
import "animate.css";
import axios from "axios";
import VueAxios from "vue-axios";
import VueApexCharts from "vue-apexcharts";

library.add(fas, fab, far);

const app = createApp(App);

app.use(VueAxios, axios);
app.use(router);
app.use(store);
app.component("apexchart", VueApexCharts);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
