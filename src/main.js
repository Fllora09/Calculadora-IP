import { createApp } from "vue";
import App from "./App.vue";

//Importamos Bootstrap
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

//Importamos SweetAlert
import "sweetalert2/dist/sweetalert2.min.css";
import Swal from "sweetalert2";
window.Swal = Swal;

createApp(App).mount("#app");
