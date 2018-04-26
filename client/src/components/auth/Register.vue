<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md6>
      <v-card class="elevation-12">
        <v-toolbar dense dark color="indigo">
          <v-toolbar-title>Register</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field
              prepend-icon="person"
              v-model="credentials.username"
              label="Login"
              type="text"
            ></v-text-field>
            <v-text-field
              prepend-icon="person"
              v-model="credentials.name"
              label="Name"
              type="text"
            ></v-text-field>
            <v-text-field
              prepend-icon="person"
              v-model="credentials.surname"
              label="Surname"
              type="text"
            ></v-text-field>
            <v-select
              prepend-icon="star"
              v-model="credentials.permission"
              label="Permission"
              :items="permissionsList"
            ></v-select>
            <v-text-field
              prepend-icon="lock"
              v-model="credentials.password"
              label="Password"
              id="password"
              type="password"
              @keyup.enter="submit"
            ></v-text-field>
            <v-text-field
              prepend-icon="lock"
              v-model="password2"
              label="Re-type Password"
              id="password2"
              type="password"
              @keyup.enter="submit"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="submit">Register</v-btn>
        </v-card-actions>
      </v-card>
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
    </v-flex>
  </v-layout>

</template>

<script>
import AuthServices from '@/services/AuthServices'
export default {
  data () {
    return {
      credentials: {
        username: '',
        password: '',
        name: '',
        surname: '',
        permission: ''
      },
        password2: '' ,
        snackbar: false,
        y: 'top',
        x: null,
        mode: '',
        timeout: 6000,
        snackText: '',
        permissionsList: [
          'Admin', 'User'
        ]
    }
  },
  methods: {
    submit (){
      if(this.credentials.password === this.password2){
        AuthServices.register(this.credentials)
        .then((res) => {
            console.log(res.data.user)
            this.$store.dispatch('setToken', res.data.token)
            this.$store.dispatch('setUser', res.data.user)
            this.$router.push({name: 'dashboard'})
        })
          .catch((error) => {
            console.log(error)
          })
      }else{
        this.snackbar = true
        this.snackText = 'პაროლი ერთმანეთს არ ემთხვევა'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
