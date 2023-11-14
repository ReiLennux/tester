<template>
    <div>
        <h1>HOLA {{ $store.state.email }}</h1> <p>.....</p>
        
    </div>
</template>

<script>
export default{
    name:"BienvenidaComponent",
}
</script>


<style scoped>
div {
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>