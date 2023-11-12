<template>
  <v-app>
    <v-main>
      <nav-component></nav-component>
      <router-view/>
      
    </v-main>
  </v-app>
</template>

<script>
import NavComponent from "../src/components/nav/NavComponent.vue"
export default {
  name: 'App',

  data: () => ({
    //
  }),
  components:{NavComponent}
};
</script>
