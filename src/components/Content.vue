<template>
  <div>
    <input v-model="message" /><br />
    <button v-on:click="addMessage">Add Message</button>
    <ul>
      <li v-for="msg in messages" v-bind:key="msg">
        {{ msg }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Content",
  data() {
    return {
      message: "",
      messages: []
    };
  },
  methods: {
    addMessage: function() {
      this.messages.push(this.message);
      this.message = ""
    }
  }
};
</script>

<style scoped>
div {
  margin-top: 74px;
  height: calc(100% - 168px);
  overflow: auto;
  padding: 10px;
  font-size: 20px;
}
</style>
