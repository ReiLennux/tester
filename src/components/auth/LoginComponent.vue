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
                    <form @submit.prevent="Submit">
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
                                    v-model="usuario.contraseña"
                                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                    outlined
                                    :type="show1 ? 'text' : 'password'"
                                    name="input-10-1"
                                    label="Contraseña"
                                    counter
                                    @click:append="show1 = !show1"
                                    dense
                                ></v-text-field>
                            </div>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn outlined class="ma-1 pa-4 ml-auto" color="indigo" @click="Submit">
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
import axios from 'axios';
import Swal from 'sweetalert2'


export default {
    name: "LoginComponent",
    data() {
        return {
            usuario: {
                nombreUsuario: "",
                contraseña: "",
            },
            show1: false
        }
    },
    methods: {
        
        validateUser() {

            axios.post('http://localhost:5038/api/usuarios/login', this.usuario)
                .then(response => {
                    if (response.data.success) {
                        this.$store.commit('login', this.usuario.nombreUsuario);
                        this.errorMessage = "";
                    } else {
                        this.errorMessage = "Usuario o contraseña incorrectos";
                    }
                })
                .catch(error => {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Parece que la contraseña o el usuario es incorrecta",
                        footer: 'o tal vez no eres quien dices ser...'
                    });
                });
        },
        Submit() {
            this.validateUser();
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