<template>
  <div class="root">
    <h3 class="title">Contact Us</h3>
    <div class="form">
      <input v-model="email" placeholder="Work email" class="email" />
      <input v-model="subject" placeholder="Subject" class="subject" />
      <textarea
        v-model="message"
        placeholder="Message"
        class="message"
        rows="5"
      />
      <button v-on:click="clear">Submit</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      email: "",
      subject: "",
      message: "",
    };
  },
  methods: {
    clear: function() {
      this.email = "";
      this.subject = "";
      this.message = "";
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
input {
  padding: 5px 15px;
  margin-bottom: 10px;
  width: 40%;
}
.form {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.title {
  text-align: center;
}
.message {
  margin-bottom: 10px;
  width: 40%;
  padding: 5px 15px;
}

button {
  padding: 10px 25px;
  border-radius: 25px;
  background: #2f4050;
  color: white;
  font-weight: bold;
  border: 1px solid #2f4050;
}
</style>
