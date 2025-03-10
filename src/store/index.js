import { createStore } from 'vuex'

export default createStore({
  state: {
    classesCompleted: 0,
    idClasses: []
  },
  getters: {
    getClassesCompleted: state => state.classesCompleted,
    getIdClasses: state => state.idClasses
  },
  mutations: {
    changeClasses(state, data) {
      state.classesCompleted += data;
    },
    saveId(state, data) {
      state.idClasses.push(data);
    },
    deleteId(state, data) {
      state.idClasses = state.idClasses.filter(id => id !== data);
    }
  },
  actions: {
  },
})
