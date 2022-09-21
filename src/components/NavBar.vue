<template>
  <nav>
    <v-toolbar app>
      <v-app-bar-nav-icon @click='toggleDrawer'></v-app-bar-nav-icon>
      <v-toolbar-title>
        <span>Pasco, Nico Martin M.</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- dropdown menu -->
      <v-menu open-on-hover>
        <template v-slot:activator="{ props }">
          <v-btn color="red" v-bind="props">
            Dropdown
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="(item, index) in items" :key="index" router :to="item.path" :prepend-icon="item.icon">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn @click="handleSignOut" v-if="isLoggedIn">
        <span>Sign Out</span>
      </v-btn>


    </v-toolbar>

    <v-navigation-drawer app v-model="drawer">
      <v-list-item v-for="item in items" :key="item.title" router :to="item.path" :prepend-icon="item.icon">
        <v-list-item-title>{{ item.title }}</v-list-item-title>

      </v-list-item>

    </v-navigation-drawer>
  </nav>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "vue-router";
//import Swal from "sweetalert2";
const router = useRouter();
const isLoggedIn = ref(false);
const drawer = ref(false)

const items = ref([
  { title: 'Dashboard', icon: 'mdi-view-dashboard', path: '/' },
  { title: 'Math', icon: 'mdi-plus-one', path: '/basicMath' },
  { title: 'String App', icon: 'mdi-help-box', path: '/stringApp' },
  { title: 'Vuetify', icon: 'mdi-vuejs', path: '/vuetify' },
  { title: 'About Me', icon: 'mdi-account', path: '/aboutme' },
  { title: 'Quiz App', icon: 'mdi-pencil', path: '/axiosdemo' },
  { title: 'Create User', icon: 'mdi-account', path: '/userCreate' },
  { title: 'Sign In', icon: 'mdi-account', path: '/signIn' },
])

let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
      const info = user.email;
      console.log(info);
    } else {
      isLoggedIn.value = false;
      console.log("not logged in");
    }
  });
});
function toggleDrawer() {
  return (drawer.value = !drawer.value);
}
const handleSignOut = () => {
  signOut(auth).then(() => {
    logOutSuccess();
    router.push("/signIn");
  });
};
function logOutSuccess() {
  // Swal.fire({
  //   position: "center",
  //   icon: "success",
  //   title: "You logged out",
  //   text: "Thank you for playing",
  //   showConfirmButton: false,
  //   timer: 3000,
  // });
}



</script>