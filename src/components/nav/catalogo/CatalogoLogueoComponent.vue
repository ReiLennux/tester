<template>
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle title-nav" href="#" role="button" data-bs-toggle="dropdown"
            aria-expanded="false">
            
            <i class="fa-solid fa-circle-user"></i>
            Cuenta
        </a>
        <ul class="dropdown-menu">
            <li v-if="!$store.state.email">
                <router-link to="#" class="nav-link">
                    <i class="fa-solid fa-user-plus"></i>
                    Registrarse
                </router-link>
            </li>
            <li v-if="!$store.state.email">
                <router-link to="/Login"  class="nav-link">
                
                    <i class="fa-solid fa-user"></i>
                    Iniciar Sesión
                </router-link>
            </li>
            <li v-if="$store.state.email" @click.prevent="logout">
                <a class="dropdown-item" href="#">
                    <i class="fa-solid fa-right-to-bracket"></i>
                    Salir</a>
            </li>
        </ul>
    </li>
</template>

<script>
export default{
    name: "CatalogoLogueoComponent",
    methods: {
        logout(){
            this.$store.commit("logout");
        }
    },
    mounted (){
        this.$store.commit("initializeStore");
    }
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