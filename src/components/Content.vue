<template>
  <div class="root">
    <input v-model="search" placeholder="Search" /><br />
    <input v-model="todo" placeholder="Add todo" /><br />
    <button v-on:click="addTodo">Add Todo</button>

    <div class="lists">
      <div>
        <h4 v-on:click="toggleSort">
          Todo List
          <span class="arrow " :class="isSorted ? 'dsc' : 'asc'" />
        </h4>
        <div v-for="msg in filteredList" v-bind:key="msg.id">
          <input type="checkbox" id="checkbox" v-model="msg.isActive" />
          <label
            for="checkbox"
            class="title"
            v-bind:class="{ active: msg.isActive }"
            >{{ msg.title }}</label
          >
        </div>
      </div>

      <div>
        <h4>Pending</h4>
        <div>
          <div v-for="msg in pendingList" v-bind:key="msg.id">
            {{ msg.title }}
          </div>
        </div>
      </div>

      <div>
        <h4>Completed</h4>
        <div>
          <div v-for="msg in completedList" v-bind:key="msg.id">
            {{ msg.title }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Content",
  data() {
    return {
      todo: "",
      todos: [],
      nextTodoId: 0,
      search: "",
      isSorted: false,
    };
  },
  computed: {
    filteredList() {
      if (this.isSorted) {
        let filteredTodos = this.todos.filter((todo) => {
          return todo.title.toLowerCase().includes(this.search.toLowerCase());
        });
        return (
          filteredTodos &&
          filteredTodos.slice(0).sort((a, b) => (a.title < b.title ? -1 : 1))
        );
      } else {
        return this.todos.filter((todo) => {
          return todo.title.toLowerCase().includes(this.search.toLowerCase());
        });
      }
    },
    completedList() {
      return this.todos.filter((todo) => todo.isActive === true);
    },
    pendingList() {
      return this.todos.filter((todo) => todo.isActive === false);
    },
  },
  methods: {
    addTodo: function() {
      this.todos.push({
        title: this.todo,
        id: this.nextTodoId++,
        isActive: false,
      });
      this.todo = "";
    },
    toggleSort: function() {
      this.isSorted = !this.isSorted;
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
</style>
