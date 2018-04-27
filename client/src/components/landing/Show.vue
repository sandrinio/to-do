<template>
  <v-container>
    <v-flex>
      <h3 class="display-3">{{project.projectName}}</h3>
      <span class="subheading">{{project.description}}</span>
      <table>
        <tr>
          <td><strong>Project Phase: </strong></td>
          <td>{{project.phase}}</td>
        </tr>
        <tr>
          <td><strong>Project Status: </strong></td>
          <td>{{project.status}}</td>
        </tr>
        <tr>
          <td><strong>Project Start Date: </strong></td>
          <td>{{project.startDate}}</td>
        </tr>
        <tr>
          <td><strong>Project Finish Date: </strong></td>
          <td>{{project.finishDate}}</td>
        </tr>
      </table>
     <v-divider class="my-3"></v-divider>
    </v-flex>
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
  }),
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
</style>
