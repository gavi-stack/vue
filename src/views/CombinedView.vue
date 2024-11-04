<template>
    <div class="container mt-5">
      <h1 class="text-center mb-4">Lista de Tareas</h1>
  
      <div v-if="tasks.length === 0" class="alert alert-info" role="alert">
        No hay tareas disponibles. ¡Agrega algunas!
      </div>
  
      <!-- Formulario para agregar nuevas tareas -->
      <div class="mb-4">
        <input 
          v-model="newTaskTitle" 
          @keyup.enter="addTask" 
          type="text" 
          class="form-control" 
          placeholder="Agregar nueva tarea" 
        />
        <button class="btn btn-primary mt-2" @click="addTask">Agregar Tarea</button>
      </div>
  
      <div class="list-group">
        <div 
          v-for="task in tasks" 
          :key="task.id" 
          class="list-group-item d-flex justify-content-between align-items-center" 
          :class="{'list-group-item-success': task.completed, 'list-group-item-danger': !task.completed && !task.completed }"
        >
          <div class="flex-grow-1" :style="{ textDecoration: task.completed ? 'line-through' : 'none' }">
            {{ task.title }}
          </div>
          <span class="badge" :class="{'bg-success': task.completed, 'bg-warning': !task.completed}">
            {{ task.completed ? 'Completada' : 'Pendiente' }}
          </span>
          <div>
            <button class="btn btn-success btn-sm me-2" @click="toggleCompletion(task)">
              <i class="bi" :class="task.completed ? 'bi-arrow-counterclockwise' : 'bi-check-circle'"></i> 
              {{ task.completed ? 'Marcar como Pendiente' : 'Marcar como Completada' }}
            </button>
            <button class="btn btn-danger btn-sm" @click="deleteTask(task.id)">
              <i class="bi bi-trash"></i> Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TaskList',
    data() {
      return {
        newTaskTitle: '', // Para almacenar el título de la nueva tarea
        tasks: [
          { id: 1, title: 'Do something nice for someone you care about', completed: false },
          { id: 2, title: 'Memorize a poem', completed: true },
          { id: 3, title: 'Watch a classic movie', completed: true },
          { id: 4, title: 'Watch a documentary', completed: false },
          { id: 5, title: 'Invest in cryptocurrency', completed: false },
          { id: 6, title: 'Contribute code or a monetary donation to an open-source software project', completed: false },
          { id: 7, title: 'Solve a Rubik\'s cube', completed: true },
          { id: 8, title: 'Bake pastries for yourself and neighbor', completed: true },
          { id: 9, title: 'Go see a Broadway production', completed: false },
        ]
      };
    },
    methods: {
      toggleCompletion(task) {
        task.completed = !task.completed;
      },
      deleteTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
      },
      addTask() {
        if (this.newTaskTitle.trim() !== '') {
          const newTask = {
            id: this.tasks.length + 1, // Generar un ID único
            title: this.newTaskTitle,
            completed: false
          };
          this.tasks.push(newTask);
          this.newTaskTitle = ''; // Limpiar el campo de entrada
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .list-group-item {
    margin-bottom: 10px; /* Espaciado entre los ítems de tarea */
  }
  </style>
  