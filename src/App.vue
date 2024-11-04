<template>
  <div id="app" class="d-flex vh-100">
    <!-- Barra lateral -->
    <div class="sidebar bg-light p-2 border-end">
      <router-link class="navbar-brand mb-3 d-flex align-items-center" to="/" title="Ir al inicio">
        <img src="@/assets/logo.png" alt="Vue logo" class="vue-logo me-2" style="width: 30px; height: 30px;" />
        <span>Gestor de Tareas</span>
      </router-link>

      <!-- Menú de opciones -->
      <ul class="nav flex-column">
        <li class="nav-item">
          <router-link class="nav-link p-2 mb-1 text-center shadow-sm rounded bg-primary text-white" to="/addtask" title="Añadir tarea">
            Añadir Tarea
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link p-2 mb-1 text-center shadow-sm rounded bg-success text-white" to="/tasklist" title="Ver lista de tareas">
            Lista de Tareas
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link p-2 text-center shadow-sm rounded bg-info text-white" to="/combinedview" title="Ver vista combinada">
            Vista Combinada
          </router-link>
        </li>
      </ul>
    </div>

    <!-- Contenido principal -->
    <div class="content flex-grow-1 p-3 bg-light">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.sidebar {
  min-width: 180px; /* Ancho reducido para la barra lateral */
}

.sidebar .navbar-brand {
  font-size: 1em; /* Tamaño reducido de la fuente */
  font-weight: bold;
}

.nav-link {
  font-size: 0.9rem; /* Tamaño reducido de la fuente */
  padding: 0.5rem; /* Tamaño reducido del padding */
  border-radius: 6px;
}

.content {
  overflow-y: auto; /* Permite desplazamiento vertical en contenido largo */
}
</style>
