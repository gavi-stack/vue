<template>
  <div class="gestor-de-tareas container text-center py-4">
    <h1 class="text-primary mb-3">Bienvenido a la Aplicación de Tareas con Vue</h1>
    <p class="mb-4">
      Esta aplicación te permite gestionar tus tareas de manera eficiente. Puedes añadir nuevas tareas manualmente o extraerlas desde una API.
    </p>
    <img src="../assets/logo.png" alt="Vue logo" class="vue-logo mb-4" />
    
    <h2 class="section-title bg-danger text-white py-2 px-3 rounded mb-3">Secciones de la Aplicación</h2>
    <ul class="section-list list-unstyled bg-danger p-3 rounded text-white">
      <li><strong>Añadir Tarea:</strong> Permite ingresar nuevas tareas manualmente.</li>
      <li><strong>Lista de Tareas:</strong> Muestra todas las tareas extraídas desde la API, permitiendo marcarlas como completadas o eliminarlas.</li>
      <li><strong>Vista Combinada:</strong> Combina las funcionalidades de añadir tareas manualmente y ver las tareas de la API al mismo tiempo.</li>
    </ul>
  </div>
</template>

<style scoped>
.gestor-de-tareas {
  padding: 20px;
}

.vue-logo {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

.section-title {
  background-color: #dd3535;
  color: white;
  margin-top: 40px;
}

.section-list {
  background-color: #dd1f1f;
  color: white;
}
</style>
