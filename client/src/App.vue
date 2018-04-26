<template>
  <div id="app">
    <v-app id="inspire">
      <page-header></page-header>
      <v-content>
        <v-container fluid>
          <router-view/>
        </v-container>
      </v-content>
      <page-footer></page-footer>
    </v-app>
  </div>
</template>

<script>
import PageHeader from '@/components/partials/Header.vue'
import PageFooter from '@/components/partials/Footer.vue'

export default {
  name: 'App',
  data () {
    return {

    }
  },
  components: {
    PageHeader,
    PageFooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
