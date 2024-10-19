<script setup lang="ts">
import { computed } from 'vue'
import { useTodoStore } from '@/stores/todoStore'
import { useRoute } from 'vue-router'
const todoStore = useTodoStore()
const route = useRoute()
const todo = computed(() => todoStore.getTodoById(Number(route.params.id)))
</script>
<template>
  <div class="max-w-screen-md mx-auto p-4 flex flex-col gap-4">
    <router-link class="text-xl" to="/">Назад</router-link>
    <h1 class="text-2xl font-bold">Информация о карточке</h1>
    <ul v-if="todo">
      <li>Название: {{ todo.title }}</li>
      <li>Выполнено: {{ todo.completed }}</li>
      <li>Идентификатор: {{ todo.id }}</li>
      <li>Идентификатор пользователя: {{ todo.userId }}</li>
    </ul>
    <ul v-else>
      <li>Todo not found</li>
    </ul>
  </div>
</template>
