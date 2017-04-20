import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import Home from './Home.vue';
import Users from './Users.vue';

Vue.use(VueRouter);

const routes = [
  {path: '/', component: Home},
  {path: '/users/:userId', component: Users}
]

const router = new VueRouter({
    routes,
    mode: 'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
