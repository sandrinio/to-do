import Api from './Api'

export default {
  newProject (data) {
    return Api().post('new-project', data)
  },
  projectsGetter () {
    return Api().get('projectsGetter')
  },
  getProject (id) {
    return Api().get(`getProject/${id}`)
  }
}
