<template>
    <li class="nav-item dropdown">
    <a
      class="nav-link dropdown-toggle title-nav"
      href="#"
      role="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <i class="fas fa-truck-loading"></i>
      Proveedores
    </a>
    <ul class="dropdown-menu">
      <li>
        <router-link to="/ManagerComponent" class="nav-link">
          <i class="fas fa-truck-loading"></i>
          Registrar
        </router-link>
      </li>
      <li>
        <a class="dropdown-item" href="#">
          <i class="fa-solid fa-clipboard-list"></i>
          Manager</a
        >
      </li>
      <li>
        <a class="dropdown-item" href="#">
            <i class="fa-solid fa-user-plus"></i>
          Agregar</a
        >
      </li>
      
    </ul>
  </li>
</template>

<script>
export default{
    name: "CatalogoProveedoresComponent"
}
</script>

<style scoped>
.nav-color{
  background: #3B3355 !important;
  
}
.title-nav{
  color: #778da9 !important;
  font-family: 'Roboto', 'sans-serif';
  font-weight: 400;
}

.title-nav:hover{
color: white !important;
}

li a{
  color: #3B3355;
}
</style>