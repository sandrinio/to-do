<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md6>
      <v-card class="elevation-5">
        <v-toolbar dense dark color="indigo">
          <v-toolbar-title>New Project</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon @click="navigateTo('/')">
            <v-icon>arrow_back</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm12 md12>
                <v-text-field label="Project name" v-model="projectName"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md6>
                <v-select label="Phase" :items="newProject.phases" v-model="phase"></v-select>
              </v-flex>
              <v-flex xs12 sm6 md6>
                <v-select label="Status" :items="newProject.status" v-model="status"></v-select>
              </v-flex>
              <v-flex xs12 sm6 md6>
                  <v-menu
                    ref="startDate"
                    lazy
                    :close-on-content-click="false"
                    v-model="startDate"
                    transition="scale-transition"
                    offset-y
                    full-width
                    :nudge-right="40"
                    min-width="290px"
                    :return-value.sync="sDate"
                  >
                    <v-text-field
                      slot="activator"
                      label="Start Date"
                      v-model="sDate"
                      prepend-icon="event"
                      readonly
                    ></v-text-field>
                    <v-date-picker v-model="sDate" @input="$refs.startDate.save(sDate)"></v-date-picker>
                  </v-menu>
              </v-flex>
              <v-flex xs12 sm6 md6>
                <v-menu
                  ref="finishDate"
                  lazy
                  :close-on-content-click="false"
                  v-model="finishDate"
                  transition="scale-transition"
                  offset-y
                  full-width
                  :nudge-right="40"
                  min-width="290px"
                  :return-value.sync="fDate"
                >
                  <v-text-field
                    slot="activator"
                    label="Finish Date"
                    v-model="fDate"
                    prepend-icon="event"
                    readonly
                  ></v-text-field>
                  <v-date-picker v-model="fDate" @input="$refs.finishDate.save(fDate)"></v-date-picker>
                </v-menu>
              </v-flex>
              <v-flex xs12 sm12 md12>
                <v-text-field
                  label="Short Description"
                  v-model="description"
                  multi-line
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="close">Cancel</v-btn>
          <v-btn color="blue darken-1" :loading="loading" flat @click.native="save">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  import ProjectServices from '@/services/ProjectServices'
		export default {
				data () {
				  return {
            headline: 'New Project',
            projectName: '',
            phase: '',
            loading: false,
            startDate: '',
            sDate: '',
            fDate: '',
            finishDate: '',
            description: '',
            status: '',
            newProject: {
              phases: ['Pre-Study', 'Planning', 'Execution', 'Closing'],
              status: ['In-Progress', 'On-Hold', 'Postponed', 'Canceled', 'Complete']
            }
          }
        },
      methods: {
				  navigateTo(route){
				    this.$router.push(route)
          },
				  save () {
				    this.loading = true
            const projectData = {
              projectName: this.projectName,
              phase: this.phase,
              startDate: this.startDate,
              finishDate: this.finishDate,
              description: this.description,
              status: this.status,
              author: this.$store.state.user
            }
            ProjectServices.newProject(projectData)
              .then((res) => {
                this.loading = false
                if(res.data.error){
                  console.log(res.data.error)
                }else{
                  this.loading = false
                  this.navigateTo({name: 'dashboard'})
                }
              })
              .catch((err) => {
                console.log(err.data)
              })
          },
          close () {
				    this.navigateTo({name: 'dashboard'})
          }
      }
		}
</script>

<style scoped>

</style>
