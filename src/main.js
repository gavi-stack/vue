import Vue from 'vue';
import App from './App.vue';
import router from './router';

// Importar Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Importar Bootstrap Icons (opcional)
import 'bootstrap-icons/font/bootstrap-icons.css';

Vue.config.productionTip = true;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
