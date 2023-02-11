import { create } from "zustand";

const useStore = create((set) => ({
    todos: [],
    addTodo: (todo) => set((state) => ({ todos: [ todo,...state.todos] })),
    removeTodo: (todo) => set((state) => ({ todos: state.todos.filter((t) => t !== todo) })),
}));

export default useStore;