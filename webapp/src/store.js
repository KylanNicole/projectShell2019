import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";

Vue.use(Vuex);

const vuexPersist = new VuexPersist({
  key: "project-template",
  storage: window.localStorage
});

export default new Vuex.Store({
  plugins: [vuexPersist.plugin],
  state: {
    todos: [
      {
        id: 1,
        done: false,
        title: "Test Todo1"
      },
      {
        id: 2,
        done: false,
        title: "Test Todo2"
      }
    ]
  },
  mutations: {
    addToDo(state, todo) {
      state.todos = [...state.todos, {...todo, done: false, id: state.todos.length+1}];},
    deleteToDo(state, todo) {
       state.todos.pop(todo);
    },
    checkOff(state, todo) {
       state.todo[todos].done = true;
    }
  },
  actions: {
    addToDo({ commit }, toDo) {
      debugger;
      commit("addToDo", toDo);
    },
    deleteToDo({ commit }, toDo) {
      debugger;
      commit("deleteToDo", toDo);
    },
    checkOff({ commit }, toDo) {
      debugger;
      commit("deleteToDo", toDo);
    }
  }
});
