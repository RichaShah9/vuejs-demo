<template>
  <div class="root">
    <div class="title">Demo project</div>
    <nav>
      <router-link
        class="menu-title"
        v-for="routes in links"
        v-bind:key="routes.id"
        :to="`${routes.page}`"
        >{{ routes.text }}</router-link
      >
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      links: [
        {
          id: 0,
          text: "Todo App",
          page: "/",
        },
        {
          id: 1,
          text: "About Us",
          page: "/About",
        },
        {
          id: 2,
          text: "Contact Us",
          page: "/Contact",
        },
      ],
    };
  },
};
</script>

<style scoped>
.root {
  top: 0;
  background: #2f4050;
  position: fixed;
  width: 100%;
  text-align: center;
  color: white;
  padding: 20px 0px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.title {
  font-size: 25px;
  padding-left: 20px;
}
.menu-title {
  margin-left: 10px;
  color: white;
  padding-right: 20px;
  text-decoration: none;
}
</style>
