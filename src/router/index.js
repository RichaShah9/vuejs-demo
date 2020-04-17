import Vue from 'vue'
import Router from 'vue-router'

import TodoApp from "../components/TodoApp.vue";
import Contact from "../components/Contact.vue";
import About from "../components/About.vue";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TodoApp',
      component: TodoApp
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})