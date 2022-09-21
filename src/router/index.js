import { createRouter, createWebHistory } from 'vue-router'
import BasicMathView from '../views/BasicMathView.vue'
import StringAppView from '../views/StringAppView.vue'
import HomeView from '../views/Dashboard.vue'
import VuetifyView from '../views/Vuetify.vue'
import AboutMeView from '../views/AboutMe.vue'
import AxiosDemoView from '../views/AxiosDemo.vue'
import UserCreateView from '../views/UserCreate.vue'
import signInView from '../views/SignIn.vue'
import { getAuth, onAuthStateChanged } from "firebase/auth";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/stringApp',
      name: 'StringAppView',
      component: StringAppView,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/basicMath',
      name: 'basicMath',
      component: BasicMathView,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/vuetify',
      name: 'vuetify',
      component: VuetifyView,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/aboutme',
      name: 'aboutme',
      component: AboutMeView,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/axiosdemo',
      name: 'axiosdemo',
      component: AxiosDemoView,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/userCreate',
      name: 'userCreate',
      component: UserCreateView
    },
    {
      path: '/signIn',
      name: 'signIn',
      component: signInView
    },

  ]
})

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    );
  });
};
router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next();
    } else {
      //playFailed();
      next("/signIn");
    }
  } else {
    next();
  }
});
export default router
