<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary nav-color">
      <div class="container-fluid">
        <a href="#" class="navbar-brand title-app title-nav">
          <i class="bi bi-cart4 logo-color" id="logo-compras"></i>
          Compras
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggle-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto md-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active title-app title-nav" aria-current="page" href="#"
                ><i class="fa-solid fa-house-chimney"></i>
                Home</a
              >
            </li>
            <li class="nav-item">
              <router-link to="/form" class="nav-link title-app title-nav"
                ><i class="fa-solid fa-file-signature"></i>
                Captura de datos</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/form-articulos" class="nav-link title-app title-nav"
                ><i class="fa-solid fa-boxes-stacked"></i>
                Artículos</router-link
              >
            </li>


            <CatalogoProveedoresComponent></CatalogoProveedoresComponent>


            <li class="nav-item">
              <a class="nav-link disabled title-nav" aria-disabled="true">Disabled</a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="buscar"
              aria-label="Buscar"
              
            />
            <button class="btn btn-outline-success btnBuscar" type="submit">
              Buscar
            </button>
          </form>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
import CatalogoProveedoresComponent from '@/components/nav/catalogo/CatalogoProveedoresComponent'
  export default{
    name: "navComponent",
    components:{CatalogoProveedoresComponent}
  }
  
  </script>
  
  
  <style scoped>
  .nav-color{
    background: #0d1b2a !important;
    
  }
  .title-nav{
    color: #778da9 !important;
    font-family: 'Roboto', 'sans-serif';
    font-weight: 400;
  }
  
  .title-nav:hover{
  color: white !important;
  }

  .btnBuscar{
    border-color:#778da9 ;
    color: #778da9;
  }
  .btnBuscar:hover{
    background-color: #778da9;
    border-color: #778da9;
  }
  </style>