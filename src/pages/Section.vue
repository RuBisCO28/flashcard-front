<script setup>
import { defineProps } from 'vue'
import FlashCard from '../components/FlashCard.vue'

const props = defineProps({
  id: String
})
</script>

<template>
  <h1>Section {{ id }}</h1>
  <FlashCard :id="id"/>
</template>

<style scoped>
h1 {
  text-align: center;
}
</style>
