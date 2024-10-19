import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Config } from '@/types'

export const useConfigStore = defineStore('configStore', () => {
  const config = ref<Config>({
    todoPerPage: 10,
  })
  const updateConfig = (todoPerPage: number) => {
    config.value.todoPerPage = todoPerPage
  }

  return {
    config,
    updateConfig,
  }
})
