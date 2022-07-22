<script setup lang="ts">
import { provide, ref } from 'vue'
import { PROVIDE_APP_TIMESTAMP } from './utils/constants'

console.log('app created')
const timestamp = ref(new Date().valueOf())
provide(PROVIDE_APP_TIMESTAMP, timestamp)
</script>

<template>
  <div class="px-4 py-10 text-center text-gray-700 dark:text-gray-500">
    <router-view />
  </div>
</template>
