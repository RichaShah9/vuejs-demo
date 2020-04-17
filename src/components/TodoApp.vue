<template>
  <div class="root">
    <input v-model="search" placeholder="Search" class="search" /><br />
    <div class="input-group">
      <input
        type="text"
        placeholder="Add todo"
        :maxlength="255"
        v-model="todo"
        onkeypress="return (event.charCode > 64 && event.charCode < 91) 
        || (event.charCode > 96 && event.charCode < 123)"
      />
      <div class="input-length" v-text="255 - todo.length"></div>
    </div>
    <button v-on:click="add_todo" :disabled="todo == ''">Add Todo</button>
    <div class="lists">
      <div>
        <h4 v-on:click="toggle_sort">
          Todo List
          <span class="arrow " :class="isSorted ? 'dsc' : 'asc'" />
        </h4>
        <div v-for="msg in filtered_list" v-bind:key="msg.id">
          <input type="checkbox" :id="msg.id" v-model="msg.isActive" />
          <label
            :for="msg.id"
            class="title"
            v-bind:class="{ active: msg.isActive }"
            >{{ msg.title }}</label
          >
        </div>
      </div>

      <div>
        <h4>Pending</h4>
        <div>
          <div v-for="msg in pending_todos" v-bind:key="msg.id">
            {{ msg.title }}
          </div>
        </div>
      </div>

      <div>
        <h4>Completed</h4>
        <div>
          <div v-for="msg in completed_todos" v-bind:key="msg.id">
            {{ msg.title }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoApp",
  data() {
    return {
      todo: "",
      isSorted: this.$store.state.isSorted,
    };
  },
  methods: {
    add_todo: function() {
      this.$store.dispatch("ADD_TODO", this.todo);
      this.todo = "";
    },
    toggle_sort: function() {
      this.$store.dispatch("TOGGLE_SORT");
    },
  },
  computed: {
    pending_todos: function() {
      return this.$store.getters.pending_todos;
    },
    completed_todos: function() {
      return this.$store.getters.completed_todos;
    },
    filtered_list: function() {
      return this.$store.getters.filtered_list;
    },
    search: {
      set(val) {
        this.$store.commit("SET_SEARCH_KEYWORD", val);
      },
      get() {
        return this.$store.state.search;
      },
    },
  },
};
</script>

<style scoped>
.root {
  margin-top: 74px;
  height: calc(100% - 168px);
  overflow: auto;
  padding: 20px;
  font-size: 20px;
  text-align: left;
}
.active {
  color: green !important;
  text-decoration: line-through;
}
.title {
  color: red;
}
.arrow {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;
  opacity: 0.66;
}
.arrow.asc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid black;
}

.arrow.dsc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid black;
}

.lists {
  display: flex;
  justify-content: space-between;
  background: #f9f9fc;
  padding: 10px;
  margin-top: 10px;
}

.input-group {
  display: flex;
  margin: 10px 0px;
}

.input-length {
  padding: 5px 15px;
  font-size: 15px;
  font-weight: normal;
  line-height: 1;
  color: #2c3e50;
  text-align: center;
  background-color: #ecf0f1;
  border: 1px solid #dce4ec;
  border-radius: 4px;
}

input {
  padding: 5px 15px;
}
</style>
