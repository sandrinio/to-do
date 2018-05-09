<template>
  <v-container grid-list-md>
    <v-layout>
    <v-flex xs12>
      <h4 @click="newTodo" class="pointer">Tasks</h4>
      <div class="lines"></div>
        <ul class="list elevation-3">
          <li class="lines" v-for="(item, index) in items">
            <v-btn icon @click="completeTask(item, index)">
            <v-icon color="green">done</v-icon>
            </v-btn>
            <span class="pointer" @click="todoSelected(item)">{{item.title}}</span>
            <span class="right"> <v-icon>date_range</v-icon>{{item.deadline.date.slice(5)}}</span>
          </li>
        </ul>
    </v-flex>
      <Todo-Details v-if="todoDetailsComponent" :selected="selected" :edited="edited"></Todo-Details>
      <New-Task-Component xs12 v-if="newTodoComponent" :createdTodo="createdTodo"></New-Task-Component>
    </v-layout>
  </v-container>
</template>

<script>
  import TodoServices from '@/services/TodoServices'
  import TodoDetails from '@/components/todos/Show'
  import NewTaskComponent from '@/components/todos/New'

export default {
  components: {TodoDetails, NewTaskComponent},
  data: () => ({
    newTodoComponent: false,
    todoDetailsComponent: false,
    headers: [
      {
        text: 'Body',
        align: 'left',
        sortable: false,
        value: 'name'
      },
      { text: 'Reg. Date', value: 'regDate' },
      { text: 'Deadline', value: 'deadline' },
      { text: 'Status', value: 'status' }
    ],
    items: [],
    loading: false,
    selected: [],
    edited: [],
    createdTodo: []
  }),
  watch: {
    createdTodo (e){
      if(this.createdTodo[0].toggleComp){
        this.newTodoComponent = false
        this.items.push(this.createdTodo[1])
      }
    },
    edited () {
      if(this.edited[0] === 'done'){
        this.todoDetailsComponent = false
      }
    }
  },
  methods: {
    todoSelected (item) {
      this.selected = item
      this.newTodoComponent = false
      this.todoDetailsComponent = true
    },
    newTodo () {
      this.newTodoComponent = true
      this.todoDetailsComponent = false
    },
    completeTask (item, index) {
      this.loading = true
      TodoServices.deleteTask(item)
        .then((res) => {
          this.loading = false
          this.items.splice(index, 1);
        })
    }
  },
  created () {
    TodoServices.tasksGetter({id: this.$route.params.id})
      .then((res) => {
        this.items = res.data.todos
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
</script>

<style scoped>

  .pointer:hover {
    cursor: pointer;
    text-decoration: underline;
    color: #cd0000;
  }

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
</style>
