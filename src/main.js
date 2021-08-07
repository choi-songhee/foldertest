import Vue from 'vue'
import App from './App.vue'
import { store } from './store.js'
import 'es6-promise/auto'
import firebase from "firebase";

Vue.config.productionTip = false

var firebaseConfig = {

}
firebase.initializeApp(firebaseConfig);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
