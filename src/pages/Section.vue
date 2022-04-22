<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  id: Number
})
</script>

<template>
  <h1>Section</h1>
  {{ id }}
</template>

<style scoped>
h1 {
  text-align: center;
}
</style>
