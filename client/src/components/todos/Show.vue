<template>
 <v-flex xs12>
   <h4 v-if="editMode">{{header}}</h4>
   <h4 v-if="!editMode">{{header2}}</h4>
     <div class="elevation-3 white">
       <v-toolbar dense flat class="white">
         <v-spacer></v-spacer>
         <v-btn icon @click="editMode = !editMode">
           <v-icon color="orange">edit</v-icon>
         </v-btn>
       </v-toolbar>
       <div class="background" v-if="editMode">
         <h3>Title: </h3><p>{{selected.title}}</p>
         <h3>Description: </h3>
         <p>{{selected.body}}</p>
         <h3>Due Date:</h3>
         <p>{{selected.deadline.date}} / {{selected.deadline.time}}</p>
       </div>
     </div>
   <v-container grid-list-md class="elevation-3 background" v-if="!editMode">
     <v-layout wrap>
       <v-flex xs12>
         <v-text-field
           label="Title"
           required
           v-model="selected.title"
         ></v-text-field>
       </v-flex>
       <v-flex xs12>
         <v-text-field
           label="Description"
           multi-line
           v-model="selected.body"
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
           :return-value.sync="selected.deadline.date"
         ><v-text-field
           slot="activator"
           label="Due Date"
           v-model="selected.deadline.date"
           prepend-icon="event"
           readonly
         ></v-text-field>
           <v-date-picker v-model="selected.deadline.date" @input="$refs.dateMenu.save(selected.deadline.date)"></v-date-picker>
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
           :return-value.sync="selected.deadline.time"
         >
           <v-text-field
             slot="activator"
             label="Due Time"
             v-model="selected.deadline.time"
             prepend-icon="access_time"
             readonly
           ></v-text-field>
           <v-time-picker v-model="selected.deadline.time" @change="$refs.timeMenu.save(selected.deadline.time)"></v-time-picker>
         </v-menu>
         <v-card-actions>
           <v-spacer></v-spacer>
           <v-btn
             color="success"
             @click="save"
             :loading="loading"
           >Save</v-btn>
         </v-card-actions>
       </v-flex>
     </v-layout>
   </v-container>
 </v-flex>
</template>

<script>
  import TodoServices from "../../services/TodoServices";
export default {
  props: ['selected', 'edited'],
  data: () => ({
    header: 'Details',
    header2: 'Edit Mode',
    editMode: true,
    loading: false,
    dateMenu: false,
    timeMenu: false
  }),
  methods: {
    save () {
      this.loading = true
      const data = []
      data.push(this.selected)
      data.push(this.$store.state.user)
      TodoServices.modifyTask(data)
        .then((res) => {
          if(res.data.error){
            this.loading = false
            console.log(res.data.error)
          }else{
            this.loading = false
            this.edited.push('done')
          }
        })
    }
  },
  created () {
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
    background-color: white;
    padding: 0px 15px 30px 15px;
  }
</style>
