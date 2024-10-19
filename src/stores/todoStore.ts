import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Todo } from '@/types'

export const useTodoStore = defineStore('todoStore', () => {
  const todos = ref<Array<Todo>>([])
  const fetchTodos = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await response.json()
    todos.value = data
  }
  const getTodos = () => todos.value
  const getTodoById = (id: number) => todos.value.find(todo => todo.id === id)
  const getTodosPerPage = (page: number, perPage: number) =>
    todos.value.slice((page - 1) * perPage, page * perPage)

  return {
    todos,
    fetchTodos,
    getTodos,
    getTodoById,
    getTodosPerPage,
  }
})
