<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    console.log('app created')
  },
})
</script>

<template>
  <el-config-provider namespace="ep">
    <router-view />
  </el-config-provider>
</template>
