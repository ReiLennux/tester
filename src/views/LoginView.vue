<template>
<div>
<login-component v-if="!$store.state.email"></login-component>
<bienvenida-component v-else></bienvenida-component>
</div>
</template>
<script>
import LoginComponent from '../components/auth/LoginComponent'
import BienvenidaComponent from '@/components/auth/BienvenidaComponent.vue';
export default{
    name: "LoginView",
    components: {
        LoginComponent,
        BienvenidaComponent}
}
</script>