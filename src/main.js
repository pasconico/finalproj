import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { initializeApp } from 'firebase/app'

loadFonts()

const firebaseConfig = {
  apiKey: "AIzaSyBwxFUyV_8b0faaErhVP7IRZIC5ROk2OjU",
  authDomain: "finallab1-8be03.firebaseapp.com",
  projectId: "finallab1-8be03",
  storageBucket: "finallab1-8be03.appspot.com",
  messagingSenderId: "1071671251010",
  appId: "1:1071671251010:web:3f1f5307e84e6b07bc9ddb",
  measurementId: "G-72932HBL68"
};

// Initialize Firebase
initializeApp(firebaseConfig);

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')
