<template>
    <div>
        <h1>HOLA {{ $store.state.email }}</h1> <p>.....</p>
        <p>token: {{ $store.state.token }}</p>
    </div>
</template>

<script>
export default{
    name:"BienvenidaComponent",
    mounted() {
this.$store.commit('initializeStore');

}

}
</script>


<style scoped>
div {
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>