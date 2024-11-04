import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AddTask from '../views/AddTask.vue';
import TaskList from '../views/TaskList.vue'; // Asegúrate de que esta importación sea correcta
import CombinedView from '../views/CombinedView.vue'; // Asegúrate de que esta importación sea correcta

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/addtask',
    name: 'AddTask',
    component: AddTask
  },
  {
    path: '/tasklist',
    name: 'TaskList', // Ruta para la lista de tareas
    component: TaskList // Asegúrate de que esto corresponda al componente de la lista de tareas
  },
  {
    path: '/combinedview',
    name: 'CombinedView', // Ruta para la vista combinada
    component: CombinedView // Asegúrate de que esto corresponda al componente de la vista combinada
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
