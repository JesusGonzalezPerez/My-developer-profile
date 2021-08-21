import Vue from 'vue'
import App from './App.vue'

// Vuex
import Vuex from 'vuex'
Vue.use(Vuex)

// Bootstrap
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// Popper
import 'popper.js';

// VueFire 
import { firestorePlugin } from 'vuefire'
Vue.use(firestorePlugin)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
