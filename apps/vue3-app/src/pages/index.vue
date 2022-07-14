<script setup lang="ts">
import { ElMessage } from 'element-plus'

const toast = () => {
  ElMessage.success('Hello')
}
</script>

<template>
  <div class="container">
    <h1>Hello world</h1>
    <el-button @click="toast">
      El Message
    </el-button>
  </div>
</template>

<style scoped>
.container {
  padding: 2rem;
  text-align: center;
}
</style>
