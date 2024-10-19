<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useTodoStore } from '@/stores/todoStore'
const store = useTodoStore()
store.fetchTodos()
</script>

<template>
  <RouterView />
</template>
