import { defineStore } from "pinia";
import { v4 as uuidv4 } from "uuid";

const randomSecs = () => Math.ceil(Math.random() * 3000);

export const useStore = defineStore({
  id: "todoList",
  state: () => ({
    todoList: [],
    loading: false,
  }),
  actions: {
    addTodo(name) {
      if (this.loading) return;
      this.loading = true;

      return new Promise((resolve, reject) => {
        setTimeout(() => {
          this.todoList.push({ name, id: uuidv4(), checked: false });
          this.loading = false;
          resolve();
        }, randomSecs());
      });
    },
    removeTodo(id) {
      if (this.loading) return;
      this.loading = true;

      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const idx = this.todoList.findIndex((item) => item.id === id);
          this.todoList.splice(idx, 1);
          this.loading = false;
          resolve();
        }, randomSecs());
      });
    },
    toggleTodo(id) {
      if (this.loading) return;
      this.loading = true;

      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const todo = this.todoList.find((item) => item.id === id);
          todo.checked = !todo.checked;
          this.loading = false;
          resolve();
        }, randomSecs());
      });
    },
  },
  getters: {},
});
