<template>
    <div class="container mt-5">
        <h1 class="text-center">Lista de Tareas</h1>
        <button @click="fetchTasks" class="btn btn-primary mb-3">Cargar Tareas</button>
        <div v-if="tasks.length > 0">
            <div v-for="task in tasks" :key="task.id" class="list-group mb-2">
                <div class="list-group-item d-flex justify-content-between align-items-center">
                    <h5 :style="{ textDecoration: task.completed ? 'line-through' : 'none' }">{{ task.todo }}</h5>
                    <div>
                        <span class="badge bg-success me-2">{{ task.completed ? 'Completada' : 'Pendiente' }}</span>
                        <button @click="toggleTaskCompletion(task)" class="btn btn-secondary btn-sm">
                            {{ task.completed ? 'Desmarcar' : 'Completar' }}
                        </button>
                        <button @click="deleteTask(task)" class="btn btn-danger btn-sm">Eliminar</button>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <p class="text-center">No hay tareas disponibles. Carga tareas para comenzar.</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'; // Asegúrate de tener axios instalado

export default {
    name: "TaskList",
    data() {
        return {
            tasks: [], // Almacenamiento local de las tareas traídas de la API
        };
    },
    methods: {
        // Llamada para obtener las tareas desde la API externa
        async fetchTasks() {
            try {
                const response = await axios.get('https://dummyjson.com/todos');
                this.tasks = response.data.todos; // Ajusta según la estructura de datos de la API
            } catch (error) {
                console.error("Error al cargar las tareas:", error);
            }
        },

        // Cambiar el estado de una tarea (completada/no completada)
        toggleTaskCompletion(task) {
            task.completed = !task.completed;
        },

        // Eliminar la tarea seleccionada
        deleteTask(task) {
            this.tasks = this.tasks.filter((t) => t.id !== task.id);
        },
    },
};
</script>

<style scoped>
/* Aquí pueden experimentar con estilos de tu preferencia */
</style>
