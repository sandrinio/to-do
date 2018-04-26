<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md4>
      <v-card class="elevation-12">
        <v-toolbar dense dark color="indigo">
          <v-toolbar-title>Login</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field prepend-icon="person" v-model="credentials.username" label="Login" type="text"></v-text-field>
            <v-text-field prepend-icon="lock" v-model="credentials.password" label="Password" id="password" type="password" @keyup.enter="submit"></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary"
                 dark
                 @click="submit"
                 :loading="loading"
          >Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
    <v-snackbar
      :timeout="timeout"
      :top="y === 'top'"
      :bottom="y === 'bottom'"
      :right="x === 'right'"
      :left="x === 'left'"
      :multi-line="mode === 'multi-line'"
      :vertical="mode === 'vertical'"
      v-model="snackbar"
    >
      {{ snackText }}
      <v-btn flat color="pink" @click.native="snackbar = false">Close</v-btn>
    </v-snackbar>
  </v-layout>

</template>

<script>
import AuthServices from '@/services/AuthServices'

export default {
  data () {
    return {
      credentials: {
        username: '',
        password: ''
      },
      loading: false,
      snackbar: false,
      y: 'top',
      x: null,
      mode: '',
      timeout: 6000,
      snackText: ''
    }
  },
  methods: {
    submit (){
      this.loading = true
      AuthServices.login(this.credentials)
        .then((response) => {
          if(response.data.error){
            this.loading = false
            this.snackbar = true
            this.snackText = response.data.error
          }else{
            this.loading = false
            this.$store.dispatch('setToken', response.data.token)
            this.$store.dispatch('setUser', response.data.user)
            this.$router.push({
              name: 'dashboard'
            })
          }
        })
        .catch((err) => {
          this.loading = false
          console.log(err.data)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
