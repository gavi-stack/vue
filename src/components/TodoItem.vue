<template>
    <!-- Contenedor principal del ítem de tarea -->
    <div class="card mb-3">
        <div class="card-body">
            <!-- Contenedor del título y el estado de la tarea -->
            <div class="d-flex justify-content-between align-items-center">
                <!-- Muestra el título de la tarea y aplica un estilo tachado si la tarea está completada -->
                <h5 :style="{ textDecoration: completed ? 'line-through' : 'none' }">
                    {{ title }}
                </h5>

                <!-- Muestra si la tarea está Completada o Pendiente -->
                <span class="badge" :class="{'bg-success': completed, 'bg-warning': !completed}">
                    {{ completed ? 'Completada' : 'Pendiente' }}
                </span>
            </div>

            <!-- Contenedor de botones de acción -->
            <div class="mt-3">
                <!-- Botón para marcar la tarea como completada o pendiente -->
                <button class="btn btn-primary me-2" @click="$emit('toggle-completion')">
                    Marcar como {{ completed ? 'Pendiente' : 'Completada' }}
                </button>

                <!-- Botón para eliminar la tarea de la lista -->
                <button class="btn btn-danger" @click="$emit('delTodo')">
                    Eliminar
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TodoItem',
    props: {
        title: String,      // Título de la tarea
        completed: Boolean, // Estado de la tarea (completada o pendiente)
    }
}
</script>

<style scoped>

.card {
    transition: transform 0.2s; /* Efecto de transición al pasar el mouse */
}

.card:hover {
    transform: scale(1.02); /* Aumentar ligeramente el tamaño al pasar el mouse */
}
</style>
