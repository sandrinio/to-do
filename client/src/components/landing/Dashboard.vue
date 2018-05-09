<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm10 md10>
      <v-card class="elevation-12">
        <v-toolbar dense dark color="indigo">
          <v-toolbar-title>Projects</v-toolbar-title>
        </v-toolbar>
        <v-card-title>
          <v-btn color="primary" small dark @click="navigateTo({name: 'newProject'})">New Project</v-btn>
          <v-spacer></v-spacer>
          <v-text-field
            append-icon="search"
            label="Search"
            single-line
            hide-details
            v-model="search"
          ></v-text-field>
        </v-card-title>
        <v-card-text>
          <v-data-table
            :headers="headers"
            :search="search"
            :loading="loading"
            :items="items"
            class="elevation-1"
          ><v-progress-linear slot="progress" color="blue" indeterminate></v-progress-linear>
            <template slot="items" slot-scope="props">
                <td @click="showProject(props.item._id)" class="pointer">{{ props.item.projectName }}</td>
                <td :class="props.item.phase">{{ props.item.phase }}</td>
                <td class="text-xs-left">{{ props.item.startDate }}</td>
                <td class="text-xs-left">{{ props.item.finishDate }}</td>
                <!--<td class="text-xs-left">{{ props.item.todos.length }}</td>-->
                <td class="text-xs-left"><v-chip :color="props.item.status" small outline>{{ props.item.status }}</v-chip></td>
            </template>
            <v-alert slot="no-results" :value="true" color="error" icon="warning">
              Your search for "{{ search }}" found no results.
            </v-alert>
          </v-data-table>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import ProjectServices from '@/services/ProjectServices'

export default {
  data: () => ({
    pagination: {
      sortBy: 'status'
    },
    search: '',
    selected: [],
    startDateMenu: '',
    headers: [
      {
        text: 'Project Name',
        align: 'left',
        value: 'name'
      },
      { text: 'Phase', value: 'phase' },
      { text: 'Start Date', value: 'start' },
      { text: 'Planned Finish', value: 'finish' },
      // { text: 'Tasks', value: 'tasks' },
      { text: 'Status', value: 'status' }
    ],
    items: [],
    loading: true
  }),
  methods: {
    navigateTo(route){
      this.$router.push(route)
    },
    showProject(id){
      this.$router.push({name: 'showProject', params: {id: id}})
    }
  },
  created () {
    ProjectServices.projectsGetter()
    .then((res) => {
      this.loading = false
      this.items = res.data.data
    })
    .catch((err) => {
      this.loading = false
      console.log(err.data)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pointer:hover {
  cursor: pointer;
  color: #cd0000;
  font-weight: 600;
}
</style>
