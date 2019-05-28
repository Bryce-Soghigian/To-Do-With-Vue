new Vue({
  el: "#app",
  data: {
    userInput: "",
    user: "",
    todoInput: "",
    checkid: 0,
    nightmode: false,
    todos: [
      { id: 0, title: "make a new pen", status: false },
      { id: 1, title: "enjoy the day", status: false }
    ]
  },
  methods: {
    setname() {
      this.user = this.userinput;
    },
    checked(todo) {
      console.log(todo.id);
      this.todos[todo.id].status = !this.todos[todo.id].status;
    },
    addTodo() {
      if (this.todoInput !== "") {
        this.todos.push({
          id: this.todos.length+1,
          title: this.todoInput,
          status: false
        });
      }
      this.todoInput = "";
    },
    remove(todo) {
        this.todos.splice(this.todos.indexOf(todo), 1);
      // let confirming = confirm("are you sure?");
      // if (confirming) {
      // }
    },
    theme() {
      let b = document.querySelector("body");
      b.classList.toggle("nightmode");
      b.classList.toggle("neww");
      this.nightmode = !this.nightmode;
    }
  },
  computed: {
    pending() {
      return this.todos.filter(function(item) {
        return !item.status;
      });
    },
    done() {
      return this.todos.filter(function(item) {
        return item.status;
      });
    }
  }
});
