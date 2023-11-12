<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <v-btn
                outlined
                color="indigo"
                class="pa-1 ml-auto ma-1 d-flex align-end flex-column"
                @click ="navegarRegistro"
                >
                <v-icon dark>
                    mdi-plus
                </v-icon>
                Agregar Nuevo
                </v-btn>
                <v-card class="mx-auto"
                max-width="100%"
                elevation="6"
                >
                    <v-card-text>
                        <div class="letter text-h4 text-primary">Administración de  Proveedores</div>
                        <p class="letter">Filtro de búsqueda</p>
                    </v-card-text>
                </v-card>
            </div>
        </div>
        <TablaComponent></TablaComponent>
    </div>
</template>

<script>
import TablaComponent from './TablaComponent.vue';

export default{
    name: "ManagerComponent",
    components: { TablaComponent },
    methods: {
        navegarRegistro(){
            this.$router.push("/RegistrarProveedoresComponent")
        }
    }
}
</script>

<style>
.letter{
    font-family: 'Roboto',sans-serif;
}

</style>