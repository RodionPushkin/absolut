<script setup lang="ts">
import { useTodoStore } from '@/stores/todoStore'
import { useConfigStore } from '@/stores/configStore'
import { computed, ref, watch } from 'vue'
import checkIcon from '@/assets/check.svg'
import crossIcon from '@/assets/cross.svg'
const todoStore = useTodoStore()
const configStore = useConfigStore()
const currentPage = ref(1)
const todoPerPage = ref(configStore.config.todoPerPage)
const pagesCount = computed(() =>
  Math.ceil(todoStore.getTodos().length / todoPerPage.value),
)
const todos = computed(() =>
  todoStore.getTodosPerPage(currentPage.value, todoPerPage.value),
)
const permittedPages = (pageNumber: number) =>
  pageNumber == 1 ||
  pageNumber == pagesCount.value ||
  pageNumber == currentPage.value ||
  pageNumber == currentPage.value - 1 ||
  pageNumber == currentPage.value + 1
watch(todoPerPage, () => {
  currentPage.value = 1
})
</script>
<template>
  <div class="max-w-screen-md mx-auto p-4 flex flex-col gap-4">
    <div class="flex flex-col gap-2">
      <h1 class="text-2xl font-bold">Конфигурация</h1>
      <h2 class="text-xl">Количество задач на странице</h2>
      <input
        class="outline-none bg-slate-100 p-4 rounded-md text-xl"
        type="number"
        v-model="todoPerPage"
      />
    </div>
    <ul v-if="todos.length > 0" class="flex flex-col gap-2">
      <li v-for="(todo, index) in todos" :key="todo.id">
        <router-link
          class="flex gap-2 items-center p-4 rounded-xl bg-gray-400 text-md sm:text-xl"
          :to="`/item/${todo.id}`"
        >
          <p>{{ index + 1 + (currentPage - 1) * todoPerPage }}</p>
          <p class="mr-auto">{{ todo.title }}</p>
          <img v-if="todo.completed" :src="checkIcon" alt="check" />
          <img v-else :src="crossIcon" alt="cross"
        /></router-link>
      </li>
    </ul>
    <ul v-else>
      <li>No todos found</li>
    </ul>
    <ul class="flex justify-center gap-2">
      <li
        :class="`w-4 text-center ${currentPage == page ? 'text-blue-500' : ''}`"
        v-for="page in pagesCount"
        :key="page"
        v-show="permittedPages(page)"
      >
        <button v-if="permittedPages(page)" @click="currentPage = page">
          {{ page }}
        </button>
      </li>
    </ul>
  </div>
</template>
