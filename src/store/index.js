import { create } from "zustand";
import { getTodos } from "../service/todoService";

const useStore = create((set) => ({
  todos: [],

  fetchTodos: async () => {
    const result = await getTodos();
    console.log(result);
    set({ todos: result.todos });
  },

  clearTodos: () => set({ todos: [] }),

  toggleShowModal: () => set((state) => ({ showModal: !state.showModal })),

  addTodo: (todo) => {
    set((state) => ({ todos: [todo, ...state.todos] }));
    console.log(todo);
  },
  removeTodo: (id) =>
    set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) })),

  updateTodo: (id, text) => {
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, text: text } : todo
      ),
    }));
  },
}));

export default useStore;
