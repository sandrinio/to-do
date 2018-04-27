<template>
  <v-flex xs12>
    <h4>New</h4>
    <v-container grid-list-md class="elevation-3 background">
      <v-layout wrap>
        <v-flex xs12>
          <v-text-field
            label="Title"
            required
            v-model="title"
          ></v-text-field>
        </v-flex>
        <v-flex xs12>
          <v-text-field
            label="Description"
            multi-line
            v-model="body"
          ></v-text-field>
        </v-flex>
        <v-flex xs12 md6 sm4>
          <v-menu
            ref="dateMenu"
            lazy
            :close-on-content-click="false"
            v-model="dateMenu"
            transition="scale-transition"
            offset-y
            full-width
            :nudge-right="40"
            min-width="290px"
            :return-value.sync="date"
          ><v-text-field
              slot="activator"
              label="Due Date"
              v-model="date"
              prepend-icon="event"
              readonly
            ></v-text-field>
            <v-date-picker v-model="date" @input="$refs.dateMenu.save(date)"></v-date-picker>
          </v-menu>
        </v-flex>
        <v-flex xs12 md6 sm4>
          <v-menu
            ref="timeMenu"
            lazy
            :close-on-content-click="false"
            v-model="timeMenu"
            transition="scale-transition"
            offset-y
            full-width
            :nudge-right="40"
            format="ampm"
            max-width="290px"
            min-width="290px"
            :return-value.sync="time"
          >
            <v-text-field
              slot="activator"
              label="Due Time"
              v-model="time"
              prepend-icon="access_time"
              readonly
            ></v-text-field>
            <v-time-picker v-model="time" @change="$refs.timeMenu.save(time)"></v-time-picker>
          </v-menu>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              @click="submit"
              :loading="loading"
            >Submit</v-btn>
          </v-card-actions>
        </v-flex>
      </v-layout>
    </v-container>
  </v-flex>
</template>

<script>
  import TodoServices from '@/services/TodoServices'

export default {
  props: ['createdTodo'],
  data: () => ({
    loading: false,
    title: '',
    body: '',
    dateMenu: '',
    timeMenu: '',
    date: null,
    time: null,
    status: true
  }),
  methods: {
    submit () {
      this.loading = true
      const newTodo = {
        title: this.title,
        body: this.body,
        status: this.status,
        deadline: {
          date: this.date,
          time: this.time
        },
        author: this.$store.state.user,
        projectId: this.$route.params.id
      }
      TodoServices.newTask(newTodo)
        .then((res) => {
          if(res.data.error){
            console.log(res.data.error)
          }else{
            this.loading = false
            const data = res.data.todo
            const toggleComp = {
              toggleComp: true
            }
            this.createdTodo.push(toggleComp)
            this.createdTodo.push(data)
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
  h4 {
    color: #cd0000;
    font-size: 34px;
    letter-spacing: -2px;
    text-align: left;
  }
  .list {
    color: #555;
    font-size: 18px;
    padding: 0 !important;
    /*width: 500px;*/
    font-family: courier, monospace;
    border: 1px solid #dedede;
  }
  .list li {
    list-style: none;
    border-bottom: 1px dotted #ccc;
    text-indent: 15px;
    height: auto;
    padding: 5px;
    text-transform: capitalize;
  }
  .list li:hover {
    background-color: #f0f0f0;
    -webkit-transition: all 0.2s;
    -moz-transition:    all 0.2s;
    -o-transition:      all 0.2s;
  }
  .lines {
    border-left: 2px solid #ffaa9f;
    /*border-right: 2px solid #ffaa9f;*/
    /*width: 2px;*/
    /*float: left;*/
    /*height: 500px;*/
    margin-left: 40px;
  }
  .background {
    padding: 20px;
    background-color: white;
  }
</style>
