<template>
  <v-container>
    <v-layout class="grid-list-md">
      <v-flex xs12 md6>
        <div style="display: inline-block">
          <h3 class="display-3 left">{{project.projectName}}</h3>
          <v-btn icon @click="mode">
            <v-icon color="orange">edit</v-icon>
          </v-btn>
        </div>

        <table v-if="!editMode">
          <tr>
            <td><strong>Project Phase: </strong></td>
            <td :class="project.phase">{{project.phase}}</td>
          </tr>
          <tr>
            <td><strong>Project Status: </strong></td>
            <td :class="project.status">{{project.status}}</td>
          </tr>
          <tr>
            <td><strong>Project Start Date: </strong></td>
            <td>{{project.startDate}}</td>
          </tr>
          <tr>
            <td><strong>Project Finish Date: </strong></td>
            <td>{{project.finishDate}}</td>
          </tr>
          <tr>
            <td class="pointer" @click="descPanel = !descPanel">Show Description</td>
          </tr>
        </table>
        <table v-if="editMode">
          <tr>
            <td><strong>Project Name: </strong></td>
            <td>
              <v-text-field
                v-model="project.projectName"
              ></v-text-field>
            </td>
          </tr>
          <tr>
            <td><strong>Project Phase: </strong></td>
            <td> <v-select :items="phases" v-model="project.phase"></v-select></td>
          </tr>
          <tr>
            <td><strong>Project Status: </strong></td>
            <td> <v-select :items="status" v-model="project.status"></v-select> </td>
          </tr>
          <tr>
            <td><strong>Project Start Date: </strong></td>
            <td>
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
                :return-value.sync="project.startDate"
              >
                <v-text-field
                  slot="activator"
                  label="Start Date"
                  v-model="project.startDate"
                  prepend-icon="event"
                  readonly
                ></v-text-field>
                <v-date-picker v-model="project.startDate" @input="$refs.dateMenu.save(project.startDate)"></v-date-picker>
              </v-menu>
            </td>
          </tr>
          <tr>
            <td><strong>Project Finish Date: </strong></td>
            <td><v-menu
              ref="dateMenu2"
              lazy
              :close-on-content-click="false"
              v-model="dateMenu2"
              transition="scale-transition"
              offset-y
              full-width
              :nudge-right="40"
              min-width="290px"
              :return-value.sync="project.finishDate"
            >
              <v-text-field
                slot="activator"
                label="Start Date"
                v-model="project.finishDate"
                prepend-icon="event"
                readonly
              ></v-text-field>
              <v-date-picker v-model="project.finishDate" @input="$refs.dateMenu2.save(project.finishDate)"></v-date-picker>
            </v-menu></td>
          </tr>
        </table>
      </v-flex>
      <v-flex md4 class="mt-4" v-if="descPanel">
        <h2>Short Description</h2>
        <p v-if="!editMode" class="mt-3">{{project.description}}</p>
        <v-text-field
          v-if="editMode"
          v-model="project.description"
          color="red"
          multi-line
          label="Description"
        >
        </v-text-field>
        <div>
        <v-btn
          v-if="editMode"
          style="float: right"
          small
          @click="changeProject"
          :loading="loading"
          color="primary"
        >Save</v-btn>
        </div>
      </v-flex>
    </v-layout>
    <v-divider class="my-3"></v-divider>
    <v-container>
        <todo-index class="mr-2"></todo-index>
    </v-container>
  </v-container>
</template>

<script>
import ProjectServices from '@/services/ProjectServices'
import TodoIndex from '@/components/todos/index'

export default {
  components: {TodoIndex},
  data: () => ({
    project: {},
    descPanel: false,
    loading: false,
    editMode: false,
    phases: ['Pre-Study', 'Planning', 'Execution', 'Closing'],
    status: ['In-Progress', 'On-Hold', 'Postponed', 'Canceled', 'Complete'],
    dateMenu: false,
    dateMenu2: false,
  }),
  methods: {
    mode () {
      this.editMode = !this.editMode
      this.descPanel = true
    },
    changeProject () {
      this.loading = true
      ProjectServices.editProject(this.project)
        .then((res) => {
          this.loading = false
          console.log(res.data)
        })
        .catch((err) => {
          this.loading = false
          console.log(err.data)
        })
    }
  },
  created () {
    ProjectServices.getProject(this.$route.params.id)
      .then((res) => {
        this.project = res.data.project
      })
      .catch((err) => {
        console.log(err.data)
      })
  }

}
</script>

<style scoped>
  h3 {
    color: #cd0000;
    font-size: 34px;
    letter-spacing: -2px;
    text-align: left;
  }
  .pointer:hover {
    cursor: pointer;
    color: #cd0000;
    font-weight: bold;
  }
</style>
