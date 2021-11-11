var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!",
    displayUsers: "get users",
    users: [],
    welcome: "Hey Vue why u don't print my users?",
    param: "",
  },
  methods: {
    getUsers: async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
      const users = await res.json();
      this.users = users;
      console.log(this.users);
    },
  },
  computed: {
    mapUsers: () => {
      return this.users.map((user) => user.email);
    },
  },
});
