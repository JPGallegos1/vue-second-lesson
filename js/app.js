var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!",
    displayUsers: "get users",
    users: [],
    welcome: "Hey Vue why u don't print my users?",
  },
  methods: {
    getUsers: async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await res.json();
      console.log(users);
      this.users.push(users);
    },
    mapUsers: () => {
      this.users.length > 0 && this.users.map((user) => user.email);
    },
  },
});
