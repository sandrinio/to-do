<template>
<div v-if="this.$route.path !== '/login'">
<v-navigation-drawer
    fixed
    v-model="drawer"
    app
    :clipped="$vuetify.breakpoint.lgAndUp"

  >
    <v-list dense>
      <v-list-tile @click="navigateTo({name: 'dashboard'})">
        <v-list-tile-action>
          <v-icon>home</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Home</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile @click="navigateTo({name: 'register'})">
        <v-list-tile-action>
          <v-icon>contact_mail</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Contact</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
  <v-toolbar color="indigo" dark fixed app :clipped-left="$vuetify.breakpoint.lgAndUp">
    <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    <v-toolbar-title @click="navigateTo({path: '/'})" class="header-title">Todo</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-menu offset-y open-on-hover>
        <v-btn flat dark slot="activator">{{this.$store.state.user.name}} {{this.$store.state.user.surname}}</v-btn>
        <v-list>
          <v-list-tile v-for="navItem in navItems" @click="userMenu(navItem.title)" :key="navItem.title">
            <v-list-tile-title>{{navItem.title}}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar-items>
  </v-toolbar>
</div>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      navItems: [
        {
          title: 'Logout'
        },
        {
          title: 'Register'
        }
      ]
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    userMenu(e) {

      if(e === 'Logout'){
        this.$store.dispatch('setToken', null)
        this.$store.dispatch('setUser', null)
        this.$router.push({
          path: '/login'
        })
      }else{
        this.$router.push({name: 'register'})
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .header-title {
   cursor: pointer;
 }
</style>
