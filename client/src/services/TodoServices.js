import Api from './Api'

export default {
  newTask (data) {
    return Api().post('newTask', data)
  },
  tasksGetter (id) {
    return Api().get(`tasksGetter/${id.id}`)
  },
  modifyTask (data) {
    return Api().post(`modifyTask/${data[0]._id}`, data)
  },
  deleteTask (data) {
    return Api().get(`deleteTask/${data._id}`, data)
  }
}
