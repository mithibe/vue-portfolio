import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Projects from './views/Projects.vue'

// Create a Pinia instance
const pinia = createPinia()

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/projects', component: Projects }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Create the Vue app with Pinia
createApp(App)
  .use(pinia) // Use Pinia
  .use(router)
  .mount('#app')
