import Vue from 'vue'
import App from './App.vue'
import { store } from './store.js'
import 'es6-promise/auto'
import firebase from "firebase";
import router from './router';

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyAl5dlJzypkon9Gc4JzlBcVI96erBfB4v4",
  authDomain: "keep-clone-2df17.firebaseapp.com",
  projectId: "keep-clone-2df17",
  storageBucket: "keep-clone-2df17.appspot.com",
  messagingSenderId: "514815983899",
  appId: "1:514815983899:web:752d33fe179282a50193be",
  measurementId: "G-X1YH4Z1740"
})

firebase.auth().onAuthStateChanged(function(user) {//eslint-disable-line no-unused-vars
  new Vue({
    store,
    router,
    render: h => h(App),
  }).$mount('#app')
})

