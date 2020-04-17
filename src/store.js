import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    todos: [],
    nextTodoId: 0,
    isSorted: false,
    search: "",
  },
  actions: {
    ADD_TODO: function({ commit }, new_todo) {
      var set_new = {
        title: new_todo,
        isActive: false,
      };
      commit("ADD_TODO_MUTATION", set_new);
    },
    TOGGLE_SORT: function({ commit }) {
      commit("TOGGLE_SORT_MUTATION");
    },
  },
  mutations: {
    ADD_TODO_MUTATION: function(state, new_todo) {
      state.todos.push({ ...new_todo, id: state.nextTodoId++ });
    },
    TOGGLE_SORT_MUTATION: function(state) {
      state.isSorted = !state.isSorted;
    },
    SET_SEARCH_KEYWORD(state, searchKeyword) {
      state.search = searchKeyword;
    },
  },
  getters: {
    pending_todos: (state) => {
      var filtered = state.todos.filter(function(el) {
        return el.isActive === false;
      });
      return filtered;
    },
    completed_todos: (state) => {
      var filtered = state.todos.filter(function(el) {
        return el.isActive === true;
      });
      return filtered;
    },
    filtered_list: (state) => {
      if (state.isSorted) {
        let filteredTodos = state.todos.filter((todo) => {
          return todo.title.toLowerCase().includes(state.search.toLowerCase());
        });
        return (
          filteredTodos &&
          filteredTodos.slice(0).sort((a, b) => (a.title < b.title ? -1 : 1))
        );
      } else {
        return state.todos.filter((todo) => {
          return todo.title.toLowerCase().includes(state.search.toLowerCase());
        });
      }
    },
  },
});

export default store;
