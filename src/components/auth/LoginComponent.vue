<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                <v-card
                elevation="4"
                width="500"
                class="mx-auto justify-md-center float-right">
                    <v-toolbar dark class="nav-color">
                        <v-toolbar-title class="title-nav-bar-text">
                            <i class="fas fa-user-lock"></i> &nbsp;
                            BIENVENIDO !
                        </v-toolbar-title>
                    </v-toolbar>
                    <form @submit.prevent="handleForm">
                        <v-card-text>
                            <v-text-field
                            label="Nombre de usuario"
                            outlined
                            v-model="usuario.nombreUsuario"
                            color="indigo"
                            clearable
                            dense
                            class="pa-1"
                            ></v-text-field>
                            <div class="text--primary">
                                <v-text-field
                                label="Contraseña"
                                outlined
                                v-model="usuario.contraseña"
                                color="indigo"
                                clearable
                                dense
                                class="pa-1"
                                type="password"
                                ></v-text-field>
                            </div>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn outlined class="ma-1 pa-4 ml-auto" color="indigo" @click="validateUser">
                            <i class="fas fa-sign-in-alt"></i> &nbsp;
                            Login
                            </v-btn>
                        </v-card-actions>
                    </form>
                </v-card>
            </div>
        </div>
    </div>
</template>
<script>


export default {
    name: "LoginComponent",
    data() {
        return {
            usuario: {
                nombreUsuario: "",
                contraseña: "",
            }
        }
    },
    methods: {
        validateUser(){
            console.log(this.usuario.username+": "+this.usuario.contraseña);
        }
    }
}
</script>

<style>

.nav-color {
    background-color: #073769 !important;
}
.title-nav {
    color: white !important;
    font-family: "Roboto", "sans-serif";
    font-weight: 400;
}
.title-nav-bar-text {
    font-family: "Roboto", "sans-serif";
    font-weight: 300;
}

</style>